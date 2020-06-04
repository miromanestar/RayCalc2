import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ModalController, AlertController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';
import { SettingsPage } from '../settings/settings.page';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  date = new Date();
  
  constructor(public router: Router, public modalController : ModalController, private theme: ThemeService, private storageService: StorageService, public alertController: AlertController) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: SettingsPage
    });
    return await modal.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'User Agreement',
      message: 'By using this app, you agree that this app is experimental, and that it is not to be used in any official capacity whatsoever.',
      buttons: ['Agree']
    });
    return await alert.present();
    let userAgr = await alert.onDidDismiss();
  }

  goToInputPage(calcType: String) {
    const navigationExtras : NavigationExtras = { state: { calcSelect: calcType }};
    this.router.navigate(['/tabs/tab1/input-page'], navigationExtras);
  }

  ngOnInit() {
    this.presentAlert();
  }
}