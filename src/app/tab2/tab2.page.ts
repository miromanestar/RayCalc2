import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SettingsPage } from '../settings/settings.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public router: Router, public modalController: ModalController) { }

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

  viewData(selection: string) {
    const navigationExtras : NavigationExtras = { state: { selection: selection }};
    this.router.navigate(['/tabs/tab2/dataview'], navigationExtras);
  }
}
