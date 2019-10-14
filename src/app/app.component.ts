import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ThemeService } from './services/theme.service';
import { StorageService } from './services/storage.service';

declare var Keyboard: any;
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storageService: StorageService,
    private theme: ThemeService,

  ) {
    this.themeControl(false);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    prefersDark.addListener((mediaQuery) => this.themeControl(mediaQuery.matches));
    

    this.initializeApp();
  }

  themeControl(enable: boolean) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    if(enable) { if(prefersDark.matches) { this.enableDark() } else {  this.enableLight() }}

    this.storageService.getTheme().then(theme => {
      if(theme == null) { 
        if(prefersDark.matches) { this.enableDark() } else { this.enableLight() }
        prefersDark.addListener((mediaQuery) => this.themeControl(mediaQuery.matches));  
      } else {
        if(theme == 'mimic') { if(prefersDark.matches) { this.enableDark() } else { this.enableLight(); this.statusBar.styleDefault(); }}
        if(theme == 'light') { this.enableLight() }
        if(theme == 'dark') { this.enableDark() }
      }
    })
  }

  enableDark() {
    this.theme.enableDark();
  }

  enableLight() {
    this.theme.enableLight();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      prefersDark.addListener((mediaQuery) => this.themeControl(mediaQuery.matches));
      this.statusBar.overlaysWebView(false);
      this.statusBar.show();
      this.splashScreen.hide();

      Keyboard.setResizeMode('native')
      Keyboard.setKeyboardStyle('light')
      Keyboard.disableScroll(true)
      Keyboard.hideFormAccessoryBar(false)
    });
  }

  ngAfterViewInit() {
    // This element never changes.
    let ionapp = document.getElementsByTagName("ion-app")[0];

    window.addEventListener('keyboardDidShow', async (event) => {
        // Move ion-app up, to give room for keyboard
        let kbHeight: number = event["keyboardHeight"];
        let viewportHeight: number = $(window).height();
        let inputFieldOffsetFromBottomViewPort: number = viewportHeight - $(':focus')[0].getBoundingClientRect().bottom;
        let inputScrollPixels = kbHeight - inputFieldOffsetFromBottomViewPort;

        // Set margin to give space for native keyboard.
        ionapp.style["margin-bottom"] = kbHeight.toString() + "px";

        // But this diminishes ion-content and may hide the input field...
        if (inputScrollPixels > 0) {
            // ...so, get the ionScroll element from ion-content and scroll correspondingly
            // The current ion-content element is always the last. If there are tabs or other hidden ion-content elements, they will go above.
            let ionScroll = await $("ion-content").last()[0].getScrollElement();
            setTimeout(() => {
                $(ionScroll).animate({
                    scrollTop: ionScroll.scrollTop + inputScrollPixels
                }, 300);
            }, 300); // Matches scroll animation from css.
        }
    });
    window.addEventListener('keyboardDidHide', () => {
        // Move ion-app down again
        // Scroll not necessary.
        ionapp.style["margin-bottom"] = "0px";
    });
  }

  ngOnInit() {

  }
}
