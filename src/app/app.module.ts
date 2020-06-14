import { NgModule, Inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, Config } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { IonicStorageModule } from '@ionic/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsPageModule } from './settings/settings.module'
import { ResultsPageModule } from './results/results.module';
import { DataviewpopoverComponent } from './dataviewpopover/dataviewpopover.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, DataviewpopoverComponent],
  entryComponents: [DataviewpopoverComponent],
  imports: [BrowserModule,
    IonicModule.forRoot( 
    {
      scrollPadding: false,
      scrollAssist: false,
      swipeBackEnabled: false, //CHANGE TO TRUE FOR iOS BUILDS, FALSE FOR WEB BUILDS
      mode: 'ios'
    }),
    AppRoutingModule, SettingsPageModule, ResultsPageModule, IonicStorageModule.forRoot(), ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [
    SplashScreen,
    NativeStorage,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
