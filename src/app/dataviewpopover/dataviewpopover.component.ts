import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular'
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-dataviewpopover',
  templateUrl: './dataviewpopover.component.html',
  styleUrls: ['./dataviewpopover.component.scss'],
})
export class DataviewpopoverComponent implements OnInit {

  selection = "";
  source = "";
  xaxis = "";
  yaxis = "";

  constructor(private popover: PopoverController, private navParams: NavParams) { }

  ngOnInit() {
    this.selection = this.navParams.data.selection
    this.source = this.navParams.data.source
    if(this.selection == "6mvSCP") { this.yaxis = "N/A"; this.xaxis = "Headers" }
    if(this.selection == "10mvSCP") { this.yaxis = "N/A"; this.xaxis = "Headers" }
    if(this.selection == "18mvSCP") { this.yaxis = "N/A"; this.xaxis = "Headers" }

    if(this.selection == "6mvPDD") { this.yaxis = "Depth"; this.xaxis = "Equivalent Sqr" }
    if(this.selection == "10mvPDD") { this.yaxis = "Depth"; this.xaxis = "Equivalent Sqr" }
    if(this.selection == "18mvPDD") { this.yaxis = "Depth"; this.xaxis = "Equivalent Sqr" }

    if(this.selection == "6mvTPR") { this.yaxis = "Depth"; this.xaxis = "Equivalent Sqr" }
    if(this.selection == "10mvTPR") { this.yaxis = "Depth"; this.xaxis = "Equivalent Sqr" }
    if(this.selection == "18mvTPR") { this.yaxis = "Depth"; this.xaxis = "Equivalent Sqr" }
  }

}
