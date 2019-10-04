import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { DataviewpopoverComponent } from '../dataviewpopover/dataviewpopover.component'
import { sixMVSCP, tenMVSCP, eightMVSCP, sixMVPDD, tenMVPDD, eightMVPDD, sixMVTPR, tenMVTPR, eightMVTPR } from '../tables/legacy/legacy-tables'

@Component({
  selector: 'app-dataview',
  templateUrl: './dataview.page.html',
  styleUrls: ['./dataview.page.scss'],
})
export class DataviewPage implements OnInit {

  title = "Error"
  selection = "Error"
  headerRow: string[]
  yAxis: string[]
  tableData: any

  constructor(public router: Router, public popover: PopoverController) { 
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as { selection: string };

    this.selection = state.selection
    this.parseTable();

    if(state.selection == "6mvSCP") { this.title = "6MV SCP Data (Legacy)" }
    if(state.selection == "10mvSCP") { this.title = "10MV SCP Data (Legacy)" }
    if(state.selection == "18mvSCP") { this.title = "18MV SCP Data (Legacy)" }

    if(state.selection == "6mvPDD") { this.title = "6MV PDD Data (Legacy)" }
    if(state.selection == "10mvPDD") { this.title = "10MV PDD Data (Legacy)" }
    if(state.selection == "18mvPDD") { this.title = "18MV PDD Data (Legacy)" }

    if(state.selection == "6mvTPR") { this.title = "6MV TPR Data (Legacy)" }
    if(state.selection == "10mvTPR") { this.title = "10MV TPR Data (Legacy)" }
    if(state.selection == "18mvTPR") { this.title = "18MV TPR Data (Legacy)" }
  }

  async presentPopover(ev: Event) {
    const popover = await this.popover.create({
      component: DataviewpopoverComponent,
      componentProps: {
        selection: this.selection,
        source: "Legacy"
      },
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  parseTable() {
    let lines: any;
    if(this.selection == "6mvSCP") { lines = sixMVSCP.split('\n') }
    if(this.selection == "10mvSCP") { lines = tenMVSCP.split('\n') }
    if(this.selection == "18mvSCP") { lines = eightMVSCP.split('\n') }

    if(this.selection == "6mvPDD") { lines = sixMVPDD.split('\n') }
    if(this.selection == "10mvPDD") { lines = tenMVPDD.split('\n') }
    if(this.selection == "18mvPDD") { lines = eightMVPDD.split('\n') }
    
    if(this.selection == "6mvTPR") { lines = sixMVTPR.split('\n') }
    if(this.selection == "10mvTPR") { lines = tenMVTPR.split('\n') }
    if(this.selection == "18mvTPR") { lines = eightMVTPR.split('\n') }

     //Grab the x and y axis
     let tempXAxis = lines[0].split(','); //tempXAxis.shift(); //Grabs the header and removes the first item which will always be "Depth"
     let tempYAxis: string[] = ["filler"]
     for(let i = 1; i < lines.length; i++) { //Grabs yAxis and appends it to to the end of the array
       let yVal = lines[i].split(',')
       tempYAxis.push(yVal[0])
     }
     tempYAxis.shift();

    this.headerRow = tempXAxis
    this.yAxis = tempYAxis
    
    let fullArr: String[][] = []
    for(let i = 1; i < lines.length; i++) {
      let line = lines[i]
      let columns = line.split(',')
      fullArr.push(columns)
    }

    console.log(fullArr)
    console.log(this.headerRow)
    this.tableData = fullArr
  }

  ngOnInit() {
  }

}
