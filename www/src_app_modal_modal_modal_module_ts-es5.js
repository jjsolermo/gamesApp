(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkboardGames"] = self["webpackChunkboardGames"] || []).push([["src_app_modal_modal_modal_module_ts"], {
    /***/
    22303:
    /*!*****************************************************!*\
      !*** ./src/app/modal/modal/modal-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ModalPageRoutingModule": function ModalPageRoutingModule() {
          return (
            /* binding */
            _ModalPageRoutingModule
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


      var _modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./modal.page */
      18891);

      var routes = [{
        path: '',
        component: _modal_page__WEBPACK_IMPORTED_MODULE_0__.ModalPage
      }];

      var _ModalPageRoutingModule = function ModalPageRoutingModule() {
        _classCallCheck(this, ModalPageRoutingModule);
      };

      _ModalPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ModalPageRoutingModule);
      /***/
    },

    /***/
    32790:
    /*!*********************************************!*\
      !*** ./src/app/modal/modal/modal.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ModalPageModule": function ModalPageModule() {
          return (
            /* binding */
            _ModalPageModule
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


      var _modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./modal-routing.module */
      22303);
      /* harmony import */


      var _modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./modal.page */
      18891);

      var _ModalPageModule = function ModalPageModule() {
        _classCallCheck(this, ModalPageModule);
      };

      _ModalPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModalPageRoutingModule],
        declarations: [_modal_page__WEBPACK_IMPORTED_MODULE_1__.ModalPage]
      })], _ModalPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_modal_modal_modal_module_ts-es5.js.map