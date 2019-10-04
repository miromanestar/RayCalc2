import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Papa } from 'ngx-papaparse';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public router: Router) {

  }

  viewData(selection: string) {
    const navigationExtras : NavigationExtras = { state: { selection: selection }};
    this.router.navigate(['/tabs/tab2/dataview'], navigationExtras);
  }
}
