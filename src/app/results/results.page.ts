import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { sixMVSCP, tenMVSCP, eightMVSCP, sixMVPDD, tenMVPDD, eightMVPDD, sixMVTPR, tenMVTPR, eightMVTPR } from '../tables/legacy/legacy-tables'
import { StorageService, History } from '../services/storage.service';

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
  name = "Error: Cannot grab name";

  constructor(public router: Router, private storageService: StorageService ) {
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

  //Run the history method only AFTER everything is done because for SOME REASON retrieving from a key only happens after everything else...
  ionViewDidEnter() {
    this.history();
  }

   history() {
    const historyCont: History = {
      id: new Date(),
      identifier: this.identifier,
      calcTitle: this.calcTitle,
      treatSite: this.treatSite,
      energySelect: this.energySelect,
      fieldSelect: this.fieldSelect,
      script: this.script,
      inverseSqr: this.inverseSqr,
      ssd: this.ssd,
      depth: this.depth,
      length: this.length,
      x1: this.x1,
      x2: this.x2,
      width: this.width,
      y1: this.y1,
      y2: this.y2,
      equivalentSqr: this.equivalentSqr,
      dpf: this.dpf,
      scp: this.scp,
      PDDTPR: this.PDDTPR,
      mus: this.mus,
      calcFormula: this.calcFormula,
      date: this.date,
      name: this.name,
    } 
    
    this.storageService.addHistory(historyCont).then(history => {
     console.log(historyCont)
    });

  }
   
  setValues(state: any) {
    
    //Date
    let today = new Date();
    let hour: any;
    let ampm: string;
    if(today.getHours() > 12) {
      hour = today.getHours() - 12;
      ampm = "PM";
    } else { if(today.getHours() == 0) { hour = 12 } else { hour = today.getHours(); } ampm = "AM"}
    this.date = (today.getMonth()+1) + "/" + today.getDate() + "/" + today.getFullYear() + " at " + hour + ":" + today.getMinutes() + " " + ampm;
    
     //Set name
     this.storageService.getName().then(name => {
      if(name) { this.name = name; } else { this.name = "Unknown" }
    });

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

    if(this.treatSite == "") { this.treatSite = "None" }

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

    if(this.mus == "NaN") { this.mus = "Error" }
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

      /* Interpolation layout for 2 gaps:        |  Interpolation layout for 1 gap:
          10    10.5    11    11.5    12         |         5         5.5       6
      10  tempVal       top           tempVal2   |   5   tempVal     top     tempVal2
      10.5                                       |
      11  left          center        right      |  5.5  left       center   right
      11.5                                       |
      12  tempVal3      bottom        tempVal4   |   6   tempVal3   bottom   tempVal4
      */
      let center = (tempVal + tempVal2 + tempVal3 + tempVal4)/4
      let left = (tempVal + tempVal3)/2
      let right = (tempVal2 + tempVal4)/2
      let top = (tempVal + tempVal2)/2
      let bottom = (tempVal3 + tempVal4)/2

      //Interpolate for one gap in both; i.e. 5,6
      if(xAxis[tempXIndex + 1] - xAxis[tempXIndex] == 1 && yAxis[tempYIndex + 1] - yAxis[tempYIndex] == 1) {
        if(xPos == 0) {
          if(yPos == 0.5) {
            return left
          }
        }
        if(xPos == 0.5) {
          if(yPos == 0) {
            return top
          }
          if(yPos == 0.5) {
            return center
          }
        }
      }

      /*Interpolate for two gap in x axis, 1 gap in y axis
            10      10.5      11      11.5     12
      5   tempVal            top              tempVal2
      5.5 left              center            right
      6   tempVal3          bottom            tempVal4
      */
      if(xAxis[tempXIndex + 1] - xAxis[tempXIndex] == 2 && yAxis[tempYIndex + 1] - yAxis[tempYIndex] == 1) {
        if(xPos == 0) {
          if(yPos == 0.5) {
            return left
          }
        }
        if(xPos == 0.5) {
          if(yPos == 0) {
            return (tempVal + top)/2
          }
          if(yPos == 0.5) {
            return (left + center)/2
          }
        }
        if(xPos == 1) {
          if(yPos == 0) {
            return top
          }
          if(yPos == 0.5) {
            return center
          }
        }
        if(xPos == 1.5) {
          if(yPos == 0) {
            return (top + tempVal2)/2
          }
          if(yPos == 0.5) {
            return (center + right)/2
          }
        }
      }

      /* Interpolate if x axis has one gap and y axis has two
                5         5.5         6
        10    tempVal     top        tempVal2
        10.5
        11    left        center      right
        11.5
        12    tempVal3    bottom      tempVal4
      */
      if(xAxis[tempXIndex + 1] - xAxis[tempXIndex] == 1 && yAxis[tempYIndex + 1] - yAxis[tempYIndex] == 2) {
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
      }

      //Interpolate for two gaps in both; i.e. 10, 12
      if(xAxis[tempXIndex + 1] - xAxis[tempXIndex] == 2 && yAxis[tempYIndex + 1] - yAxis[tempYIndex] == 2) {
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
       }
      }
    }

  ngOnInit() {
  }

}
