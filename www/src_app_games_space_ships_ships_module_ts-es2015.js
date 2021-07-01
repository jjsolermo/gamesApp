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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_ships_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ships.page.html */ 90678);
/* harmony import */ var _ships_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ships.page.scss */ 74493);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/db.service */ 73773);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_modal_modal_ship_modal_ship_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modal/modal-ship/modal-ship.page */ 69749);








let ShipsPage = class ShipsPage {
    constructor(router, db, modalController, toastController) {
        this.router = router;
        this.db = db;
        this.modalController = modalController;
        this.toastController = toastController;
        this.shipList = [];
    }
    ngOnInit() {
        this.db.dbState().subscribe((res) => {
            if (res) {
                this.ships = this.db.fetchShipsOwner();
                this.db.getShipsOwner().then((data) => {
                    console.log(data);
                });
                console.log(this.ships);
            }
        });
    }
    destroyShip(ship) {
        this.db.destroyShips(ship.id, 0).then((res) => {
        });
    }
    presentModal(e) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_modal_modal_ship_modal_ship_page__WEBPACK_IMPORTED_MODULE_3__.ModalShipPage,
                cssClass: 'modal',
                componentProps: {
                    Attack_Strength: e.Attack_Strength,
                    Buy: e.Buy,
                    CP: e.CP,
                    Class: e.Class,
                    Defense_Strength: e.Defense_Strength,
                    Description: e.Description,
                    Hull_Size: e.Hull_Size,
                    TAttack: e.TAttack,
                    TDefense: e.TDefense,
                    TMove: e.TMove,
                    TOther: e.TOther,
                    TTactics: e.TTactics,
                    Type: e.Type,
                    id: e.id
                }
            });
            return yield modal.present();
        });
    }
    navigateToSapce() {
        this.router.navigateByUrl('/games/space');
    }
};
ShipsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_db_service__WEBPACK_IMPORTED_MODULE_2__.DbService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
ShipsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
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
/* harmony default export */ __webpack_exports__["default"] = (".headerSpace {\n  display: contents;\n}\n\n.headerTitle {\n  text-align: center;\n  margin: 2rem;\n}\n\nion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n.caja {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoaXBzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLCtCQUFBO0FBRUo7O0FBQ0E7RUFDSSxrQkFBQTtBQUVKIiwiZmlsZSI6InNoaXBzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJTcGFjZXtcbiAgICBkaXNwbGF5OiBjb250ZW50cztcbn1cblxuLmhlYWRlclRpdGxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDJyZW07XG59XG5pb24tbWVudS1idXR0b24ge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5jYWphe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ 90678:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games/space/ships/ships.page.html ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar >  \n    <ion-button class=\"headerSpace\" color=\"primary\" (click)=\"navigateToSapce()\"> <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;&nbsp; Back</ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let ship of ships |async\">\n      <!--<ion-item *ngFor=\"let ship of shipFake\">  -->\n          <ion-label>\n            <h2>{{ship.Type}}</h2>\n            <h3>{{ship.Class}}</h3>\n          </ion-label>\n          <ion-label>\n            <h2>Attack</h2>\n            <h3>{{ship.Attack_Strength}}</h3>\n          </ion-label>\n          <ion-label>\n            <h2>Defense</h2>\n            <h3>{{ship.Defense_Strength}}</h3>\n          </ion-label>\n            <ion-label style=\"margin: 3%;\">\n              <ion-button  class=\"headerSpace\" color=\"primary\" (click)=\"presentModal(ship)\"><ion-icon name=\"eye\"></ion-icon></ion-button>\n          </ion-label>  \n          <ion-label style=\"margin: 3%;\">\n            <ion-button class=\"headerSpace\" color=\"danger\" (click)=\"destroyShip(ship)\"><ion-icon name=\"trash\"></ion-icon></ion-button>\n        </ion-label>                       \n    </ion-item>\n  </ion-list>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_games_space_ships_ships_module_ts-es2015.js.map