import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-historyview',
  templateUrl: './historyview.page.html',
  styleUrls: ['./historyview.page.scss'],
})
export class HistoryviewPage implements OnInit {

  id = new Date()
  identifier = "";
  calcTitle = "";
  treatSite = "";
  energySelect = "";
  fieldSelect = "";
  script = "";
  inverseSqr = "";
  ssd = "";
  depth = "";
  x1 = "";
  x2 = "";
  length = "";
  y1 = "";
  y2 = "";
  width = "";
  equivalentSqr = "";
  dpf = "";
  scp = "";
  PDDTPR = "";
  mus = "";
  calcFormula = "";
  date = "";
  name = "";
  
  constructor(public router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state.history as { 
      id: Date
      identifier: string,
      calcTitle: string,
      treatSite: string,
      energySelect: string,
      fieldSelect: string,
      script: string,
      inverseSqr: string,
      ssd: string,
      depth: string,
      y1: string,
      y2: string,
      length: string,
      x1: string,
      x2: string,
      width: string,
      equivalentSqr: string,
      dpf: string,
      scp: string,
      PDDTPR: string,
      mus: string,
      calcFormula: string,
      date: string,
      name: string,
    };

    this.id = state.id
    this.identifier = state.identifier
    this.calcTitle = state.calcTitle
    this.treatSite = state.treatSite
    this.energySelect = state.energySelect
    this.fieldSelect = state.fieldSelect
    this.script = state.script
    this.inverseSqr = state.inverseSqr
    this.ssd = state.ssd
    this.depth = state.depth
    this.length = state.length
    this.width = state.width
    this.equivalentSqr = state.equivalentSqr
    this.dpf = state.dpf
    this.scp = state.scp
    this.PDDTPR = state.PDDTPR
    this.mus = state.mus
    this.calcFormula = state.calcFormula
    this.date = state.date
    this.name = state.name
   }

   goToInputPage() {
    const navigationExtras : NavigationExtras = { state: { importData: {
      calcSelect: this.calcTitle,
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

    }}};
    this.router.navigate(['/tabs/tab1/input-page'], navigationExtras);
   }

  ngOnInit() {
  }

}
