(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["historyview-historyview-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/historyview/historyview.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/historyview/historyview.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/\"></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"goToInputPage()\" fill=\"clear\">Import</ion-button>\n        </ion-buttons>\n        <ion-title>History</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n    <ion-card>\n        <ion-card-header>\n            <ion-card-title>Identifier: {{ identifier }}</ion-card-title>\n            <ion-card-subtitle>{{ calcTitle }}</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n            <p>Treatment Site: {{ treatSite }}</p>\n            <p>Energy Level: {{ energySelect + \"MV \" }}</p>\n            <p>Script: {{ script + \"cGy \" + fieldSelect + \" Field\"}}</p>\n            <p>Inverse Square Factor: {{ inverseSqr }}</p>\n            <p>SSD: {{ ssd }}</p>\n            <p>Depth: {{ depth }}</p>\n            <p>Length: {{ length }}</p>\n            <p>Width: {{ width }}</p>\n            <p>Equivalent Square: {{ equivalentSqr }}</p>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            <ion-card-title>Result: {{ mus + \" mu's\" }}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            <p>Dose Per Field: {{ script }}</p>\n            <p>SCP: {{ scp }}</p>\n            <p>{{ PDDTPR }}</p>\n        </ion-card-content>\n        <img class=\"formula-img\" src=\"{{ calcFormula }}\" alt=\"\" />\n    </ion-card>\n    <p style=\"text-align: center;\">Calculated by: {{ name }}</p>\n    <p style=\"text-align:center;\">{{ date }}</p>\n</ion-content>");

/***/ }),

/***/ "./src/app/historyview/historyview.module.ts":
/*!***************************************************!*\
  !*** ./src/app/historyview/historyview.module.ts ***!
  \***************************************************/
/*! exports provided: HistoryviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryviewPageModule", function() { return HistoryviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _historyview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./historyview.page */ "./src/app/historyview/historyview.page.ts");







const routes = [
    {
        path: '',
        component: _historyview_page__WEBPACK_IMPORTED_MODULE_6__["HistoryviewPage"]
    }
];
let HistoryviewPageModule = class HistoryviewPageModule {
};
HistoryviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_historyview_page__WEBPACK_IMPORTED_MODULE_6__["HistoryviewPage"]]
    })
], HistoryviewPageModule);



/***/ }),

/***/ "./src/app/historyview/historyview.page.scss":
/*!***************************************************!*\
  !*** ./src/app/historyview/historyview.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".formula-img {\n  width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGlzdG9yeXZpZXcvQzpcXFVzZXJzXFxtaXJvaVxcUmF5Q2FsYzIvc3JjXFxhcHBcXGhpc3Rvcnl2aWV3XFxoaXN0b3J5dmlldy5wYWdlLnNjc3MiLCJzcmMvYXBwL2hpc3Rvcnl2aWV3L2hpc3Rvcnl2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2hpc3Rvcnl2aWV3L2hpc3Rvcnl2aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtdWxhLWltZyB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufSIsIi5mb3JtdWxhLWltZyB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/historyview/historyview.page.ts":
/*!*************************************************!*\
  !*** ./src/app/historyview/historyview.page.ts ***!
  \*************************************************/
/*! exports provided: HistoryviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryviewPage", function() { return HistoryviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HistoryviewPage = class HistoryviewPage {
    constructor(router) {
        this.router = router;
        this.id = new Date();
        this.identifier = "";
        this.calcTitle = "";
        this.treatSite = "";
        this.energySelect = "";
        this.fieldSelect = "";
        this.script = "";
        this.inverseSqr = "";
        this.ssd = "";
        this.depth = "";
        this.x1 = "";
        this.x2 = "";
        this.length = "";
        this.y1 = "";
        this.y2 = "";
        this.width = "";
        this.equivalentSqr = "";
        this.dpf = "";
        this.scp = "";
        this.PDDTPR = "";
        this.mus = "";
        this.calcFormula = "";
        this.date = "";
        this.name = "";
        const navigation = this.router.getCurrentNavigation();
        const state = navigation.extras.state.history;
        this.id = state.id;
        this.identifier = state.identifier;
        this.calcTitle = state.calcTitle;
        this.treatSite = state.treatSite;
        this.energySelect = state.energySelect;
        this.fieldSelect = state.fieldSelect;
        this.script = state.script;
        this.inverseSqr = state.inverseSqr;
        this.ssd = state.ssd;
        this.depth = state.depth;
        this.length = state.length;
        this.width = state.width;
        this.equivalentSqr = state.equivalentSqr;
        this.dpf = state.dpf;
        this.scp = state.scp;
        this.PDDTPR = state.PDDTPR;
        this.mus = state.mus;
        this.calcFormula = state.calcFormula;
        this.date = state.date;
        this.name = state.name;
    }
    goToInputPage() {
        const navigationExtras = { state: { importData: {
                    calcSelect: this.calcTitle,
                    identifier: this.identifier,
                    treatSite: this.treatSite,
                    fieldSelect: this.fieldSelect,
                    energySelect: this.energySelect,
                    script: this.script,
                    ssd: this.ssd,
                    depth: this.depth,
                    x1: this.x1,
                    x2: this.x2,
                    length: this.length,
                    y1: this.y1,
                    y2: this.y2,
                    width: this.width,
                    equivalentSqr: this.equivalentSqr
                } } };
        this.router.navigate(['/tabs/tab1/input-page'], navigationExtras);
    }
    ngOnInit() {
    }
};
HistoryviewPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HistoryviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-historyview',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./historyview.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/historyview/historyview.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./historyview.page.scss */ "./src/app/historyview/historyview.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], HistoryviewPage);



/***/ })

}]);
//# sourceMappingURL=historyview-historyview-module-es2015.js.map