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
  script = "";
  inverseSqr = "";
  ssd = "";
  depth = "";
  length = "";
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
      script: string,
      inverseSqr: string,
      ssd: string,
      depth: string,
      length: string,
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

  ngOnInit() {
  }

}
