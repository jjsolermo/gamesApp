(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkboardGames"] = self["webpackChunkboardGames"] || []).push([["src_app_games_space_techs_techs_module_ts"], {
    /***/
    31543:
    /*!***********************************************************!*\
      !*** ./src/app/games/space/techs/techs-routing.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TechsPageRoutingModule": function TechsPageRoutingModule() {
          return (
            /* binding */
            _TechsPageRoutingModule
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


      var _techs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./techs.page */
      10073);

      var routes = [{
        path: '',
        component: _techs_page__WEBPACK_IMPORTED_MODULE_0__.TechsPage
      }];

      var _TechsPageRoutingModule = function TechsPageRoutingModule() {
        _classCallCheck(this, TechsPageRoutingModule);
      };

      _TechsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _TechsPageRoutingModule);
      /***/
    },

    /***/
    31970:
    /*!***************************************************!*\
      !*** ./src/app/games/space/techs/techs.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TechsPageModule": function TechsPageModule() {
          return (
            /* binding */
            _TechsPageModule
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


      var _techs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./techs-routing.module */
      31543);
      /* harmony import */


      var _techs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./techs.page */
      10073);

      var _TechsPageModule = function TechsPageModule() {
        _classCallCheck(this, TechsPageModule);
      };

      _TechsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _techs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TechsPageRoutingModule],
        declarations: [_techs_page__WEBPACK_IMPORTED_MODULE_1__.TechsPage]
      })], _TechsPageModule);
      /***/
    },

    /***/
    10073:
    /*!*************************************************!*\
      !*** ./src/app/games/space/techs/techs.page.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TechsPage": function TechsPage() {
          return (
            /* binding */
            _TechsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_techs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./techs.page.html */
      10095);
      /* harmony import */


      var _techs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./techs.page.scss */
      5894);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/db.service */
      73773);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _TechsPage = /*#__PURE__*/function () {
        function TechsPage(db, router) {
          _classCallCheck(this, TechsPage);

          this.db = db;
          this.router = router;
        }

        _createClass(TechsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.db.dbState().subscribe(function (res) {
              if (res) {
                _this.techs = _this.db.fetchTechOwner();
              }
            });
          }
        }, {
          key: "navigateToSapce",
          value: function navigateToSapce() {
            this.router.navigateByUrl('/games/space');
          }
        }]);

        return TechsPage;
      }();

      _TechsPage.ctorParameters = function () {
        return [{
          type: _services_db_service__WEBPACK_IMPORTED_MODULE_2__.DbService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }];
      };

      _TechsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-techs',
        template: _raw_loader_techs_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_techs_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TechsPage);
      /***/
    },

    /***/
    5894:
    /*!***************************************************!*\
      !*** ./src/app/games/space/techs/techs.page.scss ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headerSpace {\n  display: contents;\n}\n\n.headerTitle {\n  text-align: center;\n  margin: 2rem;\n}\n\nion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n.caja {\n  text-align: center;\n}\n\n.tarjeta {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlY2hzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLCtCQUFBO0FBRUo7O0FBQ0E7RUFDSSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtBQUdKIiwiZmlsZSI6InRlY2hzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJTcGFjZXtcclxuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG59XHJcblxyXG4uaGVhZGVyVGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDJyZW07XHJcbn1cclxuaW9uLW1lbnUtYnV0dG9uIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5jYWphe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50YXJqZXRhe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG59Il19 */";
      /***/
    },

    /***/
    10095:
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games/space/techs/techs.page.html ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-button class=\"headerSpace\" color=\"primary\" (click)=\"navigateToSapce()\"> <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;&nbsp; Back</ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-title style=\"text-align: center;\">Technologies</ion-title>\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let tech of techs |async\">\r\n      <ion-card class=\"tarjeta\">\r\n        <ion-card-header>\r\n          <ion-card-subtitle>Name</ion-card-subtitle>\r\n          <ion-card-title>{{tech.Name}}</ion-card-title>\r\n        </ion-card-header> \r\n        <ion-card-content>\r\n          <ion-row>\r\n            <ion-col>\r\n              <h2>Level</h2>\r\n              <h3 style=\"color: black; font-weight: bold;\">{{tech.Value}}</h3>\r\n            </ion-col>\r\n            <ion-col>\r\n              <h2>Cost</h2>\r\n              <h3 style=\"color: black; font-weight: bold;\">{{tech.Cost}}</h3>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-label style=\"white-space: break-spaces;color: black; font-weight: bold;\">\r\n              {{tech.Description}}   \r\n            </ion-label>\r\n          </ion-row>      \r\n        </ion-card-content>\r\n        </ion-card>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_games_space_techs_techs_module_ts-es5.js.map