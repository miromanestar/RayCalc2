import { Component, OnInit, Input } from '@angular/core';
import { NavParams, NavController, ModalController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {

  name = "";
  iso = "";
  confirmation = "";
  themeChoice = "";
  darkModeEnabled = false;

  constructor(public nav:NavController, public modalController:ModalController, private storageService: StorageService, private pickerCtrl: PickerController, private theme: ThemeService) { 
    this.loadSettings();
  }

  enableDark() {
    this.theme.enableDark();
  }

  enableLight() {
    this.theme.enableLight();
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

  toggleTheme(darkmode: boolean) {
    if(darkmode) {
      this.themeChoice = 'enabled'
      this.storageService.setTheme(this.themeChoice).then(theme => {
        console.log(theme)
      });
      this.enableDark();
    } else {
      this.themeChoice = 'disabled'
      this.storageService.setTheme(this.themeChoice).then(theme => {
        console.log(theme)
      });
      this.enableLight();
    }
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
    this.storageService.getTheme().then(theme => {
      if(theme) { this.themeChoice = theme; if(theme == "enabled") {this.darkModeEnabled = true }} else {  this.darkModeEnabled = false }
    })
  }

  saveSettings() {
    this.storageService.setName(this.name).then(name => {
      console.log(name)
      this.confirmation = "Settings saved successfully!"
     });
     this.storageService.setISO(this.iso).then(iso => {
       console.log(iso)
     });
     this.storageService.setTheme(this.themeChoice).then(theme => {
      console.log(theme)
    });
  }

  ionViewWillEnter() {
    this.loadSettings();
    this.confirmation = "";
  }
}
