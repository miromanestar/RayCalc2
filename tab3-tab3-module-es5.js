(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab3Tab3PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button slot=\"secondary\" fill=\"clear\" (click)=\"clearHistory()\">Clear</ion-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            History\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <p style=\"text-align: center\" [ngStyle]=\"historyMsgStyle\">There is no history to display.</p>\r\n    <ion-list #myHistoryList>\r\n\r\n        <ion-item-sliding *ngFor=\"let history of historys\">\r\n\r\n            <ion-item lines=\"none\">\r\n                <ion-card style=\"width: 100%; margin-left: 8px;\" (click)=\"goToHistoryView(history)\">\r\n                    <ion-card-header class=\"card-header\">\r\n                        <ion-card-title class=\"entry-title\">Result: {{ history.mus }} mu's @ {{ history.energySelect }}MV</ion-card-title>\r\n                        <ion-card-subtitle>{{ history.calcTitle }}</ion-card-subtitle>\r\n                    </ion-card-header>\r\n                    <ion-card-content class=\"card-content\">\r\n                        <p>Identifier: {{ history.identifier }}</p>\r\n                        <p>Treatment Site: {{ history.treatSite }}</p>\r\n                        <p>{{ history.date }}</p>\r\n                    </ion-card-content>\r\n                </ion-card>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\" lines=\"none\">\r\n                <ion-item-option color=\"danger\" (click)=\"deleteSingleHistory(history)\">Delete</ion-item-option>\r\n            </ion-item-options>\r\n        </ion-item-sliding>\r\n\r\n    </ion-list>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/tab3/tab3.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab3/tab3.module.ts ***!
    \*************************************/

  /*! exports provided: Tab3PageModule */

  /***/
  function srcAppTab3Tab3ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function () {
      return Tab3PageModule;
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


    var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab3.page */
    "./src/app/tab3/tab3.page.ts");

    let Tab3PageModule = class Tab3PageModule {};
    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]
      }])],
      declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })], Tab3PageModule);
    /***/
  },

  /***/
  "./src/app/tab3/tab3.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab3/tab3.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3Tab3PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".item-options-ios {\n  border-bottom-style: none;\n}\n\n.entry-title {\n  font-size: 1.3em;\n}\n\n.card-header {\n  padding-bottom: 0px;\n}\n\n.card-content {\n  padding-top: 15px;\n}\n\n/*\n@media (prefers-color-scheme: dark) {\n    ion-card {\n        background: var(--ion-card-background) !important;\n    }\n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy9DOlxcVXNlcnNcXG1pcm9pXFxSYXlDYWxjMi9zcmNcXGFwcFxcdGFiM1xcdGFiMy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBRENBOzs7OztFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtLW9wdGlvbnMtaW9zIHtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5lbnRyeS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG5cclxuLmNhcmQtY29udGVudCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxufVxyXG4vKlxyXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNhcmQtYmFja2dyb3VuZCkgIWltcG9ydGFudDtcclxuICAgIH1cclxufSovIiwiLml0ZW0tb3B0aW9ucy1pb3Mge1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBub25lO1xufVxuXG4uZW50cnktdGl0bGUge1xuICBmb250LXNpemU6IDEuM2VtO1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG4uY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG5cbi8qXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gICAgaW9uLWNhcmQge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY2FyZC1iYWNrZ3JvdW5kKSAhaW1wb3J0YW50O1xuICAgIH1cbn0qLyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/tab3/tab3.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab3/tab3.page.ts ***!
    \***********************************/

  /*! exports provided: Tab3Page */

  /***/
  function srcAppTab3Tab3PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3Page", function () {
      return Tab3Page;
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


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let Tab3Page = class Tab3Page {
      constructor(storageService, plt, router, modalController) {
        this.storageService = storageService;
        this.plt = plt;
        this.router = router;
        this.modalController = modalController;
        this.historys = [];
        this.plt.ready().then(() => {
          this.loadHistory();
        });
      }

      goToHistoryView(history) {
        const navigationExtras = {
          state: {
            history: history
          }
        };
        this.router.navigate(['/tabs/tab3/historyview'], navigationExtras);
      }

      loadHistory() {
        this.storageService.getHistory().then(historys => {
          if (historys.length !== 0) {
            this.historys = historys;
            this.historyMsgStyle = {
              'display': 'none'
            };
          } else {
            this.historys = historys;
            this.historyMsgStyle = {
              'display': 'block'
            };
          }
        });
      }

      loadHistoryClear() {
        this.storageService.getHistory().then(historys => {
          if (historys) {
            this.historys = historys;
            this.historyMsgStyle = {
              'display': 'none'
            };
          } else {
            this.historys = historys;
            this.historyMsgStyle = {
              'display': 'block'
            };
          }
        });
      }

      deleteSingleHistory(history) {
        this.storageService.deleteHistoryItem(history.id).then(history => {
          this.loadHistory();
        });
      }

      clearHistory() {
        this.storageService.clearHistory();
        this.loadHistoryClear();
      }

      ionViewWillEnter() {
        this.loadHistory();
      }

      ngOnInit() {}

    };

    Tab3Page.ctorParameters = () => [{
      type: _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myHistoryList', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], Tab3Page.prototype, "myHistoryList", void 0);
    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab3',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab3.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab3.page.scss */
      "./src/app/tab3/tab3.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])], Tab3Page);
    /***/
  }
}]);
//# sourceMappingURL=tab3-tab3-module-es5.js.map