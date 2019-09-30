import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  calcTitle = "";

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

  constructor(public router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as { 
      selectCalc: string,
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
    this.identifier = state.identifier
    this.treatSite = state.treatSite
    this.calcSelect = state.selectCalc
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

    if(this.calcSelect = "ssd") { this.calcTitle = "Source-Surface-Distance Calculation" }
    if(this.calcSelect = "sad") { this.calcTitle = "Source-Axis-Distance Calculation" }
   }

  ngOnInit() {
  }

}
