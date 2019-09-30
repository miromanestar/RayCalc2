import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  constructor(public router: Router) {
    const navigation = this.router.getCurrentNavigation();
    //const state = navigation.extras.state as { selectCalc: string }; This will set "state" to the value of selectCalc
   }

  ngOnInit() {
  }

}
