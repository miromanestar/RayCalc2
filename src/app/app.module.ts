import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsPageModule } from './settings/settings.module'
import { ResultsPageModule } from './results/results.module';
import { DataviewpopoverComponent } from './dataviewpopover/dataviewpopover.component';

@NgModule({
  declarations: [AppComponent, DataviewpopoverComponent],
  entryComponents: [DataviewpopoverComponent],
  imports: [BrowserModule, IonicModule.forRoot({scrollPadding: false, scrollAssist: false}), AppRoutingModule, SettingsPageModule, ResultsPageModule, IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    InAppBrowser,
    Keyboard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
