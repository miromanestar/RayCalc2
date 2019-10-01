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

    if(this.identifier == "") { this.identifier = "None" }
    //If 'opposed field' is chosen, use script divided by half
    if(this.fieldSelect == "Opposed") { this.script = String(Number(this.script)/2)}

    this.scp = String(this.calculateSCP())

    if(this.calcSelect == "sad") {
      switch (this.energySelect) {
        case ("6"): this.inverseSqr = "1.0323"; break;
        case ("10"): this.inverseSqr = "1.0445"; break;
        //case ("15"): this.inverseSqr = String(0.0); break; To be implemented
        case ("18"): this.inverseSqr = "1.0671"; break;
        default: "ERROR";
      }
    } else if(this.calcSelect == "ssd") {
      this.inverseSqr = "Not Applicable"
    }

    //Convert to numbers because I'm dyslexic
    let scriptn = Number(this.script)
    let scpn = Number(this.scp)
    let pddtpr = Number(this.calculatePDDTPR());
    let inverseSqrn = Number(this.inverseSqr)
 
    if(this.calcSelect == "ssd") { 
      this.calcTitle = "Source-Surface-Distance Calculation"; 
      this.PDDTPR = "PDD: " +  pddtpr.toFixed(3)
      this.calcFormula = "/assets/ssdFormulaCalc.svg"
      this.mus =(scriptn/(scpn * pddtpr)).toFixed()
    }

    if(this.calcSelect == "sad") { 
      this.calcTitle = "Source-Axis-Distance Calculation"; 
      this.PDDTPR = "TPR: " + pddtpr.toFixed(3)
      this.calcFormula = "/assets/sadCalcFormula.svg" 
      this.mus = (scriptn/(scpn * pddtpr * inverseSqrn)).toFixed()
    }

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

      //Interpolate if both values only have to interpolate once
      let tempYIndex = yAxis.indexOf(this.trunc(depthn))
      let tempXIndex = xAxis.indexOf(this.trunc(sqr))
      if(tempYIndex != -1 && tempXIndex != -1 && Number(xAxis[tempXIndex + 1]) - Number(xAxis[tempXIndex]) == 1 && Number(yAxis[tempYIndex + 1]) - Number(yAxis[tempYIndex]) == 1) {
        let tempVal = lines[tempYIndex + 1].split(',');
        let tempVal2 = lines[tempYIndex + 2].split(',');
        let tempVal3 = Number(tempVal[tempXIndex + 1]) //Grab equivalent sqr
        let tempVal4 = Number(tempVal2[tempXIndex + 1]) //
        let tempVal5 = Number(tempVal[tempXIndex + 2]) //
        let tempVal6 = Number(tempVal2[tempXIndex + 2]) //
        return (tempVal3 + tempVal4 + tempVal5 + tempVal6)/4
      } else { //One or both values must interpolate twice... this is going to be really annoying to code

        //Determine index of needed yAxis data
        let tempYIndex = yAxis.indexOf(depthn)
        let yPos = 0
        if(tempYIndex == -1) { tempYIndex = yAxis.indexOf(depthn-0.5); yPos = 0.5 }
        if(tempYIndex == -1) { tempYIndex = yAxis.indexOf(depthn-1); yPos = 1 }
        if(tempYIndex == -1) { tempYIndex = yAxis.indexOf(depthn-1.5); yPos = 1.5 }

        //Determine index of needed xAxis data
        let tempXIndex = xAxis.indexOf(sqr)
        let xPos = 0
        if(tempXIndex == -1) { tempXIndex = xAxis.indexOf(sqr-0.5); xPos = 0.5 }
        if(tempXIndex == -1) { tempXIndex = xAxis.indexOf(sqr-1); xPos = 1 }
        if(tempXIndex == -1) { tempXIndex = xAxis.indexOf(sqr-1.5); xPos = 1.5 }

        //Now grab the data
        let tempArr1 = lines[tempYIndex + 1].split(',')
        let tempArr2 = lines[tempYIndex + 2].split(',')

        /*Layout of data:
            
            tempVal   tempVal2
            tempVal3  tempVal4
        */
        let tempVal = Number(tempArr1[tempXIndex + 1])
        let tempVal2 = Number(tempArr1[tempXIndex + 2])
        let tempVal3 = Number(tempArr2[tempXIndex + 1])
        let tempVal4 = Number(tempArr2[tempXIndex + 2])

        /* Interpolation layout:
            10    10.5    11    11.5    12
        10  tempVal       top           tempVal2
        10.5
        11  left          center        right
        11.5
        12  tempVal3      bottom        tempVal4
        */
        let center = (tempVal + tempVal2 + tempVal3 + tempVal4)/4
        let left = (tempVal + tempVal3)/2
        let right = (tempVal2 + tempVal4)/2
        let top = (tempVal + tempVal2)/2
        let bottom = (tempVal3 + tempVal4)/2

        //Now interpolate given certain conditions
        if(xPos == 0) {
          if(yPos == 0.5) {
            return (tempVal + left)/2
          }
          if(yPos == 1) {
            return left
          }
          if(yPos == 1.5) {
            return (left + tempVal3)/2
          }
        }
        if(xPos == 0.5) {
          if(yPos == 0) {
            return (tempVal + top)/2
          }
          if(yPos == 0.5) {
            return (tempVal + top + center+ left)/4
          }
          if(yPos == 1) {
            return (left + center)/2
          }
          if(yPos == 1.5) {
            return (tempVal3 + left + center + bottom)/4
          }
        }

        if(xPos == 1) {
          if(yPos == 0) {
            return top
          }
          if(yPos == 0.5) {
            return (top + center)/2
          }
          if(yPos == 1) {
            return center
          }
          if(yPos == 1.5) {
            return (center + bottom)/2
          }
        }

        if(xPos == 1.5) {
          if(yPos == 0) {
            return (top + tempVal2)/2
          }
          if(yPos == 0.5) {
            return (top + center + tempVal2 + right)/4
          }
          if(yPos == 1) {
            return (center + right)/2
          }
          if(yPos == 1.5) {
            return (center + right + bottom + tempVal4)/4
          }
        }

        //Phew... there's probably a much better way to do this...
      }
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
