(self["webpackChunkboardGames"] = self["webpackChunkboardGames"] || []).push([["src_app_games_space_buy-ships_buy-ships_module_ts"],{

/***/ 14315:
/*!*******************************************************************!*\
  !*** ./src/app/games/space/buy-ships/buy-ships-routing.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuyShipsPageRoutingModule": function() { return /* binding */ BuyShipsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _buy_ships_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buy-ships.page */ 31445);




const routes = [
    {
        path: '',
        component: _buy_ships_page__WEBPACK_IMPORTED_MODULE_0__.BuyShipsPage
    }
];
let BuyShipsPageRoutingModule = class BuyShipsPageRoutingModule {
};
BuyShipsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BuyShipsPageRoutingModule);



/***/ }),

/***/ 14941:
/*!***********************************************************!*\
  !*** ./src/app/games/space/buy-ships/buy-ships.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuyShipsPageModule": function() { return /* binding */ BuyShipsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _buy_ships_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buy-ships-routing.module */ 14315);
/* harmony import */ var _buy_ships_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buy-ships.page */ 31445);







let BuyShipsPageModule = class BuyShipsPageModule {
};
BuyShipsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _buy_ships_routing_module__WEBPACK_IMPORTED_MODULE_0__.BuyShipsPageRoutingModule
        ],
        declarations: [_buy_ships_page__WEBPACK_IMPORTED_MODULE_1__.BuyShipsPage]
    })
], BuyShipsPageModule);



/***/ }),

/***/ 31445:
/*!*********************************************************!*\
  !*** ./src/app/games/space/buy-ships/buy-ships.page.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuyShipsPage": function() { return /* binding */ BuyShipsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_buy_ships_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./buy-ships.page.html */ 33427);
/* harmony import */ var _buy_ships_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buy-ships.page.scss */ 26210);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/db.service */ 73773);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _modal_modal_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modal/modal/modal.page */ 18891);








let BuyShipsPage = class BuyShipsPage {
    constructor(router, rout, db, modalController, toastController) {
        this.router = router;
        this.rout = rout;
        this.db = db;
        this.modalController = modalController;
        this.toastController = toastController;
        this.schipList = [];
        this.techList = [];
        this.returnValue = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.hull_size = 1;
        this.limit_Ship = 0;
    }
    ngOnInit() {
        this.data = this.rout.params.subscribe(params => {
            this.cps = params['cps'];
        });
        this.db.dbState().subscribe((res) => {
            if (res) {
                this.ships = this.db.fetchShips();
                this.techs = this.db.fetchTechOwner();
                this.techs.forEach(e => {
                    e.map((i) => this.techList.push(i));
                });
            }
        });
    }
    presentModal(e) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_modal_modal_page__WEBPACK_IMPORTED_MODULE_3__.ModalPage,
                cssClass: 'modal',
                componentProps: {
                    Attack_Strength: e.Attack_Strength,
                    Buy: e.Buy,
                    CP: e.CP,
                    Class: e.Class,
                    Defense_Strength: e.Defense_Strength,
                    Description: e.Description,
                    Hull_Size: e.Hull_Size,
                    Type: e.Type,
                    id: e.id,
                }
            });
            return yield modal.present();
        });
    }
    noCpsToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Insufficient cps.',
                duration: 2000
            });
            toast.present();
        });
    }
    masHullToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'You exceed the hull size.',
                duration: 2000
            });
            toast.present();
        });
    }
    buyToast(type, classShip) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: `You buy a ${type} - ${classShip}.`,
                duration: 2000
            });
            toast.present();
        });
    }
    buy(e) {
        let tempScps = this.cps - e.CP;
        if (tempScps < 0) {
            this.noCpsToast();
        }
        else {
            if (e.Hull_Size > this.hull_size) {
                this.masHullToast();
            }
            else {
                this.cps = this.cps - e.CP;
                this.assigTech(e);
                this.db.buyShip(e.id, 1);
                this.buyToast(e.Type, e.Class);
                this.returnValue.emit(this.cps);
            }
        }
    }
    assigTech(ship) {
        this.techList.forEach(element => {
            if (element.Name === 'Attack' && element.Value > 0) {
                ship.TAttack = element.Value;
            }
            if (element.Name === 'Defense' && element.Value > 0) {
                ship.TDefense = element.Value;
            }
            if (element.Name === 'Tactics' && element.Value > 0) {
                ship.TTactics = element.Value;
            }
            if (element.Name === 'Move' && element.Value > 1) {
                ship.TMove = element.Value;
            }
        });
        switch (ship.Class) {
            case 'Scout':
                this.techList.forEach(element => {
                    if (element.Name === 'Point Defense' && element.Value > 0) {
                        ship.TOther = 'Point Defense :' + element.Value;
                    }
                });
                break;
            case 'Destroyer':
                this.techList.forEach(element => {
                    if (element.Name === 'Scanners' && element.Value > 0) {
                        ship.TOther = 'Scanners: ' + element.Value;
                    }
                });
                break;
            case 'Cruiser':
                this.techList.forEach(element => {
                    if (element.Name === 'Exploration' && element.Value > 0) {
                        ship.TOther = 'Exploration :' + element.Value;
                    }
                });
                break;
            case 'Fighter 1':
                this.techList.forEach(element => {
                    if (element.Name === 'Fighters' && element.Value > 0) {
                        ship.TOther = 'Fighters :' + element.Value;
                        ship.TMove = 0;
                    }
                });
                break;
            case 'Fighter 2':
                this.techList.forEach(element => {
                    if (element.Name === 'Fighters' && element.Value > 0) {
                        ship.TOther = 'Fighters :' + element.Value;
                        ship.TMove = 0;
                    }
                });
                break;
            case 'Fighter 3':
                this.techList.forEach(element => {
                    if (element.Name === 'Fighters' && element.Value > 0) {
                        ship.TOther = 'Fighters :' + element.Value;
                        ship.TMove = 0;
                    }
                });
                break;
            case 'Raider':
                this.techList.forEach(element => {
                    if (element.Name === 'Cloaking' && element.Value > 0) {
                        ship.TOther = 'Cloaking :' + element.Value;
                    }
                });
                break;
            case 'Mine Sweeper':
                this.techList.forEach(element => {
                    if (element.Name === 'Mine Sweeper' && element.Value > 0) {
                        ship.TOther = 'Mine Sweeper :' + element.Value;
                    }
                });
                break;
        }
        this.db.updateShips(ship.id, ship);
    }
    navigateToSapce() {
        this.router.navigateByUrl('/games/space');
    }
};
BuyShipsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _services_db_service__WEBPACK_IMPORTED_MODULE_2__.DbService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController }
];
BuyShipsPage.propDecorators = {
    returnValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
BuyShipsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-buy-ships',
        template: _raw_loader_buy_ships_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_buy_ships_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BuyShipsPage);



/***/ }),

/***/ 26210:
/*!***********************************************************!*\
  !*** ./src/app/games/space/buy-ships/buy-ships.page.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headerSpace {\n  display: contents;\n}\n\n.headerTitle {\n  text-align: center;\n  margin: 2rem;\n}\n\nion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n.caja {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1eS1zaGlwcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSwrQkFBQTtBQUVKOztBQUNBO0VBQ0ksa0JBQUE7QUFFSiIsImZpbGUiOiJidXktc2hpcHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlclNwYWNle1xuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xufVxuXG4uaGVhZGVyVGl0bGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMnJlbTtcbn1cbmlvbi1tZW51LWJ1dHRvbiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmNhamF7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4iXX0= */");

/***/ }),

/***/ 33427:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games/space/buy-ships/buy-ships.page.html ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar >  \n    <ion-button class=\"headerSpace\" color=\"primary\" (click)=\"navigateToSapce()\"> <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;&nbsp; Back</ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <p style=\"text-align: center;\">CP'S {{cps}}</p>\n  <p style=\"text-align: center;\">Click in the class for more details</p>\n  <ion-list>\n    <ion-item *ngFor=\"let ship of ships |async\">\n      <!--<ion-item *ngFor=\"let ship of ships\">  -->\n          <ion-label (click)=\"presentModal(ship)\">\n            <h2>{{ship.Type}}</h2>\n            <h3>{{ship.Class}}</h3>\n          </ion-label>\n          <ion-label>\n            <h2>Cost</h2>\n            <h3>{{ship.CP}}</h3>\n          </ion-label>\n          <ion-label>\n            <h2>Attack</h2>\n            <h3>{{ship.Attack_Strength}}</h3>\n          </ion-label>\n          <ion-label>\n            <h2>Defense</h2>\n            <h3>{{ship.Defense_Strength}}</h3>\n          </ion-label>\n          <ion-label>\n            <h2>Hull Size</h2>\n            <h3>{{ship.Hull_Size}}</h3>\n            <ion-label>\n              <ion-button class=\"headerSpace\" color=\"success\" (click)=\"buy(ship)\"><ion-icon name=\"cash\"></ion-icon></ion-button>\n            </ion-label> \n          </ion-label>                       \n    </ion-item>\n  </ion-list>\n\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_games_space_buy-ships_buy-ships_module_ts-es2015.js.map