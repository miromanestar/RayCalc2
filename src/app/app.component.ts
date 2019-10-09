import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ThemeService } from './services/theme.service';
import { StorageService } from './services/storage.service';

declare var Keyboard: any;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storageService: StorageService,
    private theme: ThemeService,

  ) {
    window.addEventListener("keyboardDidShow", () => {
      document.activeElement.scrollIntoView(true);
    })

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    prefersDark.addListener((mediaQuery) => this.themeControl(mediaQuery.matches));
    this.themeControl(false);
    

    this.initializeApp();
  }

  themeControl(enable: boolean) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    if(enable) { if(prefersDark.matches) { this.enableDark() } else {  this.enableLight() }}

    this.storageService.getTheme().then(theme => {
      if(theme == null) { 
        this.storageService.setTheme('mimc');
        if(prefersDark.matches) { this.enableDark() } else { this.enableLight() }
        prefersDark.addListener((mediaQuery) => this.themeControl(mediaQuery.matches));  
      } else {
        if(theme == 'mimic') { if(prefersDark.matches) { this.enableDark() } else { this.enableLight() }}
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
      this.statusBar.overlaysWebView(true);
      this.statusBar.show();
      this.splashScreen.hide();
      this.statusBar.styleLightContent();

      Keyboard.setResizeMode('native')
      Keyboard.setKeyboardStyle('light')
      Keyboard.disableScroll(false)
      Keyboard.hideFormAccessoryBar(false)
    });
  }
}
