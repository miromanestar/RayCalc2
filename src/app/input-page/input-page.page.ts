import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.page.html',
  styleUrls: ['./input-page.page.scss'],
})
export class InputPagePage implements OnInit {

  WhichSelected = "ERROR";
  public calcSelect = "";
  constructor(private router : Router) { 
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as { selectCalc: string };
    this.setTitle(state);
  }

  private setTitle(state: { selectCalc: string; }) {
    if(state.selectCalc == 'ssd') { this.WhichSelected = 'SSD Calculation'}
    if(state.selectCalc =='sad') { this.WhichSelected = "SAD Calculation"}
    this.calcSelect = state.selectCalc;
  }

  ngOnInit() {
  }
}
