(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab2Tab2PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>\r\n            Data\r\n        </ion-title>\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"presentModal()\">\r\n                <ion-icon name=\"settings\" slot=\"icon-only\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-card>\r\n        <ion-card-header class=\"card-header\">\r\n            <ion-card-title>SCP Tables\r\n                <ion-chip color=\"primary\" outline=\"true\">\r\n                    <ion-label>Legacy Northside Data</ion-label>\r\n                </ion-chip>\r\n            </ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content class=\"card-content\">\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-button expand=\"block\" (click)=\"viewData('6mvSCP')\">6MV</ion-button>\r\n                </ion-col>\r\n                <ion-col>\r\n                    <ion-button expand=\"block\" (click)=\"viewData('10mvSCP')\">10MV</ion-button>\r\n                </ion-col>\r\n                <ion-col>\r\n                    <ion-button expand=\"block\" (click)=\"viewData('18mvSCP')\">18MV</ion-button>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-card-content>\r\n    </ion-card>\r\n\r\n    <ion-card>\r\n        <ion-card-header class=\"card-header\">\r\n            <ion-card-title>PDD Tables\r\n                <ion-chip color=\"primary\" outline=\"true\">\r\n                    <ion-label>Legacy Northside Data</ion-label>\r\n                </ion-chip>\r\n            </ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content class=\"card-content\">\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-button expand=\"block\" (click)=\"viewData('6mvPDD')\">6MV</ion-button>\r\n                </ion-col>\r\n                <ion-col>\r\n                    <ion-button expand=\"block\" (click)=\"viewData('10mvPDD')\">10MV</ion-button>\r\n                </ion-col>\r\n                <ion-col>\r\n                    <ion-button expand=\"block\" (click)=\"viewData('18mvPDD')\">18MV</ion-button>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-card-content>\r\n    </ion-card>\r\n\r\n    <ion-card>\r\n        <ion-card-header class=\"card-header\">\r\n            <ion-card-title>TPR Tables\r\n                <ion-chip color=\"primary\" outline=\"true\">\r\n                    <ion-label>Legacy Northside Data</ion-label>\r\n                </ion-chip>\r\n            </ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content class=\"card-content\">\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-button expand=\"block\" (click)=\"viewData('6mvTPR')\">6MV</ion-button>\r\n                </ion-col>\r\n                <ion-col>\r\n                    <ion-button expand=\"block\" (click)=\"viewData('10mvTPR')\">10MV</ion-button>\r\n                </ion-col>\r\n                <ion-col>\r\n                    <ion-button expand=\"block\" (click)=\"viewData('18mvTPR')\">18MV</ion-button>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-card-content>\r\n    </ion-card>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/tab2/tab2.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab2/tab2.module.ts ***!
    \*************************************/

  /*! exports provided: Tab2PageModule */

  /***/
  function srcAppTab2Tab2ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function () {
      return Tab2PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab2.page */
    "./src/app/tab2/tab2.page.ts");

    let Tab2PageModule = class Tab2PageModule {};
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]
      }])],
      declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
    })], Tab2PageModule);
    /***/
  },

  /***/
  "./src/app/tab2/tab2.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab2/tab2.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab2Tab2PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-header {\n  padding-bottom: 0px;\n}\n\n.card-content {\n  padding-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9DOlxcVXNlcnNcXG1pcm9pXFxSYXlDYWxjMi9zcmNcXGFwcFxcdGFiMlxcdGFiMi5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1oZWFkZXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG5cclxuLmNhcmQtY29udGVudCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxufSIsIi5jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi5jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/tab2/tab2.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab2/tab2.page.ts ***!
    \***********************************/

  /*! exports provided: Tab2Page */

  /***/
  function srcAppTab2Tab2PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2Page", function () {
      return Tab2Page;
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


    var _settings_settings_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../settings/settings.page */
    "./src/app/settings/settings.page.ts");

    let Tab2Page = class Tab2Page {
      constructor(router, modalController) {
        this.router = router;
        this.modalController = modalController;
      }

      presentModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const modal = yield this.modalController.create({
            component: _settings_settings_page__WEBPACK_IMPORTED_MODULE_4__["SettingsPage"]
          });
          return yield modal.present();
        });
      }

      goToInputPage(calcType) {
        const navigationExtras = {
          state: {
            calcSelect: calcType
          }
        };
        this.router.navigate(['/tabs/tab1/input-page'], navigationExtras);
      }

      viewData(selection) {
        const navigationExtras = {
          state: {
            selection: selection
          }
        };
        this.router.navigate(['/tabs/tab2/dataview'], navigationExtras);
      }

    };

    Tab2Page.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
    }];

    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab2',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab2.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab2.page.scss */
      "./src/app/tab2/tab2.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])], Tab2Page);
    /***/
  }
}]);
//# sourceMappingURL=tab2-tab2-module-es5.js.map