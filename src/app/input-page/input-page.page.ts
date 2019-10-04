import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { NgStyle } from '@angular/common';
import { ResultsPage } from '../results/results.page';
import { StorageService } from '../services/storage.service';
import { isNumber } from 'util';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.page.html',
  styleUrls: ['./input-page.page.scss'],
})
export class InputPagePage implements OnInit {

  //Title HTML variable
  WhichSelected = "ERROR: Data Failed to Pass";

  //Declare styling variables
  identifierStyle: any
  treatSiteStyle: any
  fieldStyle: any
  energyStyle: any
  scriptStyle: any
  ssdStyle: any
  depthStyle: any
  widthStyle: any
  lengthStyle: any
  equivalentSqrStyle: any

  //Declare input variables
  identifier = "";
  treatSite = "";
  calcSelect = "";
  fieldSelect = "";
  energySelect = "";
  script = "";
  ssd = "";
  depth = "";
  x1 = "";
  x2 = "";
  length = "";
  y1 = "";
  y2 = "";
  width = "";
  equivalentSqr = "";

  //Enable/disable SSD
  disableSSD = "false";

  constructor(public router : Router, private pickerCtrl : PickerController, private storageService: StorageService) { 
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as { calcSelect: string, importData: any,
     };
    
    if(state.importData != null) { this.setImportData(state.importData) } else { this.setCalcType(state.calcSelect); }
  }

  setImportData(importData: any) {

    this.identifier = importData.identifier
    this.treatSite = importData.treatSite
    this.fieldSelect = importData.fieldSelect
    this.energySelect = importData.energySelect
    this.script = importData.script
    this.depth = importData.depth
    this.length = importData.length
    this.width = importData.width
    this.ssd = importData.ssdStyle
    this.equivalentSqr = importData.equivalentSqr
    this.x1 = importData.x1
    this.x2 = importData.x2
    this.y1 = importData.y1
    this.y2 = importData.y2

    if(importData.calcSelect == "Source-Surface-Distance Calculation") {
      this.calcSelect = "ssd"
    } else { this.calcSelect = "sad" }

    this.setCalcType(this.calcSelect)
  }

  //Also will set the variable for calcSelect to be used to determine properties of different input fields, important for the different calculation types.
  private setCalcType(calcSelect: string) { 

    if(calcSelect == 'ssd') { 
      this.WhichSelected = 'SSD Calculation'; 
      this.fieldSelect = 'Single';  
      this.disableSSD = "true"; 

      this.storageService.getISO().then(iso => {
        if(iso != "" && isNumber(iso)) { this.ssd= iso; } else {this.ssd = "100" }
      });
    }
    if(calcSelect =='sad') { this.WhichSelected = "SAD Calculation"}
    this.calcSelect = calcSelect;
  }

  //Picker selection, takes string input to determine which values to display
  async openPicker(selection: string) {
    if(this.calcSelect == "sad" || selection == 'energy') {
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
          
          columns: [ { name: 'select', options: [ { text: "Select an option", value: ""}, {text: "6", value: "6"}, {text: "10", value: "10"}, {text: "15 (Inactive)", value: "15"}, {text: "18", value: "18"}] }  ]
        }
      }
      let picker = await this.pickerCtrl.create(opts);
      picker.present();
      picker.onDidDismiss().then(async data => { 
      let col = await picker.getColumn('select');
      if(col.options[col.selectedIndex].text != "Select an option" && col.options[col.selectedIndex].value != "15") { //Disable 15MV energy level due to lack of data
        if (selection == "field") { this.fieldSelect = col.options[col.selectedIndex].value; } else
        if (selection == "energy") { this.energySelect = col.options[col.selectedIndex].value; }
      }
      });
    }
  }

  changeISO(selection: string) {
    if(this.calcSelect == "sad") {
      var depthn = Number(this.depth);
      var ssdn = Number(this.ssd);
      if(selection == "depth") { this.ssd = String(100 - depthn) }
      if(selection == "ssd") { this.depth = String(100 - ssdn) }
      this.depthStyle = { 'color': 'inherit' }
      this.ssdStyle = { 'color': 'inherit' }
    }
  }

  roundDepth() {
    let depthn = Number(this.depth)
    this.depth = String(Number((Number(depthn) * 2).toFixed())/2)
  }

  changeLength() {
    var x1n = Number(this.x1);
    var x2n = Number(this.x2);
    this.length = String(x1n + x2n);
    this.equivalentSquare();
  }

  changeWidth() {
    var y1n = Number(this.y1);
    var y2n = Number(this.y2);
    this.width = String(y1n + y2n);
    this.equivalentSquare();
  }

  changeX() {
    var lengthn = String(Number(this.length)/2);
    this.x1 = lengthn;
    this.x2 = lengthn;
    this.equivalentSquare();
  }

  changeY() {
    var widthn = String(Number(this.width)/2);
    this.y1 = widthn;
    this.y2 = widthn;
    this.equivalentSquare();
  }

  equivalentSquare() { //Will ensure the value will always go to the nearest half
    if(this.equivalentSqr == "Value too small" || this.equivalentSqr == "Value too large") {
      this.equivalentSqr = "";
      this.equivalentSqrStyle = { 'color': 'inherit'}
    }

    var lengthn = Number(this.length);
    var widthn = Number(this.width);
    var result = String((2 * lengthn * widthn)/(lengthn + widthn));
    if(result != "NaN" && widthn != 0 && lengthn != 0) {
      this.equivalentSqr = String(Number((Number(result) * 2).toFixed())/2)
    } else {
      this.equivalentSqr = "";
    }
  }

  calculatePressed() {
    if((this.length != "" && this.width != "" && this.script != "" && this.fieldSelect != "" &&(this.depth != "" && (Number(this.depth) <= 30 && Number(this.depth) >= 0.5)) && this.energySelect != "" && this.fieldSelect != "Required" && this.ssd != "" && (Number(this.equivalentSqr) <= 30 && Number(this.equivalentSqr) >= 5)) && (this.length != "Required" && this.width != "Required" && this.script != "Required" && (this.depth != "Required" && this.depth != "Too large" && this.depth != "Too small") && this.energySelect != "Required" && this.ssd != "Required" && (this.equivalentSqr != "Value too large" && this.equivalentSqr != "Value too small"))) {
      const navigationExtras : NavigationExtras = { state: 
        { calcSelect: this.calcSelect,
          identifier: this.identifier,
          treatSite: this.treatSite,
          fieldSelect: this.fieldSelect,
          energySelect: this.energySelect,
          script: this.script,
          ssd: this.ssd,
          depth: this.depth,
          x1: this.x1,
          x2: this.x2,
          length: this.length,
          y1: this.y1,
          y2: this.y2,
          width: this.width,
          equivalentSqr: this.equivalentSqr
        }
      };
      this.router.navigate(['/tabs/tab1/results'], navigationExtras);
    } else {
      if(this.script == "") { this.script = "Required"; this.scriptStyle = { 'color': 'red'}}
      if(this.depth == "") { this.depth = "Required"; this.depthStyle = { 'color': 'red'}}
      if(Number(this.depth) > 30) { this.depth = "Too large"; this.depthStyle = { 'color': 'red'}}
      if(Number(this.depth) < 0.5) { this.depth = "Too small"; this.depthStyle = { 'color': 'red'}}
      if(this.length == "") { this.length = "Required"; this.lengthStyle = { 'color': 'red'}}
      if(this.width == "") { this.width = "Required"; this.widthStyle = { 'color': 'red'}}
      if(this.energySelect == "") { this.energySelect = "Required"; this.energyStyle = { 'color': 'red'}}
      if(this.ssd == "") { this.ssd = "Required"; this.ssdStyle = { 'color': 'red'}}
      if(this.fieldSelect == "") { this.fieldSelect = "Required"; this.fieldStyle = { 'color': 'red'}}

      if(this.equivalentSqrStyle != { 'color': 'red'}) {
        if(Number(this.equivalentSqr) > 30) { this.equivalentSqr = "Value too large"; this.equivalentSqrStyle = { 'color': 'red'}}
        if(Number(this.equivalentSqr) < 5) { this.equivalentSqr = "Value too small"; this.equivalentSqrStyle = { 'color': 'red'}}
      }
    }
  }

  resetInputs(selection: String) {
    if(selection == "script" && this.script == "Required") { this.script = ""; this.scriptStyle = {'color': 'inherit'} }
    if(selection == "ssd" && this.ssd == "Required") { this.ssd = ""; this.ssdStyle = {'color': 'inherit'} }
    if(selection == 'depth' && (this.depth == "Required" || this.depth == "Too small" || this.depth == "Too large")) { this.depth = ""; this.depthStyle = {'color': 'inherit'} }
    if(selection == "energy" && this.energySelect == "Required") { this.energySelect = ""; this.energyStyle = {'color': 'inherit'} }
    if(selection == "length" && this.length == "Required") { this.length = ""; this.lengthStyle = {'color': 'inherit'} }
    if(selection == "width" && this.width == "Required") { this.width = ""; this.widthStyle = {'color': 'inherit'} }
    if(selection == "field" && this.fieldSelect == "Required") { this.fieldSelect = ""; this.fieldStyle = {'color': 'inherit'} }
   }

  ngOnInit() {
  }
}
