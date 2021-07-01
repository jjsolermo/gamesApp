(self["webpackChunkboardGames"] = self["webpackChunkboardGames"] || []).push([["src_app_games_space_buy-tech_buy-tech_module_ts"],{

/***/ 5315:
/*!*****************************************************************!*\
  !*** ./src/app/games/space/buy-tech/buy-tech-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuyTechPageRoutingModule": function() { return /* binding */ BuyTechPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _buy_tech_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buy-tech.page */ 31579);




const routes = [
    {
        path: '',
        component: _buy_tech_page__WEBPACK_IMPORTED_MODULE_0__.BuyTechPage
    }
];
let BuyTechPageRoutingModule = class BuyTechPageRoutingModule {
};
BuyTechPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BuyTechPageRoutingModule);



/***/ }),

/***/ 89471:
/*!*********************************************************!*\
  !*** ./src/app/games/space/buy-tech/buy-tech.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuyTechPageModule": function() { return /* binding */ BuyTechPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _buy_tech_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buy-tech-routing.module */ 5315);
/* harmony import */ var _buy_tech_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buy-tech.page */ 31579);







let BuyTechPageModule = class BuyTechPageModule {
};
BuyTechPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _buy_tech_routing_module__WEBPACK_IMPORTED_MODULE_0__.BuyTechPageRoutingModule
        ],
        declarations: [_buy_tech_page__WEBPACK_IMPORTED_MODULE_1__.BuyTechPage]
    })
], BuyTechPageModule);



/***/ }),

/***/ 31579:
/*!*******************************************************!*\
  !*** ./src/app/games/space/buy-tech/buy-tech.page.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuyTechPage": function() { return /* binding */ BuyTechPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_buy_tech_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./buy-tech.page.html */ 55083);
/* harmony import */ var _buy_tech_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buy-tech.page.scss */ 5602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let BuyTechPage = class BuyTechPage {
    constructor() { }
    ngOnInit() {
    }
};
BuyTechPage.ctorParameters = () => [];
BuyTechPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-buy-tech',
        template: _raw_loader_buy_tech_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_buy_tech_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BuyTechPage);



/***/ }),

/***/ 5602:
/*!*********************************************************!*\
  !*** ./src/app/games/space/buy-tech/buy-tech.page.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXktdGVjaC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 55083:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games/space/buy-tech/buy-tech.page.html ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>buyTech</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_games_space_buy-tech_buy-tech_module_ts-es2015.js.map