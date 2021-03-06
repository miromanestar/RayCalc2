import { Component, OnInit } from '@angular/core';
import { Platform, Config } from '@ionic/angular';
import { Plugins, StatusBarStyle, KeyboardResize } from '@capacitor/core';
import { ThemeService } from './services/theme.service';
import { StorageService } from './services/storage.service';


const { StatusBar, SplashScreen, Keyboard } = Plugins;
 
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private platform: Platform,
    private storageService: StorageService,
    private theme: ThemeService,
    private config: Config,

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
        if(theme == 'mimic') { if(prefersDark.matches) { 
          this.enableDark() 
          } else { 
            this.enableLight(); StatusBar.setStyle({ style: StatusBarStyle.Dark }); 
          }
        }
        if(theme == 'light') { this.enableLight() }
        if(theme == 'dark') { this.enableDark() }
      }
    });
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
      StatusBar.show();
      SplashScreen.hide();
      
      if (this.platform.is('hybrid')) { 
        this.config.set('swipeBackEnabled', true);
      }

      Keyboard.setAccessoryBarVisible({ isVisible: true });
      Keyboard.setResizeMode({ mode: KeyboardResize.Ionic });
      Keyboard.setScroll({ isDisabled: false });
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {}
}
