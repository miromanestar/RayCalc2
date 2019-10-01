import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { sixMVSCP, tenMVSCP, eightMVSCP, sixMVPDD, tenMVPDD, eightMVPDD, sixMVTPR, tenMVTPR, eightMVTPR } from '../tables/legacy/legacy-tables'
import { IfStmt } from '@angular/compiler';

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
    this.setValues(state);
   }
   
   setValues(state: any) {
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

    if(this.calcSelect == "ssd") { this.calcTitle = "Source-Surface-Distance Calculation"; this.PDDTPR = "PDD: " + this.calculatePDDTPR(); this.calcFormula = "/assets/ssdFormulaCalc.svg" }
    if(this.calcSelect == "sad") { this.calcTitle = "Source-Axis-Distance Calculation"; this.PDDTPR = "TPR: " + this.calculatePDDTPR(); this.calcFormula = "/assets/sadCalcFormula.svg" }

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

    //If 'opposed field' is chosen, use script divided by half
    if(this.fieldSelect == "Opposed") { this.script = String(Number(this.script)/2)}

    this.scp = String(this.calculateSCP())
   } //setValues end of method

   calculateSCP(): number {
     let lines: any;
     if(this.energySelect == "6") { lines = sixMVSCP.split('\n') }
     if(this.energySelect == "10") { lines = tenMVSCP.split('\n') }
     if(this.energySelect == "18") { lines = eightMVSCP.split('\n') }

     for (let i = 1; i < lines.length; i++) {
      let columns = lines[i].split(',');
      let fieldSize = Number(columns[0]);
      let scp = Number(columns[1]);

      if(fieldSize == Number(this.equivalentSqr)) { return scp; break; }
     }
   }

   calculatePDDTPR(): number {
     let lines: any;
     if(this.calcSelect == "ssd") {
      if(this.energySelect == "6") { lines = sixMVPDD.split('\n') }
      if(this.energySelect == "10") { lines = tenMVPDD.split('\n') }
      if(this.energySelect == "18") { lines = eightMVPDD.split('\n') }
     }
     if(this.calcSelect == "sad") {
      if(this.energySelect == "6") { lines = sixMVTPR.split('\n') }
      if(this.energySelect == "10") { lines = tenMVTPR.split('\n') }
      if(this.energySelect == "18") { lines = eightMVTPR.split('\n') }
     }

     //Grab the x and y axis
     let tempXAxis = lines[0].split(','); tempXAxis.shift(); //Grabs the header and removes the first item which will always be "Depth"
     let tempYAxis: string[] = ["filler"]
     for(let i = 1; i < lines.length; i++) { //Grabs yAxis and appends it to to the end of the array
       let yVal = lines[i].split(',')
       tempYAxis.push(yVal[0])
     }
     tempYAxis.shift();

    //Convert x and y axis to numbers
    let xAxis = tempXAxis.map(Number);
    let yAxis = tempYAxis.map(Number);
    let sqr = Number(this.equivalentSqr)
    let depthn = Number(this.depth)
    //Determine if interpolation is needed
    let xIndex = xAxis.indexOf(sqr)
    let yIndex = yAxis.indexOf(depthn)

    if(xIndex != -1 && yIndex != -1) { //If no interpolation is needed, simply grab the value by itself
      let tempVal = lines[yIndex + 1].split(',')
      return tempVal[xIndex + 1]

    } else if(xIndex != -1 && yIndex == -1) { //Interpolate for depth, grab equivalent square
      let tempYIndex = yAxis.indexOf(this.trunc(depthn)) 
      if(tempYIndex != -1 && Number(yAxis[tempYIndex + 1]) - Number(yAxis[tempYIndex]) == 1) { //This is only to interpolate once
        let tempVal = lines[tempYIndex + 1].split(',')
        let tempVal2 = lines[tempYIndex + 2].split(',')
        return (Number(tempVal[xIndex + 1]) + Number(tempVal2[xIndex + 1]))/2

      } else { //Need to interpolate twice
        tempYIndex = yAxis.indexOf(depthn-0.5) //Interpolate for lower half; i.e. 10.5 between 10 and 12
        if(tempYIndex != -1) {
          let tempVal = lines[tempYIndex + 1].split(',')
          let tempVal2 = lines[tempYIndex +2].split(',')
          let interpolatedVal = (Number(tempVal[xIndex + 1]) + Number(tempVal2[xIndex + 1]))/2
          return (Number(tempVal[xIndex + 1]) + interpolatedVal)/2
        }

        tempYIndex = yAxis.indexOf(depthn-1) //Interpolate for middle; i.e. 11 between 10 and 12
        if(tempYIndex != -1) {
          let tempVal = lines[tempYIndex + 1].split(',')
          let tempVal2 = lines[tempYIndex + 2].split(',')
          return (Number(tempVal[xIndex + 1]) + Number(tempVal2[xIndex + 1]))/2
        }

        tempYIndex = yAxis.indexOf(depthn-1.5) //Interpolate for upper half; i.e. 11.5 between 10 and 12
        if(tempYIndex != -1) {
          let tempVal = lines[tempYIndex + 1].split(',')
          let tempVal2 = lines[tempYIndex +2].split(',')
          let interpolatedVal = (Number(tempVal[xIndex + 1]) + Number(tempVal2[xIndex + 1]))/2
          return (Number(tempVal2[xIndex + 1]) + interpolatedVal)/2
        }
      }
    } else if(xIndex == -1 && yIndex != -1) { //Interpolate for equivalent square, grab depth
      let tempXIndex = xAxis.indexOf(this.trunc(sqr))
      if(tempXIndex  != -1 && Number(xAxis[tempXIndex + 1] - Number(xAxis[tempXIndex]) == 1)) { //Interpolate once
        let tempVal = lines[yIndex + 1].split(',')
        return (Number(tempVal[tempXIndex + 1]) + Number(tempVal[tempXIndex + 2]))/2 

      } else { //Need to interpolate equivalent square twice
        tempXIndex = xAxis.indexOf(sqr-0.5) //Interpolate for lower half; i.e. 10.5 between 10 and 12
        if(tempXIndex != -1) {
          let tempVal = lines[yIndex + 1].split(',')
          let tempVal2 = tempVal[tempXIndex + 1]
          let interpolatedVal = (Number(tempVal2) + Number(tempVal[tempXIndex + 2]))/2
          return (Number(tempVal2) + interpolatedVal)/2
        }

        tempXIndex = xAxis.indexOf(sqr-1) //Interpolate for middle; i.e. 11 between 10 and 12
        if(tempXIndex != -1) {
          let tempVal = lines[yIndex + 1].split(',')
          let tempVal2 = tempVal[tempXIndex + 1]
          let tempVal3 = tempVal[tempXIndex + 2]
          return (Number(tempVal2) + Number(tempVal3))/2
        }

        tempXIndex = xAxis.indexOf(sqr-1.5) //Interpolate for upper half; i.e. 11.5 between 10 and 12
        if(tempXIndex != -1) {
          let tempVal = lines[yIndex + 1].split(',')
          let tempVal2 = tempVal[tempXIndex + 1]
          let interpolatedVal = (Number(tempVal2) + Number(tempVal[tempXIndex + 2]))/2
          return (interpolatedVal + Number(tempVal[tempXIndex + 2]))/2
        }
      }
    } else { //Interpolate for both
      
    }

    return 0
   }

   trunc(num: number): number {
     let temp = String(num)
     let index = temp.indexOf('.')
     return Number(temp.substring(0, index))
   }


  ngOnInit() {
  }

}
