(self["webpackChunkboardGames"] = self["webpackChunkboardGames"] || []).push([["src_app_games_space_techs_techs_module_ts"],{

/***/ 31543:
/*!***********************************************************!*\
  !*** ./src/app/games/space/techs/techs-routing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TechsPageRoutingModule": function() { return /* binding */ TechsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _techs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./techs.page */ 10073);




const routes = [
    {
        path: '',
        component: _techs_page__WEBPACK_IMPORTED_MODULE_0__.TechsPage
    }
];
let TechsPageRoutingModule = class TechsPageRoutingModule {
};
TechsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TechsPageRoutingModule);



/***/ }),

/***/ 31970:
/*!***************************************************!*\
  !*** ./src/app/games/space/techs/techs.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TechsPageModule": function() { return /* binding */ TechsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _techs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./techs-routing.module */ 31543);
/* harmony import */ var _techs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./techs.page */ 10073);







let TechsPageModule = class TechsPageModule {
};
TechsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _techs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TechsPageRoutingModule
        ],
        declarations: [_techs_page__WEBPACK_IMPORTED_MODULE_1__.TechsPage]
    })
], TechsPageModule);



/***/ }),

/***/ 10073:
/*!*************************************************!*\
  !*** ./src/app/games/space/techs/techs.page.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TechsPage": function() { return /* binding */ TechsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_techs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./techs.page.html */ 10095);
/* harmony import */ var _techs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./techs.page.scss */ 5894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let TechsPage = class TechsPage {
    constructor() { }
    ngOnInit() {
    }
};
TechsPage.ctorParameters = () => [];
TechsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-techs',
        template: _raw_loader_techs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_techs_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TechsPage);



/***/ }),

/***/ 5894:
/*!***************************************************!*\
  !*** ./src/app/games/space/techs/techs.page.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWNocy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 10095:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games/space/techs/techs.page.html ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>techs</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_games_space_techs_techs_module_ts-es2015.js.map