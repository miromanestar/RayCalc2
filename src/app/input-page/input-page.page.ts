import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.page.html',
  styleUrls: ['./input-page.page.scss'],
})
export class InputPagePage implements OnInit {

  //Title HTML variable
  WhichSelected = "ERROR";

  //Declare input variables
  calcSelect = "";
  fieldSelect = "";
  energySelect = "";

  constructor(private router : Router, private pickerCtrl : PickerController) { 
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as { selectCalc: string };
    this.setCalcType(state);
  }

  //Also will set the variable for calcSelect to be used to determine properties of different input fields, important for the different calculation types.
  private setCalcType(state: { selectCalc: string; }) {
    if(state.selectCalc == 'ssd') { this.WhichSelected = 'SSD Calculation'; this.fieldSelect = 'Single';}
    if(state.selectCalc =='sad') { this.WhichSelected = "SAD Calculation"}
    this.calcSelect = state.selectCalc;
  }

  //Picker selection, takes string input to determine which values to display
  async openPicker(selection: string) {
    if(this.calcSelect == "sad") {
      var opts: PickerOptions = { columns: [] };
      if(selection == "field") {
        var opts: PickerOptions = {
          buttons: [ { text: 'Cancel', role: 'cancel' }, { text: 'Done', } ],
          
          columns: [ { name: 'select', options: [ { text: "Select an option", value: ""}, {text: "Single", value: "Single"}, {text: "Opposed", value: "Opposed"}] }  ]
        }
      }
      if(selection == "energy") {
        var opts: PickerOptions = {
          buttons: [ { text: 'Cancel', role: 'cancel' }, { text: 'Done', } ],
          
          columns: [ { name: 'select', options: [ { text: "Select an option", value: ""}, {text: "6", value: "6"}, {text: "10", value: "10"}, {text: "18", value: "18"}] }  ]
        }
      }
      let picker = await this.pickerCtrl.create(opts);
      picker.present();
      picker.onDidDismiss().then(async data => { 
      let col = await picker.getColumn('select');
      if(col.options[col.selectedIndex].text != "Select an option") {
        if (selection == "field") { this.fieldSelect = col.options[col.selectedIndex].text; } else
        if (selection == "energy") { this.energySelect = col.options[col.selectedIndex].text; }
      }
      });
    }
  }

  ngOnInit() {
  }
}
