(self["webpackChunkboardGames"] = self["webpackChunkboardGames"] || []).push([["src_app_games_ddice_ddice_module_ts"],{

/***/ 84222:
/*!*****************************************************!*\
  !*** ./src/app/games/ddice/ddice-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DdicePageRoutingModule": function() { return /* binding */ DdicePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ddice_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ddice.page */ 83892);




const routes = [
    {
        path: '',
        component: _ddice_page__WEBPACK_IMPORTED_MODULE_0__.DdicePage
    }
];
let DdicePageRoutingModule = class DdicePageRoutingModule {
};
DdicePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DdicePageRoutingModule);



/***/ }),

/***/ 83476:
/*!*********************************************!*\
  !*** ./src/app/games/ddice/ddice.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DdicePageModule": function() { return /* binding */ DdicePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ddice_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ddice-routing.module */ 84222);
/* harmony import */ var _ddice_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ddice.page */ 83892);







let DdicePageModule = class DdicePageModule {
};
DdicePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ddice_routing_module__WEBPACK_IMPORTED_MODULE_0__.DdicePageRoutingModule
        ],
        declarations: [_ddice_page__WEBPACK_IMPORTED_MODULE_1__.DdicePage]
    })
], DdicePageModule);



/***/ }),

/***/ 83892:
/*!*******************************************!*\
  !*** ./src/app/games/ddice/ddice.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DdicePage": function() { return /* binding */ DdicePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_ddice_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ddice.page.html */ 59510);
/* harmony import */ var _ddice_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ddice.page.scss */ 5419);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let DdicePage = class DdicePage {
    constructor(router) {
        this.router = router;
        this.soldierValue = 0;
        this.medalValue = 0;
        this.workValue = 0;
        this.starValue = 0;
    }
    ngOnInit() {
    }
    sumSoldier(e) {
        this.soldierValue = e + 1;
    }
    resSoldier(e) {
        this.soldierValue = e - 1;
    }
    sumMedal(e) {
        this.medalValue = e + 1;
    }
    resMedal(e) {
        this.medalValue = e - 1;
    }
    sumWork(e) {
        this.workValue = e + 1;
    }
    resWork(e) {
        this.workValue = e - 1;
    }
    sumStar(e) {
        this.starValue = e + 1;
    }
    resStar(e) {
        this.starValue = e - 1;
    }
    reset() {
        this.starValue = 0;
        this.workValue = 0;
        this.medalValue = 0;
        this.soldierValue = 0;
    }
    navigateToGames() {
        this.router.navigateByUrl('/games');
    }
};
DdicePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
DdicePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-ddice',
        template: _raw_loader_ddice_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ddice_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DdicePage);



/***/ }),

/***/ 5419:
/*!*********************************************!*\
  !*** ./src/app/games/ddice/ddice.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headerSpace {\n  display: contents;\n}\n\n.soldiers {\n  display: flex;\n  justify-content: center;\n  margin-left: 30%;\n  width: 10rem;\n  text-align: center;\n}\n\n.soldierImg {\n  display: flex;\n  justify-content: center;\n  margin-top: 3rem;\n}\n\n.medal {\n  display: flex;\n  justify-content: center;\n  margin-left: 30%;\n  width: 10rem;\n  text-align: center;\n}\n\n.medalImg {\n  display: flex;\n  justify-content: center;\n  margin-top: 3rem;\n}\n\n.work {\n  display: flex;\n  justify-content: center;\n  margin-left: 30%;\n  width: 10rem;\n  text-align: center;\n}\n\n.workImg {\n  display: flex;\n  justify-content: center;\n  margin-top: 3rem;\n}\n\n.star {\n  display: flex;\n  justify-content: center;\n  margin-left: 30%;\n  width: 10rem;\n  text-align: center;\n}\n\n.starImg {\n  display: flex;\n  justify-content: center;\n  margin-top: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRkaWNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFJQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBREo7O0FBS0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUZKOztBQU1BO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFPQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBSko7O0FBUUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUxKOztBQVNBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFOSiIsImZpbGUiOiJkZGljZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyU3BhY2V7XG4gICAgZGlzcGxheTogY29udGVudHM7XG59XG5cbi5zb2xkaWVyc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XG4gICAgd2lkdGg6IDEwcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuXG4uc29sZGllckltZ3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG5cbn1cblxuLm1lZGFse1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgICB3aWR0aDogMTByZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG5cbi5tZWRhbEltZ3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG5cbn1cblxuLndvcmt7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xuICAgIHdpZHRoOiAxMHJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cblxuLndvcmtJbWd7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xuXG59XG5cbi5zdGFye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgICB3aWR0aDogMTByZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG5cbi5zdGFySW1ne1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcblxufSJdfQ== */");

/***/ }),

/***/ 59510:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games/ddice/ddice.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-button class=\"headerSpace\" color=\"primary\" (click)=\"navigateToGames()\"> <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;&nbsp; Back</ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"soldierImg\">\n    <ion-thumbnail>\n      <img src=\"../../../assets/icon/soldier.png\">\n    </ion-thumbnail>\n  </div>\n  <div class=\"soldiers\">\n    <ion-button  color=\"danger\" (click)=\"resSoldier(soldierValue)\">-</ion-button>\n    <ion-input disabled=\"true\" type=\"number\" [(ngModel)]=\"soldierValue\"></ion-input>\n    <ion-button  color=\"success\" (click)=\"sumSoldier(soldierValue)\">+</ion-button>\n  </div>\n\n  <div class=\"medalImg\">\n    <ion-thumbnail>\n      <img src=\"../../../assets/icon/medal.png\">\n    </ion-thumbnail>\n  </div>\n  <div class=\"medal\">\n    <ion-button  color=\"danger\" (click)=\"resMedal(medalValue)\">-</ion-button>\n    <ion-input disabled=\"true\" type=\"number\" [(ngModel)]=\"medalValue\"></ion-input>\n    <ion-button  color=\"success\" (click)=\"sumMedal(medalValue)\">+</ion-button>\n  </div>\n\n  <div class=\"workImg\">\n    <ion-thumbnail>\n      <img src=\"../../../assets/icon/work.png\">\n    </ion-thumbnail>\n  </div>\n  <div class=\"work\">\n    <ion-button  color=\"danger\" (click)=\"resWork(workValue)\">-</ion-button>\n    <ion-input disabled=\"true\" type=\"number\" [(ngModel)]=\"workValue\"></ion-input>\n    <ion-button  color=\"success\" (click)=\"sumWork(workValue)\">+</ion-button>\n  </div>\n\n  <div class=\"starImg\">\n    <ion-thumbnail>\n      <img src=\"../../../assets/icon/star.png\">\n    </ion-thumbnail>\n  </div>\n  <div class=\"star\">\n    <ion-button  color=\"danger\" (click)=\"resStar(starValue)\">-</ion-button>\n    <ion-input disabled=\"true\" type=\"number\" [(ngModel)]=\"starValue\"></ion-input>\n    <ion-button  color=\"success\" (click)=\"sumStar(starValue)\">+</ion-button>\n  </div>\n\n  <div>\n    <ion-button  style=\"margin-top: 1rem;\n    justify-content: center;\n    display: flex;\" color=\"primary\" (click)=\"reset()\">RESET</ion-button>\n  </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_games_ddice_ddice_module_ts-es2015.js.map