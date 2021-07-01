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
/* harmony import */ var _modal_modal_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modal/modal/modal.page */ 18891);








let ShipsPage = class ShipsPage {
    constructor(router, rout, db, modalController, toastController) {
        this.router = router;
        this.rout = rout;
        this.db = db;
        this.modalController = modalController;
        this.toastController = toastController;
        this.shipList = [];
        this.techList = [];
        this.techFake = [
            {
                Buy: 1,
                Cost: 0,
                Description: "Add 0 to a ship's attack rating when in battle",
                Id: 6,
                Name: "Attack",
                Value: 0
            }, {
                Buy: 1,
                Cost: 0,
                Description: "Add 0 to a ship's attack rating when in battle",
                Id: 6,
                Name: "Attack",
                Value: 1
            },
            {
                Buy: 1,
                Cost: 0,
                Description: "Can build SC,CO,SY,Miner,Decoy,MS Pipeline",
                Id: 10,
                Name: "Ships Size",
                Value: 1
            },
            {
                Buy: 1,
                Cost: 0,
                Description: "Can move 1 hex per turn",
                Id: 19,
                Name: "Move",
                Value: 1
            },
            {
                Buy: 1,
                Cost: 10,
                Description: "Can move 1 hex per turn",
                Id: 19,
                Name: "Move",
                Value: 2
            },
            {
                Buy: 1,
                Cost: 0,
                Description: "Can build a 1 hull point per SY",
                Id: 26,
                Name: "Ship Yards",
                Value: 1
            }
        ];
        this.shipFake = [
            {
                Attack_Strength: "E3 (A6-8)",
                Buy: 1,
                CP: 6,
                Class: "Scout",
                Defense_Strength: "0",
                Description: "May have increased firepower versus fighters depending on level of point defense technology - A6 at PD1, A7 at PD2, A8 at PD3.",
                Hull_Size: 1,
                Type: "SC #1",
                id: 1
            },
            {
                Attack_Strength: "E3 (A6-8)",
                Buy: 1,
                CP: 6,
                Class: "Scout",
                Defense_Strength: "0",
                Description: "May have increased firepower versus fighters depending on level of point defense technology - A6 at PD1, A7 at PD2, A8 at PD3.",
                Hull_Size: 1,
                Type: "SC #2",
                id: 2
            },
            { Attack_Strength: "E3 (A6-8)",
                Buy: 1,
                CP: 6,
                Class: "Scout",
                Defense_Strength: "0",
                Description: "May have increased firepower versus fighters depending on level of point defense technology - A6 at PD1, A7 at PD2, A8 at PD3.",
                Hull_Size: 1,
                Type: "SC #3",
                id: 3
            },
            {
                Attack_Strength: "0",
                Buy: 1,
                CP: 5,
                Class: "Mining Ship",
                Defense_Strength: "0",
                Description: "(0 - Mant) Can pick up minerals and Space Wrecks.Always has a movement tech of 1.Is destroyed instantly during movement or combat if there are enemycombat ships present and there are no friendly combat ships.Can not retreat.",
                Hull_Size: 1,
                Type: "Miner 1",
                id: 58
            }
        ];
    }
    ngOnInit() {
        this.data = this.rout.params.subscribe(params => {
            this.cps = params['cps'];
        });
        this.db.dbState().subscribe((res) => {
            if (res) {
                this.ships = this.db.fetchShips();
                this.techs = this.db.fetchTechOwner();
                console.log(this.techs);
                this.techs.forEach(element => {
                    console.log(element);
                });
            }
        });
    }
    presentModal(e) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Insufficient cps.',
                duration: 2000
            });
            toast.present();
        });
    }
    masHullToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'You exceed the hull size.',
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
            if (e.Hull > this.hull_size) {
                this.masHullToast();
            }
            else {
                this.cps = this.cps - e.CP;
                this.db.buyShip(e.id, 1);
                this.assigTech(e);
            }
        }
    }
    assigTech(ship) {
        /* this.techs.forEach(element => {
          if(element.Name === 'Attack' && element.Value > 0){
            ship.TAttack = element.Value;
          }
          if(element.Name === 'Defense' && element.Value > 0){
            ship.TDefense = element.Value;
          }
          if(element.Name === 'Tactics' && element.Value > 0){
            ship.TTactics = element.Value;
          }
          if(element.Name === 'Move' && element.Value > 1){
            ship.TMove = element.Value;
          }
        });
    
        switch (ship.Class){
          case 'Scout':
            this.techs.forEach(element => {
            if(element.Name === 'Point Defense' && element.Value > 0){
              ship.TOther = 'Point Defense :' + element.Value;
            }
          });
          break;
          case 'Destroyer':
            this.techs.forEach(element => {
              if(element.Name === 'Scanners' && element.Value > 0){
                ship.TOther = 'Scanners: ' + element.Value;
              }
            });
            break;
            case 'Cruiser':
            this.techs.forEach(element => {
              if(element.Name === 'Exploration' && element.Value > 0){
                ship.TOther = 'Exploration :' + element.Value;
              }
            });
            break;
            case 'Fighter 1':
              this.techs.forEach(element => {
                if(element.Name === 'Fighters' && element.Value > 0){
                  ship.TOther ='Fighters :' + element.Value;
                  ship.TMove = 0
                }
              });
              break;
              case 'Fighter 2':
              this.techs.forEach(element => {
                if(element.Name === 'Fighters' && element.Value > 0){
                  ship.TOther ='Fighters :' + element.Value;
                  ship.TMove = 0
                }
              });
              break;
              case 'Fighter 3':
              this.techs.forEach(element => {
                if(element.Name === 'Fighters' && element.Value > 0){
                  ship.TOther ='Fighters :' + element.Value;
                  ship.TMove = 0
                }
              });
              break;
              case 'Raider':
              this.techs.forEach(element => {
                if(element.Name === 'Cloaking' && element.Value > 0){
                  ship.TOther ='Cloaking :' + element.Value;
                }
              });
              break;
              case 'Mine Sweeper':
              this.techs.forEach(element => {
                if(element.Name === 'Mine Sweeper' && element.Value > 0){
                  ship.TOther ='Mine Sweeper :' + element.Value;
                }
              });
              break;
    
    
              
        } */
        console.log(ship);
    }
    navigateToSapce() {
        this.router.navigateByUrl('/games/space');
    }
};
ShipsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
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
/* harmony default export */ __webpack_exports__["default"] = (".headerSpace {\n  display: contents;\n}\n\n.headerTitle {\n  text-align: center;\n  margin: 2rem;\n}\n\nion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n.caja {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoaXBzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLCtCQUFBO0FBRUo7O0FBQ0E7RUFDSSxrQkFBQTtBQUVKIiwiZmlsZSI6InNoaXBzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJTcGFjZXtcclxuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG59XHJcblxyXG4uaGVhZGVyVGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDJyZW07XHJcbn1cclxuaW9uLW1lbnUtYnV0dG9uIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5jYWphe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */");

/***/ }),

/***/ 90678:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games/space/ships/ships.page.html ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar >  \r\n    <ion-button class=\"headerSpace\" color=\"primary\" (click)=\"navigateToSapce()\"> <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;&nbsp; Back</ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <p style=\"text-align: center;\">CP'S {{cps}}</p>\r\n  <p style=\"text-align: center;\">Click in the class for more details</p>\r\n  <ion-list>\r\n    <!--<ion-item *ngFor=\"let ship of ships |async\">-->\r\n      <ion-item *ngFor=\"let ship of shipFake\">  \r\n          <ion-label (click)=\"presentModal(ship)\">\r\n            <h2>{{ship.Type}}</h2>\r\n            <h3>{{ship.Class}}</h3>\r\n          </ion-label>\r\n          <ion-label>\r\n            <h2>Cost</h2>\r\n            <h3>{{ship.CP}}</h3>\r\n          </ion-label>\r\n          <ion-label>\r\n            <h2>Attack</h2>\r\n            <h3>{{ship.Attack_Strength}}</h3>\r\n          </ion-label>\r\n          <ion-label>\r\n            <h2>Defense</h2>\r\n            <h3>{{ship.Defense_Strength}}</h3>\r\n          </ion-label>\r\n          <ion-label>\r\n            <h2>Hull Size</h2>\r\n            <h3>{{ship.Hull_Size}}</h3>\r\n            <ion-label>\r\n              <ion-button class=\"headerSpace\" color=\"success\" (click)=\"buy(ship)\"><ion-icon name=\"cash\"></ion-icon></ion-button>\r\n            </ion-label> \r\n          </ion-label>                       \r\n    </ion-item>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_games_space_ships_ships_module_ts-es2015.js.map