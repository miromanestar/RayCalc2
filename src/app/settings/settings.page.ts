import { Component, OnInit, Input } from '@angular/core';
import { NavParams, NavController, ModalController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { ThemeService } from '../services/theme.service';
import { Plugins, StatusBarStyle } from '@capacitor/core';

const { StatusBar } = Plugins;

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

  constructor(public nav:NavController, 
    public modalController:ModalController, 
    private storageService: StorageService, 
    private pickerCtrl: PickerController, 
    private theme: ThemeService) { 
    this.loadSettings();
  }

  checkValue(selection: string) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    if(selection == null) { selection = "mimic"; this.themeChoice = "mimic" }
    this.storageService.setTheme(selection).then(selection => { 
      console.log(selection)
      if(selection != null) {
        this.themeChoice = selection

        if(selection == "mimic") {
          if(prefersDark.matches) { this.enableDark() } else { this.enableLight();  StatusBar.setStyle({ style: StatusBarStyle.Light }); }
        }
        if(selection == "light") { this.enableLight(); StatusBar.setStyle({ style: StatusBarStyle.Light }); }
        if(selection == "dark") { this.enableDark(); }
      }
    });
  }

  test() {
    StatusBar.setStyle({ style: StatusBarStyle.Light });;
  }
  test1() {
    StatusBar.setStyle({ style: StatusBarStyle.Dark });
  }
  test2() {
    StatusBar.setStyle({ style: StatusBarStyle.Dark });
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
      if(theme) { this.themeChoice = theme; console.log(this.themeChoice) 
      } else { 
        this.themeChoice = "mimic" 
        this.storageService.setTheme("mimic").then(theme => { console.log("Saved" + theme)})
      }
    })
  }

  saveSettings() {
    this.storageService.setName(this.name).then(name => {
      console.log(name)
      //this.confirmation = "Settings saved successfully!"
     });
     this.storageService.setISO(this.iso).then(iso => {
       console.log(iso)
     });
  }

  ionViewWillEnter() {
    this.loadSettings();
    this.confirmation = "";
  }
}
