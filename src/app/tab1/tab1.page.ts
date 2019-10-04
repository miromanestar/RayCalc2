import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';
import { SettingsPage } from '../settings/settings.page';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx'
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router: Router, public modalController : ModalController, private iab: InAppBrowser, private theme: ThemeService, private storageService: StorageService) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: SettingsPage
    });
    return await modal.present();
  }

  goToInputPage(calcType: String) {
    const navigationExtras : NavigationExtras = { state: { calcSelect: calcType }};
    this.router.navigate(['/tabs/tab1/input-page'], navigationExtras);
  }

  openInApp(url: string) {
    this.iab.create(url, '_blank');
  }
}