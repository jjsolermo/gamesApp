(self["webpackChunkboardGames"] = self["webpackChunkboardGames"] || []).push([["src_app_games_space_ships_ships_module_ts"],{

/***/ 48636:
/*!***********************************************************!*\
  !*** ./src/app/games/space/ships/ships-routing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShipsPageRoutingModule": function() { return /* binding */ ShipsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ships_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships.page */ 83086);




const routes = [
    {
        path: '',
        component: _ships_page__WEBPACK_IMPORTED_MODULE_0__.ShipsPage
    }
];
let ShipsPageRoutingModule = class ShipsPageRoutingModule {
};
ShipsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ShipsPageRoutingModule);



/***/ }),

/***/ 1084:
/*!***************************************************!*\
  !*** ./src/app/games/space/ships/ships.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShipsPageModule": function() { return /* binding */ ShipsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ships_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships-routing.module */ 48636);
/* harmony import */ var _ships_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ships.page */ 83086);







let ShipsPageModule = class ShipsPageModule {
};
ShipsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ships_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShipsPageRoutingModule
        ],
        declarations: [_ships_page__WEBPACK_IMPORTED_MODULE_1__.ShipsPage]
    })
], ShipsPageModule);



/***/ }),

/***/ 83086:
/*!*************************************************!*\
  !*** ./src/app/games/space/ships/ships.page.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShipsPage": function() { return /* binding */ ShipsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_ships_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ships.page.html */ 90678);
/* harmony import */ var _ships_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ships.page.scss */ 74493);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let ShipsPage = class ShipsPage {
    constructor() { }
    ngOnInit() {
    }
};
ShipsPage.ctorParameters = () => [];
ShipsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-ships',
        template: _raw_loader_ships_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ships_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ShipsPage);



/***/ }),

/***/ 74493:
/*!***************************************************!*\
  !*** ./src/app/games/space/ships/ships.page.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGlwcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 90678:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games/space/ships/ships.page.html ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>ships</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_games_space_ships_ships_module_ts-es2015.js.map