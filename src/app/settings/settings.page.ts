import { Component, OnInit, Input } from '@angular/core';
import { NavParams, NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {

  constructor(public nav:NavController, public modalController:ModalController) { 
    
  }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
