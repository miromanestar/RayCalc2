import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ThemeService } from './services/theme.service';
import { StorageService } from './services/storage.service';

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
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    prefersDark.addListener((mediaQuery) => this.themeControl(mediaQuery.matches));
    this.storageService.getSys().then(sys => {
      if(sys == true) { 
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        prefersDark.addListener((mediaQuery) => this.themeControl(mediaQuery.matches));
        if(prefersDark.matches) { this.enableDark() } else { this.enableLight() }
      } else {
        this.storageService.getTheme().then(theme => {
          if(theme == 'enabled') { this.enableDark() } else { this.enableLight(); }
        })
      }
    })

    this.initializeApp();
  }

  themeControl(enabled: boolean) {
    this.storageService.getSys().then(sys => {
      if(sys == true) { 
        if(enabled) { this.enableDark() } else { this.enableLight() }
      } else {
        this.storageService.getTheme().then(theme => {
          if(theme == 'enabled') { this.enableDark() } else { this.enableLight(); }
        })
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
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(true);
      this.statusBar.show();
      this.splashScreen.hide();
    });
  }
}
