import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SettingsPage } from '../settings/settings.page';
import { InputPagePage } from '../input-page/input-page.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router: Router, public modalController : ModalController) {

  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: SettingsPage
    });
    return await modal.present();
  }

  goToInputPage(calcType: String) {
    const navigationExtras : NavigationExtras = { state: { selectCalc: calcType }};
    this.router.navigate(['/input-page'], navigationExtras);
  }
}