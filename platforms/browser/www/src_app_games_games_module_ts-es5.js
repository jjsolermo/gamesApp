(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkboardGames"] = self["webpackChunkboardGames"] || []).push([["src_app_games_games_module_ts"], {
    /***/
    694:
    /*!***********************************************!*\
      !*** ./src/app/games/games-routing.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GamesPageRoutingModule": function GamesPageRoutingModule() {
          return (
            /* binding */
            _GamesPageRoutingModule
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


      var _games_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./games.page */
      18358);

      var routes = [{
        path: '',
        component: _games_page__WEBPACK_IMPORTED_MODULE_0__.GamesPage
      }, {
        path: 'space',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_games_space_space_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./space/space.module */
          70316)).then(function (m) {
            return m.SpacePageModule;
          });
        }
      }, {
        path: 'ddice',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_games_ddice_ddice_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./ddice/ddice.module */
          83476)).then(function (m) {
            return m.DdicePageModule;
          });
        }
      }];

      var _GamesPageRoutingModule = function GamesPageRoutingModule() {
        _classCallCheck(this, GamesPageRoutingModule);
      };

      _GamesPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _GamesPageRoutingModule);
      /***/
    },

    /***/
    88:
    /*!***************************************!*\
      !*** ./src/app/games/games.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GamesPageModule": function GamesPageModule() {
          return (
            /* binding */
            _GamesPageModule
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


      var _games_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./games-routing.module */
      694);
      /* harmony import */


      var _games_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./games.page */
      18358);

      var _GamesPageModule = function GamesPageModule() {
        _classCallCheck(this, GamesPageModule);
      };

      _GamesPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _games_routing_module__WEBPACK_IMPORTED_MODULE_0__.GamesPageRoutingModule],
        declarations: [_games_page__WEBPACK_IMPORTED_MODULE_1__.GamesPage]
      })], _GamesPageModule);
      /***/
    },

    /***/
    18358:
    /*!*************************************!*\
      !*** ./src/app/games/games.page.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GamesPage": function GamesPage() {
          return (
            /* binding */
            _GamesPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_games_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./games.page.html */
      93492);
      /* harmony import */


      var _games_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./games.page.scss */
      24893);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/auth.service */
      37556);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _GamesPage = /*#__PURE__*/function () {
        function GamesPage(authService, router) {
          _classCallCheck(this, GamesPage);

          this.authService = authService;
          this.router = router;
        }

        _createClass(GamesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "logOut",
          value: function logOut() {
            this.authService.logout();
          }
        }, {
          key: "navigateToSpace",
          value: function navigateToSpace() {
            this.router.navigateByUrl('/games/space');
          }
        }, {
          key: "navigateToDDice",
          value: function navigateToDDice() {
            console.log('soy un boton 2');
          }
        }]);

        return GamesPage;
      }();

      _GamesPage.ctorParameters = function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }];
      };

      _GamesPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-games',
        template: _raw_loader_games_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_games_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _GamesPage);
      /***/
    },

    /***/
    24893:
    /*!***************************************!*\
      !*** ./src/app/games/games.page.scss ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#logout {\n  float: right;\n}\n\n#titleGame {\n  position: absolute;\n  margin: 0.5em;\n}\n\n.buttonSet {\n  margin-top: 6rem;\n  text-align: center;\n  display: grid;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtBQUVKOztBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUdKIiwiZmlsZSI6ImdhbWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsb2dvdXR7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuI3RpdGxlR2FtZXtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICBtYXJnaW46IDAuNWVtO1xufVxuLmJ1dHRvblNldHtcbiAgICBtYXJnaW4tdG9wOiA2cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */";
      /***/
    },

    /***/
    93492:
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games/games.page.html ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title id=\"titleGame\">Games</ion-title>\n    <ion-button id=\"logout\" fill=\"clear\" (click)=\"logOut()\">LogOut</ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"buttonSet\">\n      <ion-button color=\"primary\" (click)=\"navigateToSpace()\">Space Empire 4X</ion-button>\n      <br>\n      <ion-button color=\"primary\" (click)=\"navigateToDDice()\">D-Dice</ion-button>\n  </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_games_games_module_ts-es5.js.map