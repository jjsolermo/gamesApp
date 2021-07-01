(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkboardGames"] = self["webpackChunkboardGames"] || []).push([["src_app_games_space_buy-ships_buy-ships_module_ts"], {
    /***/
    14315:
    /*!*******************************************************************!*\
      !*** ./src/app/games/space/buy-ships/buy-ships-routing.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BuyShipsPageRoutingModule": function BuyShipsPageRoutingModule() {
          return (
            /* binding */
            _BuyShipsPageRoutingModule
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


      var _buy_ships_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./buy-ships.page */
      31445);

      var routes = [{
        path: '',
        component: _buy_ships_page__WEBPACK_IMPORTED_MODULE_0__.BuyShipsPage
      }];

      var _BuyShipsPageRoutingModule = function BuyShipsPageRoutingModule() {
        _classCallCheck(this, BuyShipsPageRoutingModule);
      };

      _BuyShipsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _BuyShipsPageRoutingModule);
      /***/
    },

    /***/
    14941:
    /*!***********************************************************!*\
      !*** ./src/app/games/space/buy-ships/buy-ships.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BuyShipsPageModule": function BuyShipsPageModule() {
          return (
            /* binding */
            _BuyShipsPageModule
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


      var _buy_ships_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./buy-ships-routing.module */
      14315);
      /* harmony import */


      var _buy_ships_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./buy-ships.page */
      31445);

      var _BuyShipsPageModule = function BuyShipsPageModule() {
        _classCallCheck(this, BuyShipsPageModule);
      };

      _BuyShipsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _buy_ships_routing_module__WEBPACK_IMPORTED_MODULE_0__.BuyShipsPageRoutingModule],
        declarations: [_buy_ships_page__WEBPACK_IMPORTED_MODULE_1__.BuyShipsPage]
      })], _BuyShipsPageModule);
      /***/
    },

    /***/
    31445:
    /*!*********************************************************!*\
      !*** ./src/app/games/space/buy-ships/buy-ships.page.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BuyShipsPage": function BuyShipsPage() {
          return (
            /* binding */
            _BuyShipsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_buy_ships_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./buy-ships.page.html */
      33427);
      /* harmony import */


      var _buy_ships_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./buy-ships.page.scss */
      26210);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _BuyShipsPage = /*#__PURE__*/function () {
        function BuyShipsPage() {
          _classCallCheck(this, BuyShipsPage);
        }

        _createClass(BuyShipsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BuyShipsPage;
      }();

      _BuyShipsPage.ctorParameters = function () {
        return [];
      };

      _BuyShipsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-buy-ships',
        template: _raw_loader_buy_ships_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_buy_ships_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _BuyShipsPage);
      /***/
    },

    /***/
    26210:
    /*!***********************************************************!*\
      !*** ./src/app/games/space/buy-ships/buy-ships.page.scss ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXktc2hpcHMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    33427:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games/space/buy-ships/buy-ships.page.html ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>buyShips</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_games_space_buy-ships_buy-ships_module_ts-es5.js.map