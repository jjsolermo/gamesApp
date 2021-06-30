(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkboardGames"] = self["webpackChunkboardGames"] || []).push([["src_app_games_space_space_module_ts"], {
    /***/
    42019:
    /*!*****************************************************!*\
      !*** ./src/app/games/space/space-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SpacePageRoutingModule": function SpacePageRoutingModule() {
          return (
            /* binding */
            _SpacePageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _space_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./space.page */
      73806);

      var routes = [{
        path: '',
        component: _space_page__WEBPACK_IMPORTED_MODULE_0__.SpacePage
      }, {
        path: 'ships',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_games_space_ships_ships_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./ships/ships.module */
          1084)).then(function (m) {
            return m.ShipsPageModule;
          });
        }
      }, {
        path: 'techs',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_games_space_techs_techs_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./techs/techs.module */
          31970)).then(function (m) {
            return m.TechsPageModule;
          });
        }
      }];

      var _SpacePageRoutingModule = function SpacePageRoutingModule() {
        _classCallCheck(this, SpacePageRoutingModule);
      };

      _SpacePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SpacePageRoutingModule);
      /***/
    },

    /***/
    70316:
    /*!*********************************************!*\
      !*** ./src/app/games/space/space.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SpacePageModule": function SpacePageModule() {
          return (
            /* binding */
            _SpacePageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _space_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./space-routing.module */
      42019);
      /* harmony import */


      var _space_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./space.page */
      73806);

      var _SpacePageModule = function SpacePageModule() {
        _classCallCheck(this, SpacePageModule);
      };

      _SpacePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _space_routing_module__WEBPACK_IMPORTED_MODULE_0__.SpacePageRoutingModule],
        declarations: [_space_page__WEBPACK_IMPORTED_MODULE_1__.SpacePage]
      })], _SpacePageModule);
      /***/
    },

    /***/
    73806:
    /*!*******************************************!*\
      !*** ./src/app/games/space/space.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SpacePage": function SpacePage() {
          return (
            /* binding */
            _SpacePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_space_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./space.page.html */
      4063);
      /* harmony import */


      var _space_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./space.page.scss */
      46583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/db.service */
      73773);
      /* harmony import */


      var _services_turn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../services/turn */
      31159);

      var _SpacePage = /*#__PURE__*/function () {
        function SpacePage(router, db) {
          _classCallCheck(this, SpacePage);

          this.router = router;
          this.db = db;
          this.turnList = [];
          this.shipList = [];
          this.total = 0;
          this.subTotal = 0;
          this.carryValue = 0;
          this.colonyValue = 0;
          this.mineralValue = 0;
          this.pipeValue = 0;
          this.manteninanceValue = 0;
          this.turnOrderBidValue = 0;
          this.updateValue = 0;
          this.remaining = 0;
        }

        _createClass(SpacePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.ionicForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
              carry: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.carryValue),
              colony: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(0),
              mineral: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(0),
              pipe: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(0),
              manteninance: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(0),
              turnOrderBid: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(0),
              update: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(0)
            });
            this.db.dbState().subscribe(function (res) {
              if (res) {
                _this.db.fetchTurn().subscribe(function (item) {
                  _this.turnList = item;

                  if (_this.turnList.length > 0) {
                    _this.carryValue = _this.turnList[0].CPS;
                  } else {
                    _this.carryValue = 0;
                  }
                });
              }
            });
          }
        }, {
          key: "navigateToGames",
          value: function navigateToGames() {
            this.router.navigateByUrl('/games');
          }
        }, {
          key: "goToOwnerShips",
          value: function goToOwnerShips() {
            this.router.navigateByUrl('/games/space/ships');
          }
        }, {
          key: "updateCarry",
          value: function updateCarry(e) {
            this.total = e + this.colonyValue + this.mineralValue + this.pipeValue;
          }
        }, {
          key: "updateColony",
          value: function updateColony(e) {
            this.total = this.carryValue + e + this.mineralValue + this.pipeValue;
          }
        }, {
          key: "updateMineral",
          value: function updateMineral(e) {
            this.total = this.carryValue + this.colonyValue + e + this.pipeValue;
          }
        }, {
          key: "updatePipe",
          value: function updatePipe(e) {
            this.total = this.carryValue + this.colonyValue + this.mineralValue + e;
          }
        }, {
          key: "updateManteninance",
          value: function updateManteninance(e) {
            this.subTotal = this.total - e - this.turnOrderBidValue;
            this.remaining = this.subTotal;
          }
        }, {
          key: "updateTurnOrderBid",
          value: function updateTurnOrderBid(e) {
            this.subTotal = this.total - this.manteninanceValue - e;
            this.remaining = this.subTotal;
          }
        }, {
          key: "updateUpdate",
          value: function updateUpdate(e) {
            this.remaining = this.subTotal - e;
          }
        }, {
          key: "cpForm",
          value: function cpForm() {
            var _this2 = this;

            var turnForm = new _services_turn__WEBPACK_IMPORTED_MODULE_3__.Turn();
            turnForm.CPS = this.remaining;
            this.total = this.remaining;
            this.db.updateTurn(0, turnForm).then(function (data) {
              _this2.subTotal = 0;
              _this2.carryValue = 0;
              _this2.colonyValue = 0;
              _this2.mineralValue = 0;
              _this2.pipeValue = 0;
              _this2.manteninanceValue = 0;
              _this2.turnOrderBidValue = 0;
              _this2.updateValue = 0;
              _this2.remaining = 0;
            });
          }
        }]);

        return SpacePage;
      }();

      _SpacePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _services_db_service__WEBPACK_IMPORTED_MODULE_2__.DbService
        }];
      };

      _SpacePage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-space',
        template: _raw_loader_space_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_space_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SpacePage);
      /***/
    },

    /***/
    73773:
    /*!****************************************!*\
      !*** ./src/app/services/db.service.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DbService": function DbService() {
          return (
            /* binding */
            _DbService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic-native/sqlite-porter/ngx */
      15855);
      /* harmony import */


      var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic-native/sqlite/ngx */
      70283);

      var _DbService = /*#__PURE__*/function () {
        function DbService(platform, sqlite, httpClient, sqlPorter) {
          var _this3 = this;

          _classCallCheck(this, DbService);

          this.platform = platform;
          this.sqlite = sqlite;
          this.httpClient = httpClient;
          this.sqlPorter = sqlPorter;
          this.shipList = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
          this.turnList = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
          this.shipListOwner = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
          this.isDbReady = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
          this.platform.ready().then(function () {
            _this3.sqlite.create({
              name: 'space_db.db',
              location: 'default'
            }).then(function (db) {
              _this3.storage = db;

              _this3.getFakeData();
            });
          });
        }

        _createClass(DbService, [{
          key: "dbState",
          value: function dbState() {
            return this.isDbReady.asObservable();
          }
        }, {
          key: "fetchShips",
          value: function fetchShips() {
            return this.shipList.asObservable();
          }
        }, {
          key: "fetchShipsOwner",
          value: function fetchShipsOwner() {
            return this.shipListOwner.asObservable();
          }
        }, {
          key: "fetchTurn",
          value: function fetchTurn() {
            return this.turnList.asObservable();
          } // Render fake data

        }, {
          key: "getFakeData",
          value: function getFakeData() {
            var _this4 = this;

            this.httpClient.get('assets/seed.sql', {
              responseType: 'text'
            }).subscribe(function (data) {
              _this4.sqlPorter.importSqlToDb(_this4.storage, data).then(function (_) {
                _this4.getShips();

                _this4.getTurn();

                _this4.getShipsOwner();

                _this4.isDbReady.next(true);
              })["catch"](function (error) {
                return console.error(error);
              });
            });
          } // Get list

        }, {
          key: "getShips",
          value: function getShips() {
            var _this5 = this;

            return this.storage.executeSql('SELECT * FROM ships where Buy = 0', []).then(function (res) {
              var items = [];

              if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                  items.push({
                    id: res.rows.item(i).Id,
                    Type: res.rows.item(i).Type,
                    Class: res.rows.item(i).Class,
                    CP: res.rows.item(i).CP,
                    Attack_Strength: res.rows.item(i).Attack_Strength,
                    Defense_Strength: res.rows.item(i).Defense_Strength,
                    Hull_Size: res.rows.item(i).Hull_Size,
                    Description: res.rows.item(i).Description,
                    Buy: res.rows.item(i).Buy
                  });
                }
              }

              _this5.shipList.next(items);
            });
          }
        }, {
          key: "getShipsOwner",
          value: function getShipsOwner() {
            var _this6 = this;

            return this.storage.executeSql('SELECT * FROM ships where Buy = 1', []).then(function (res) {
              var items = [];

              if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                  items.push({
                    id: res.rows.item(i).Id,
                    Type: res.rows.item(i).Type,
                    Class: res.rows.item(i).Class,
                    CP: res.rows.item(i).CP,
                    Attack_Strength: res.rows.item(i).Attack_Strength,
                    Defense_Strength: res.rows.item(i).Defense_Strength,
                    Hull_Size: res.rows.item(i).Hull_Size,
                    Description: res.rows.item(i).Description,
                    Buy: res.rows.item(i).Buy
                  });
                }
              }

              _this6.shipListOwner.next(items);
            });
          }
        }, {
          key: "updateTurn",
          value: function updateTurn(id, turnObject) {
            var _this7 = this;

            var data = [turnObject.CPS];
            return this.storage.executeSql("UPDATE turn SET CPS = ? WHERE id = ".concat(id), data).then(function (data) {
              _this7.getTurn();
            });
          }
        }, {
          key: "getTurn",
          value: function getTurn() {
            var _this8 = this;

            return this.storage.executeSql('SELECT * FROM turn', []).then(function (res) {
              var items = [];

              if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                  items.push({
                    Id: res.rows.item(i).Id,
                    CPS: res.rows.item(i).CPS
                  });
                }
              }

              _this8.turnList.next(items);
            }); // Add

            /* addSong(artist_name, song_name) {
              let data = [artist_name, song_name];
              return this.storage.executeSql('INSERT INTO songtable (artist_name, song_name) VALUES (?, ?)', data)
              .then(res => {
                this.getSongs();
              });
            } */

            /*  // Get single object
             getSong(id): Promise<Ship> {
               return this.storage.executeSql('SELECT * FROM songtable WHERE id = ?', [id]).then(res => {
                 return {
                   id: res.rows.item(0).id,
                   artist_name: res.rows.item(0).artist_name,
                   song_name: res.rows.item(0).song_name
                 }
               });
             }
            
             // Update
             updateSong(id, song: Ship) {
               let data = [song.artist_name, song.song_name];
               return this.storage.executeSql(`UPDATE songtable SET artist_name = ?, song_name = ? WHERE id = ${id}`, data)
               .then(data => {
                 this.getSongs();
               })
             }
            
             // Delete
             deleteSong(id) {
               return this.storage.executeSql('DELETE FROM songtable WHERE id = ?', [id])
               .then(_ => {
                 this.getSongs();
               });
             } */
          }
        }]);

        return DbService;
      }();

      _DbService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform
        }, {
          type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_1__.SQLite
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
        }, {
          type: _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_0__.SQLitePorter
        }];
      };

      _DbService = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
      })], _DbService);
      /***/
    },

    /***/
    31159:
    /*!**********************************!*\
      !*** ./src/app/services/turn.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Turn": function Turn() {
          return (
            /* binding */
            _Turn
          );
        }
        /* harmony export */

      });

      var _Turn = function _Turn() {
        _classCallCheck(this, _Turn);
      };
      /***/

    },

    /***/
    46583:
    /*!*********************************************!*\
      !*** ./src/app/games/space/space.page.scss ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headerSpace {\n  display: contents;\n}\n\n.headerTitle {\n  text-align: center;\n  margin: 2rem;\n}\n\nion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n.menuButton {\n  display: flex;\n  justify-content: center;\n}\n\n.inputCp {\n  text-align: center;\n  position: absolute;\n  left: 26%;\n}\n\n.carryOver {\n  margin-top: 1rem;\n  text-align: center;\n  padding: 0;\n}\n\n.carry {\n  margin-top: 2em;\n}\n\n.colony {\n  margin-top: 7em;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n}\n\n.mineral {\n  margin-top: 12em;\n}\n\n.pipe {\n  margin-top: 17em;\n}\n\n.manteninance {\n  margin-top: 25em;\n  color: red;\n}\n\n.turnOrderBid {\n  margin-top: 29em;\n  color: red;\n}\n\n.total {\n  position: absolute;\n  margin-top: 22em;\n  background: gainsboro;\n  text-align: center;\n  width: 100%;\n}\n\n.formClass {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwYWNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLCtCQUFBO0FBRUo7O0FBQ0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFFSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBRUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxnQkFBQTtBQUVKOztBQUFFO0VBQ0UsZ0JBQUE7QUFHSjs7QUFERTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtBQUlKOztBQUZFO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0FBS0o7O0FBSEU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFNSjs7QUFKRTtFQUNFLFNBQUE7QUFPSiIsImZpbGUiOiJzcGFjZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyU3BhY2V7XHJcbiAgICBkaXNwbGF5OiBjb250ZW50cztcclxufVxyXG5cclxuLmhlYWRlclRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAycmVtO1xyXG59XHJcbmlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxuXHJcbiAgLm1lbnVCdXR0b257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmlucHV0Q3Age1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMjYlO1xyXG4gIH1cclxuXHJcbiAgLmNhcnJ5T3ZlcntcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgLmNhcnJ5e1xyXG4gICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gIH1cclxuXHJcbiAgLmNvbG9ueXtcclxuICAgIG1hcmdpbi10b3A6IDdlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgLm1pbmVyYWx7XHJcbiAgICBtYXJnaW4tdG9wOiAxMmVtO1xyXG4gIH1cclxuICAucGlwZXtcclxuICAgIG1hcmdpbi10b3A6IDE3ZW07XHJcbiAgfVxyXG4gIC5tYW50ZW5pbmFuY2V7XHJcbiAgICBtYXJnaW4tdG9wOiAyNWVtO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcbiAgLnR1cm5PcmRlckJpZHtcclxuICAgIG1hcmdpbi10b3A6IDI5ZW07XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuICAudG90YWx7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMmVtO1xyXG4gICAgYmFja2dyb3VuZDogZ2FpbnNib3JvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5mb3JtQ2xhc3N7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    4063:
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games/space/space.page.html ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar >  \r\n    <ion-button class=\"headerSpace\" color=\"primary\" (click)=\"navigateToGames()\"> <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;&nbsp; Back</ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-title class=\"headerTitle\">Space Empire 4X</ion-title>\r\n  <section class=\"menuButton\">\r\n    <ion-button style=\"width: 4rem;\" size=\"small\">CP'S</ion-button>\r\n    <ion-button style=\"width: 4rem;\" size=\"small\" color=\"secondary\" (click)=\"goToOwnerShips()\">SHIPS</ion-button>\r\n    <ion-button style=\"width: 4rem;\" size=\"small\" color=\"success\">TECHS</ion-button>\r\n    <ion-button style=\"width: 4rem;\" size=\"small\" color=\"warning\">RESET</ion-button>\r\n  </section>\r\n\r\n  <form  [formGroup]=\"ionicForm\" (ngSubmit)=\"cpForm()\" novalidate>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col class=\"carryOver\">\r\n        <strong>Carry Over (max 30)</strong>\r\n        <ion-input  type=\"number\" max={30} min={0} formControlName=\"carry\" [(ngModel)]=\"carryValue\" (ionChange)=\"updateCarry(carryValue)\"></ion-input>\r\n \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"carryOver\">\r\n        <ion-col>\r\n          <strong>+ Colony CPs</strong>\r\n          <ion-input style=\"text-align: center;\" type=\"number\" min={0} formControlName=\"colony\" [(ngModel)]=\"colonyValue\" (ionChange)=\"updateColony(colonyValue)\"></ion-input>\r\n          \r\n        </ion-col>\r\n        <ion-col>\r\n          <strong>+ Mineral CPs</strong>\r\n      <ion-input style=\"text-align: center;\" type=\"number\" min={0} formControlName=\"mineral\" [(ngModel)]=\"mineralValue\" (ionChange)=\"updateMineral(mineralValue)\"></ion-input>\r\n      \r\n        </ion-col>\r\n        <ion-col>\r\n          <strong>+ MS Pipe CPs</strong>\r\n      <ion-input style=\"text-align: center;\" type=\"number\" min={0} formControlName=\"pipe\" [(ngModel)]=\"pipeValue\" (ionChange)=\"updatePipe(pipeValue)\"></ion-input>\r\n   \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <div style=\"text-align: center;background-color: lightgrey;\"><strong style=\"text-align: center;\">Total {{total}}</strong></div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"carryOver\">\r\n        <ion-col>\r\n          <strong style=\"color: red;\">- Manteninance</strong>\r\n          <ion-input  style=\"text-align: center;color: red;\" type=\"number\" min={0} formControlName=\"manteninance\" [(ngModel)]=\"manteninanceValue\" (ionChange)=\"updateManteninance(manteninanceValue)\"></ion-input>       \r\n        </ion-col>\r\n        <ion-col>\r\n          <strong style=\"color: red;\">- Turn order bid</strong>\r\n          <ion-input style=\"text-align: center;color: red;\" type=\"number\" min={0} formControlName=\"turnOrderBid\" [(ngModel)]=\"turnOrderBidValue\" (ionChange)=\"updateTurnOrderBid(turnOrderBidValue)\"></ion-input>     \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <div style=\"text-align: center;background-color: lightgrey;\"><strong style=\"text-align: center;\">SubTotal {{subTotal}}</strong></div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"carryOver\">\r\n        <ion-col>\r\n          <ion-button size=\"small\"><ion-icon name=\"airplane\"></ion-icon>&nbsp;&nbsp;Buy Ships</ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button size=\"small\"><ion-icon name=\"construct\"></ion-icon>&nbsp;&nbsp;Buy Techs</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"carryOver\" style=\"color: red;\">\r\n        <strong>- CP spent on upgrades</strong>\r\n        <ion-input  type=\"number\" min={0} formControlName=\"update\" [(ngModel)]=\"updateValue\" (ionChange)=\"updateUpdate(updateValue)\"></ion-input>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row style=\"text-align: center;background-color: lightgrey;\"> \r\n        <ion-col>\r\n          <div ><strong style=\"text-align: center;\">Remaining CP {{remaining}}</strong></div>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button size=\"small\" type=\"submit\" color=\"secondary\"><ion-icon name=\"save\"></ion-icon>&nbsp;&nbsp;SAVE</ion-button>\r\n         </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_games_space_space_module_ts-es5.js.map