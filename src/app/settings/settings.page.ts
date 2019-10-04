import { Component, OnInit, Input } from '@angular/core';
import { NavParams, NavController, ModalController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {

  name = "";
  iso = "";
  confirmation = "";

  constructor(public nav:NavController, public modalController:ModalController, private storageService: StorageService, private pickerCtrl: PickerController) { 
    this.loadSettings();
  }

  async openPicker() {
    var opts: PickerOptions = {
      buttons: [ { text: 'Cancel', role: 'cancel' }, { text: 'Done', } ],
      
      columns: [ { name: 'select', options: [ { text: "Select an option", value: ""}, {text: "100", value: "100"}, {text: "80 (Inactive)", value: "80"}] }  ]
    }
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data => {
      let col = await picker.getColumn('select');
      if(col.options[col.selectedIndex].text != "Select an option" && col.options[col.selectedIndex].value != "80") { //Disable 80ISO setting due to lack of data
        this.iso = col.options[col.selectedIndex].value;
      }
    })
  }

  ngOnInit() {
    this.loadSettings();
  }

  closeModal() {
    this.modalController.dismiss();
  }

  loadSettings() {
    this.storageService.getName().then(name => {
      this.name = name;
    });
    this.storageService.getISO().then(iso => {
      if(iso) {this.iso = iso; } else { this.iso = "100" }
    });
  }

  saveSettings() {
    this.storageService.setName(this.name).then(name => {
      console.log(name)
      this.confirmation = "Settings saved successfully!"
     });
     this.storageService.setISO(this.iso).then(iso => {
       console.log(iso)
     })
  }

  ionViewWillEnter() {
    this.loadSettings();
    this.confirmation = "";
  }
}
