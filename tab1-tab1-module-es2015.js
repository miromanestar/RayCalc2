(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>\r\n            RayCalc 2.0\r\n        </ion-title>\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"presentModal()\">\r\n                <ion-icon name=\"settings\" slot=\"icon-only\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-card class=\"select-ssd\">\r\n        <ion-card-header>\r\n            <ion-card-subtitle>Available in 6MV and 18MV</ion-card-subtitle>\r\n            <ion-card-title>SSD Calculation</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n            <ion-button expand=\"block\" (click)=\"goToInputPage('ssd')\">Calculate</ion-button>\r\n        </ion-card-content>\r\n    </ion-card>\r\n    <ion-card class=\"select-sad\">\r\n        <ion-card-header>\r\n            <ion-card-subtitle>Available in 6MV and 18MV</ion-card-subtitle>\r\n            <ion-card-title>SAD Calculation</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n            <ion-button expand=\"block\" (click)=\"goToInputPage('sad')\">Calculate</ion-button>\r\n        </ion-card-content>\r\n    </ion-card>\r\n    <ion-list lines=\"none\">\r\n        <ion-list-header>\r\n            <ion-label>Resources</ion-label>\r\n        </ion-list-header>\r\n        <ion-item button=\"true\" href=\"https://sites.google.com/view/raycalc/home\">\r\n            <ion-icon slot=\"start\" color=\"medium\" name=\"book\"></ion-icon>\r\n            <ion-label>RayCalc FAQ</ion-label>\r\n        </ion-item>\r\n        <ion-item button=\"true\" href=\"https://docs.google.com/forms/d/e/1FAIpQLSeDoR3JJOKJZvcsDvOYMcrn4JOfZgYgWlriobIT4yFiPmE6NQ/viewform\">\r\n            <ion-icon slot=\"start\" color=\"medium\" name=\"build\"></ion-icon>\r\n            <ion-label>Report a Bug</ion-label>\r\n        </ion-item>\r\n        <ion-item button=\"true\" href=\"https://docs.google.com/forms/d/e/1FAIpQLSc7Lt6_qq2z_7HcFqP2ayxSebBA4QWw4l8RY_iJf3HFGzcY6g/viewform\">\r\n            <ion-icon slot=\"start\" color=\"medium\" name=\"send\"></ion-icon>\r\n            <ion-label>Request a Feature</ion-label>\r\n        </ion-item>\r\n        <!-- Old settings button... I moved it to the top\r\n        <ion-item (click)=\"presentModal()\" button=\"true\">\r\n            <ion-icon slot=\"start\" color=\"medium\" name=\"settings\"></ion-icon>\r\n            <ion-label>Settings</ion-label>\r\n        </ion-item>\r\n        -->\r\n    </ion-list>\r\n    <p style=\"text-align: center; font-size: 0.8em\">Copyright &copy; {{ date| date: 'yyyy' }} Miro Manestar. All rights reserved.</p>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9DOlxcVXNlcnNcXG1pcm9pXFxSYXlDYWxjMi9zcmNcXGFwcFxcdGFiMVxcdGFiMS5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIiwiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _settings_settings_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../settings/settings.page */ "./src/app/settings/settings.page.ts");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/theme.service */ "./src/app/services/theme.service.ts");







let Tab1Page = class Tab1Page {
    constructor(router, modalController, theme, storageService) {
        this.router = router;
        this.modalController = modalController;
        this.theme = theme;
        this.storageService = storageService;
        this.date = new Date();
    }
    presentModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _settings_settings_page__WEBPACK_IMPORTED_MODULE_5__["SettingsPage"]
            });
            return yield modal.present();
        });
    }
    goToInputPage(calcType) {
        const navigationExtras = { state: { calcSelect: calcType } };
        this.router.navigate(['/tabs/tab1/input-page'], navigationExtras);
    }
};
Tab1Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _services_theme_service__WEBPACK_IMPORTED_MODULE_6__["ThemeService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }
];
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _services_theme_service__WEBPACK_IMPORTED_MODULE_6__["ThemeService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map