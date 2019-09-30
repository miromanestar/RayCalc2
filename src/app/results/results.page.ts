import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  calcTitle = "";
  PDDTPR = "";
  calcFormula = "";

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
  inverseSqr = ""; //STILL NEEDS TO BE IMPLEMENTED

  //Declare calculated variables
  mus= "";
  scp = "";
  pdd = "";
  dpf = "";

  //Declare misc variables
  date = "Error: Cannot grab date";
  name = "Error: No value found";

  constructor(public router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as { 
      calcSelect: string,
      identifier: string,
      treatSite: string,
      fieldSelect: string,
      energySelect: string,
      script: string,
      ssd: string,
      depth: string,
      x1: string,
      x2: string,
      length: string,
      y1: string,
      y2: string,
      width: string,
      equivalentSqr: string
    };

    //Date
    let today = new Date();
    let hour: any;
    let ampm: string;
    if(today.getHours() > 12) {
      hour = today.getHours() - 12;
      ampm = "PM";
    } else { ampm = "AM"}
    this.date = (today.getMonth()+1) + "/" + today.getDate() + "/" + today.getFullYear() + " at " + hour + ":" + today.getMinutes() + " " + ampm;

    this.identifier = state.identifier
    this.treatSite = state.treatSite
    this.calcSelect = state.calcSelect
    this.fieldSelect = state.fieldSelect
    this.energySelect = state.energySelect
    this.script = state.script
    this.ssd = state.ssd
    this.depth = state.depth
    this.x1 = state.x1
    this.x2 = state.x2
    this.length = state.length
    this.y1 = state.y1
    this.y2 = state.y2
    this.width = state.width
    this.equivalentSqr = state.equivalentSqr

    if(this.calcSelect == "ssd") { this.calcTitle = "Source-Surface-Distance Calculation"; this.PDDTPR = "PDD: Not Implemented"; this.calcFormula = "/assets/ssdFormulaCalc.svg" }
    if(this.calcSelect == "sad") { this.calcTitle = "Source-Axis-Distance Calculation"; this.PDDTPR = "TPR: Not Implemented"; this.calcFormula = "/assets/sadCalcFormula.svg" }

    if(this.calcSelect == "sad") {
      switch (this.energySelect) {
        case ("6"): this.inverseSqr = String(1.0323); break;
        case ("10"): this.inverseSqr = String(1.0445); break;
        //case ("15"): this.inverseSqr = String(0.0); break; To be implemented
        case ("18"): this.inverseSqr = String(1.0671); break;
        default: "ERROR: Inverse Square Factor not found";
      }
    }

    if(this.calcSelect == "ssd") {
      this.inverseSqr = "Not Applicable"
    }
   }

  ngOnInit() {
  }

}
