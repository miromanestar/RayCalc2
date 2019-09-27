import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { SettingsPage } from '../settings/settings.page';
import { InputPagePage } from '../input-page/input-page.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public navCtrl: NavController, public modalController : ModalController) {

  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: SettingsPage
    });
    return await modal.present();
  }

  goToInputPage(calcType: String) {
    this.navCtrl.navigateForward('/input-page', ); //this.router.navigateByURL() via angular to pass data... figure out later
  }
}