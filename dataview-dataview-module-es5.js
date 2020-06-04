(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dataview-dataview-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dataview/dataview.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dataview/dataview.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDataviewDataviewPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/\"></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"presentPopover($event)\">\n                <ion-icon name=\"information-circle-outline\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>{{ title }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content scrollX=\"true\">\n    <table class=\"data-table\">\n\n        <tr>\n            <td *ngFor=\"let header of headerRow; let i = index\" id=\"header\" class=\"ion-text-center\"><b>\n              <div *ngIf=\"header == 'Field Size'\" class=\"fieldHeader\">{{ header }}</div>\n              <div *ngIf=\"i != 0\">{{ header }}</div>\n        </b></td>\n        </tr>\n\n\n        <tr *ngFor=\"let row of tableData; let i = index\">\n            <td *ngFor=\"let data of row; let j = index\" class=\"ion-text-center\">\n                <div *ngIf=\"j == 0\" class=\"div-yaxis\"><b>{{ data }}</b></div>\n                <div *ngIf=\"j != 0 && j % 2 == 1\" class=\"div-col-odd\">{{ data }}</div>\n                <div *ngIf=\"j != 0 && j % 2 == 0\" class=\"div-col-even\">{{ data }}</div>\n            </td>\n        </tr>\n    </table>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/dataview/dataview.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/dataview/dataview.module.ts ***!
    \*********************************************/

  /*! exports provided: DataviewPageModule */

  /***/
  function srcAppDataviewDataviewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataviewPageModule", function () {
      return DataviewPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _dataview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dataview.page */
    "./src/app/dataview/dataview.page.ts");

    const routes = [{
      path: '',
      component: _dataview_page__WEBPACK_IMPORTED_MODULE_6__["DataviewPage"]
    }];
    let DataviewPageModule = class DataviewPageModule {};
    DataviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_dataview_page__WEBPACK_IMPORTED_MODULE_6__["DataviewPage"]]
    })], DataviewPageModule);
    /***/
  },

  /***/
  "./src/app/dataview/dataview.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/dataview/dataview.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDataviewDataviewPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-title {\n  font-size: 100% !important;\n}\n\n.data-table {\n  width: 100%;\n  position: relative;\n}\n\n.div-col-odd {\n  background: var(--dataview-table-odd);\n  padding: 15px;\n}\n\n.div-col-even {\n  background: var(--ion-background-color);\n  padding: 15px;\n}\n\n.div-yaxis {\n  padding: 15px;\n  background: var(--ion-background-color);\n  position: -webkit-sticky;\n  position: sticky;\n  box-shadow: 1px 0 0 var(--ion-color-step-950);\n}\n\ntr td:first-child {\n  position: -webkit-sticky;\n  position: sticky;\n  left: 0;\n  top: 0;\n  width: 50%;\n}\n\n#header {\n  padding: 15px;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  left: 0;\n  background-color: var(--ion-background-color);\n  height: 100%;\n  z-index: 998;\n  box-shadow: 0 1px var(--ion-color-step-950);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YXZpZXcvQzpcXFVzZXJzXFxtaXJvaVxcUmF5Q2FsYzIvc3JjXFxhcHBcXGRhdGF2aWV3XFxkYXRhdmlldy5wYWdlLnNjc3MiLCJzcmMvYXBwL2RhdGF2aWV3L2RhdGF2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLHFDQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksdUNBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsdUNBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsNkNBQUE7QUNDSjs7QURFQTtFQUNJLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSw2Q0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBR0EsMkNBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2RhdGF2aWV3L2RhdGF2aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRhdGEtdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5kaXYtY29sLW9kZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXRhdmlldy10YWJsZS1vZGQpO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLmRpdi1jb2wtZXZlbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4uZGl2LXlheGlzIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDAgMCB2YXIoIC0taW9uLWNvbG9yLXN0ZXAtOTUwKVxyXG59XHJcblxyXG50ciB0ZDpmaXJzdC1jaGlsZCB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiA1MCVcclxufVxyXG5cclxuI2hlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiA5OTg7XHJcbiAgICAvL291dGxpbmU6IDFweCBzb2xpZCBibGFjaztcclxuICAgIC8vYm94LXNoYWRvdzogMCAxcHggIzAwMDtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IHZhciggLS1pb24tY29sb3Itc3RlcC05NTApO1xyXG59IiwiaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5kYXRhLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmRpdi1jb2wtb2RkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZGF0YXZpZXctdGFibGUtb2RkKTtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLmRpdi1jb2wtZXZlbiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLmRpdi15YXhpcyB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgYm94LXNoYWRvdzogMXB4IDAgMCB2YXIoLS1pb24tY29sb3Itc3RlcC05NTApO1xufVxuXG50ciB0ZDpmaXJzdC1jaGlsZCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuI2hlYWRlciB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDk5ODtcbiAgYm94LXNoYWRvdzogMCAxcHggdmFyKC0taW9uLWNvbG9yLXN0ZXAtOTUwKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/dataview/dataview.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/dataview/dataview.page.ts ***!
    \*******************************************/

  /*! exports provided: DataviewPage */

  /***/
  function srcAppDataviewDataviewPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataviewPage", function () {
      return DataviewPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _dataviewpopover_dataviewpopover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../dataviewpopover/dataviewpopover.component */
    "./src/app/dataviewpopover/dataviewpopover.component.ts");
    /* harmony import */


    var _tables_legacy_legacy_tables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../tables/legacy/legacy-tables */
    "./src/app/tables/legacy/legacy-tables.ts");

    let DataviewPage = class DataviewPage {
      constructor(router, popover) {
        this.router = router;
        this.popover = popover;
        this.title = "Error";
        this.selection = "Error";
        const navigation = this.router.getCurrentNavigation();
        const state = navigation.extras.state;
        this.selection = state.selection;
        this.parseTable();

        if (state.selection == "6mvSCP") {
          this.title = "6MV SCP Data (Legacy)";
        }

        if (state.selection == "10mvSCP") {
          this.title = "10MV SCP Data (Legacy)";
        }

        if (state.selection == "18mvSCP") {
          this.title = "18MV SCP Data (Legacy)";
        }

        if (state.selection == "6mvPDD") {
          this.title = "6MV PDD Data (Legacy)";
        }

        if (state.selection == "10mvPDD") {
          this.title = "10MV PDD Data (Legacy)";
        }

        if (state.selection == "18mvPDD") {
          this.title = "18MV PDD Data (Legacy)";
        }

        if (state.selection == "6mvTPR") {
          this.title = "6MV TPR Data (Legacy)";
        }

        if (state.selection == "10mvTPR") {
          this.title = "10MV TPR Data (Legacy)";
        }

        if (state.selection == "18mvTPR") {
          this.title = "18MV TPR Data (Legacy)";
        }
      }

      presentPopover(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const popover = yield this.popover.create({
            component: _dataviewpopover_dataviewpopover_component__WEBPACK_IMPORTED_MODULE_4__["DataviewpopoverComponent"],
            componentProps: {
              selection: this.selection,
              source: "Legacy"
            },
            event: ev,
            translucent: true
          });
          return yield popover.present();
        });
      }

      parseTable() {
        let lines;

        if (this.selection == "6mvSCP") {
          lines = _tables_legacy_legacy_tables__WEBPACK_IMPORTED_MODULE_5__["sixMVSCP"].split('\n');
        }

        if (this.selection == "10mvSCP") {
          lines = _tables_legacy_legacy_tables__WEBPACK_IMPORTED_MODULE_5__["tenMVSCP"].split('\n');
        }

        if (this.selection == "18mvSCP") {
          lines = _tables_legacy_legacy_tables__WEBPACK_IMPORTED_MODULE_5__["eightMVSCP"].split('\n');
        }

        if (this.selection == "6mvPDD") {
          lines = _tables_legacy_legacy_tables__WEBPACK_IMPORTED_MODULE_5__["sixMVPDD"].split('\n');
        }

        if (this.selection == "10mvPDD") {
          lines = _tables_legacy_legacy_tables__WEBPACK_IMPORTED_MODULE_5__["tenMVPDD"].split('\n');
        }

        if (this.selection == "18mvPDD") {
          lines = _tables_legacy_legacy_tables__WEBPACK_IMPORTED_MODULE_5__["eightMVPDD"].split('\n');
        }

        if (this.selection == "6mvTPR") {
          lines = _tables_legacy_legacy_tables__WEBPACK_IMPORTED_MODULE_5__["sixMVTPR"].split('\n');
        }

        if (this.selection == "10mvTPR") {
          lines = _tables_legacy_legacy_tables__WEBPACK_IMPORTED_MODULE_5__["tenMVTPR"].split('\n');
        }

        if (this.selection == "18mvTPR") {
          lines = _tables_legacy_legacy_tables__WEBPACK_IMPORTED_MODULE_5__["eightMVTPR"].split('\n');
        } //Grab the x and y axis


        let tempXAxis = lines[0].split(','); //tempXAxis.shift(); //Grabs the header and removes the first item which will always be "Depth"

        let tempYAxis = ["filler"];

        for (let i = 1; i < lines.length; i++) {
          //Grabs yAxis and appends it to to the end of the array
          let yVal = lines[i].split(',');
          tempYAxis.push(yVal[0]);
        }

        tempYAxis.shift();
        this.headerRow = tempXAxis;
        this.yAxis = tempYAxis;
        let fullArr = [];

        for (let i = 1; i < lines.length; i++) {
          let line = lines[i];
          let columns = line.split(',');
          fullArr.push(columns);
        }

        console.log(fullArr);
        console.log(this.headerRow);
        this.tableData = fullArr;
      }

      ngOnInit() {}

    };

    DataviewPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
    }];

    DataviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dataview',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dataview.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dataview/dataview.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dataview.page.scss */
      "./src/app/dataview/dataview.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]])], DataviewPage);
    /***/
  }
}]);
//# sourceMappingURL=dataview-dataview-module-es5.js.map