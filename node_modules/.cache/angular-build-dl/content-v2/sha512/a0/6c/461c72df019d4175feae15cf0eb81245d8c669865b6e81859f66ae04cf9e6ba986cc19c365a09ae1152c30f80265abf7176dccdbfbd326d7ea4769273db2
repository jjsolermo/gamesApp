(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (self["webpackChunkboardGames"] = self["webpackChunkboardGames"] || []).push([["common"], {
    /***/
    6633:
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "c": function c() {
          return (
            /* binding */
            createButtonActiveGesture
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-7a8b7a1c.js */
      23150);
      /* harmony import */


      var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./haptic-27b3f981.js */
      52954);
      /* harmony import */


      var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./index-f49d994d.js */
      97279);

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          (0, _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          (0, _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return (0, _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            (0, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    77330:
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "a": function a() {
          return (
            /* binding */
            attachComponent
          );
        },

        /* harmony export */
        "d": function d() {
          return (
            /* binding */
            detachComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./helpers-dd7e4b7b.js */
      52377);

      var attachComponent = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!delegate) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);
                  _context.next = 10;
                  return new Promise(function (resolve) {
                    return (0, _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.c)(el, resolve);
                  });

                case 10:
                  return _context.abrupt("return", el);

                case 11:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function attachComponent(_x, _x2, _x3, _x4, _x5) {
          return _ref.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    52954:
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "a": function a() {
          return (
            /* binding */
            hapticSelectionStart
          );
        },

        /* harmony export */
        "b": function b() {
          return (
            /* binding */
            hapticSelectionChanged
          );
        },

        /* harmony export */
        "c": function c() {
          return (
            /* binding */
            hapticSelection
          );
        },

        /* harmony export */
        "d": function d() {
          return (
            /* binding */
            hapticImpact
          );
        },

        /* harmony export */
        "h": function h() {
          return (
            /* binding */
            hapticSelectionEnd
          );
        }
        /* harmony export */

      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    60408:
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "S": function S() {
          return (
            /* binding */
            SPINNERS
          );
        }
        /* harmony export */

      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    61269:
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "c": function c() {
          return (
            /* binding */
            createColorClasses
          );
        },

        /* harmony export */
        "g": function g() {
          return (
            /* binding */
            getClassMap
          );
        },

        /* harmony export */
        "h": function h() {
          return (
            /* binding */
            hostContext
          );
        },

        /* harmony export */
        "o": function o() {
          return (
            /* binding */
            openURL
          );
        }
        /* harmony export */

      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context2.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context2.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context2.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context2.abrupt("return", false);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function openURL(_x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    69749:
    /*!*****************************************************!*\
      !*** ./src/app/modal/modal-ship/modal-ship.page.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ModalShipPage": function ModalShipPage() {
          return (
            /* binding */
            _ModalShipPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_modal_ship_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./modal-ship.page.html */
      49283);
      /* harmony import */


      var _modal_ship_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./modal-ship.page.scss */
      55759);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _ModalShipPage = /*#__PURE__*/function () {
        function ModalShipPage(modalController) {
          _classCallCheck(this, ModalShipPage);

          this.modalController = modalController;
        }

        _createClass(ModalShipPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "close",
          value: function close() {
            this.modalController.dismiss();
          }
        }]);

        return ModalShipPage;
      }();

      _ModalShipPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController
        }];
      };

      _ModalShipPage.propDecorators = {
        Attack_Strength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        Buy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        CP: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        Class: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        Description: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        Hull_Size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        Type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        TAttack: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        TDefense: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        TMove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        TOther: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        TTactics: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }]
      };
      _ModalShipPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-modal-ship',
        template: _raw_loader_modal_ship_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_modal_ship_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ModalShipPage);
      /***/
    },

    /***/
    18891:
    /*!*******************************************!*\
      !*** ./src/app/modal/modal/modal.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ModalPage": function ModalPage() {
          return (
            /* binding */
            _ModalPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./modal.page.html */
      29640);
      /* harmony import */


      var _modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./modal.page.scss */
      33303);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _ModalPage = /*#__PURE__*/function () {
        function ModalPage(modalController) {
          _classCallCheck(this, ModalPage);

          this.modalController = modalController;
        }

        _createClass(ModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "close",
          value: function close() {
            this.modalController.dismiss();
          }
        }]);

        return ModalPage;
      }();

      _ModalPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController
        }];
      };

      _ModalPage.propDecorators = {
        Attack_Strength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        Buy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        CP: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        Class: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        Description: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        Hull_Size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        Type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        TAttack: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        TDefense: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        TMove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        TOther: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        TTactics: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }]
      };
      _ModalPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-modal',
        template: _raw_loader_modal_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ModalPage);
      /***/
    },

    /***/
    37556:
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthService": function AuthService() {
          return (
            /* binding */
            _AuthService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/firestore */
      56717);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! firebase/app */
      42329);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      43190);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/auth */
      49743); // import * as firebase from 'firebase';


      var _AuthService = /*#__PURE__*/function () {
        function AuthService(afAuth, route, router, db) {
          var _this = this;

          _classCallCheck(this, AuthService);

          this.afAuth = afAuth;
          this.route = route;
          this.router = router;
          this.db = db; // Get the auth state, then fetch the Firestore user document or return null

          this.appUser$ = this.afAuth.authState.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(function (user) {
            // If the user is logged in, return the user details.
            if (user) {
              return _this.db.doc("appusers/".concat(user.uid)).valueChanges();
            } else {
              // If the user is NOT logged in, return null.
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(null);
            }
          }));
        }

        _createClass(AuthService, [{
          key: "googleLogin",
          value: function googleLogin() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var credential;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.afAuth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth.GoogleAuthProvider());

                    case 2:
                      credential = _context3.sent;

                      if (credential) {
                        this.router.navigateByUrl('games');
                      }

                      return _context3.abrupt("return", this.updateUserData(credential.user));

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "signUpWithEmail",
          value: function signUpWithEmail(data) {
            var _this2 = this;

            this.afAuth.createUserWithEmailAndPassword(data.email, data.password).then(function (data) {
              if (data.user.emailVerified) {
                _this2.router.navigate(['/']);
              } else {
                data.user.sendEmailVerification().then(function () {
                  alert('Please verify your email');

                  _this2.afAuth.signOut();
                });
              }
            });
          }
        }, {
          key: "loginWithEmail",
          value: function loginWithEmail(data) {
            var _this3 = this;

            this.afAuth.signInWithEmailAndPassword(data.email, data.password).then(function (data) {
              _this3.router.navigateByUrl('games');
            });
          }
        }, {
          key: "resetPassword",
          value: function resetPassword(email) {
            this.afAuth.sendPasswordResetEmail(email).then(function () {
              alert('Please check your email, we have emailed you a password reset link');
            })["catch"](function (error) {
              if (error.code === 'auth/user-not-found') {
                alert('Sorry, user not found');
              }
            });
          } // Save the user data to firestore on Google|facebook login

        }, {
          key: "updateUserData",
          value: function updateUserData(user) {
            var userRef = this.db.doc("usersProfile/".concat(user.uid));
            var data = {
              name: user.displayName,
              email: user.email,
              photoURL: user.photoURL
            };
            return userRef.set(data, {
              merge: true
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this4 = this;

            this.afAuth.signOut().then(function () {
              _this4.router.navigate(['/']);
            });
          }
        }]);

        return AuthService;
      }();

      _AuthService.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuth
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore
        }];
      };

      _AuthService = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
      })], _AuthService);
      /***/
    },

    /***/
    55759:
    /*!*******************************************************!*\
      !*** ./src/app/modal/modal-ship/modal-ship.page.scss ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".modal_css {\n  display: contents;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLXNoaXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJtb2RhbC1zaGlwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbF9jc3N7XHJcbiAgICBkaXNwbGF5OiBjb250ZW50cztcclxufSJdfQ== */";
      /***/
    },

    /***/
    33303:
    /*!*********************************************!*\
      !*** ./src/app/modal/modal/modal.page.scss ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".modal_css {\n  display: contents;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0oiLCJmaWxlIjoibW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsX2Nzc3tcclxuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG59Il19 */";
      /***/
    },

    /***/
    49283:
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/modal-ship/modal-ship.page.html ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Ship Details</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"close()\">Close</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-subtitle>Class</ion-card-subtitle>\r\n      <ion-card-title>{{Class}}</ion-card-title>\r\n    </ion-card-header> \r\n    <ion-card-content>\r\n      <ion-row>\r\n        <ion-col>\r\n          <h2>CP</h2>\r\n          <h3 style=\"color: black; font-weight: bold;\">{{CP}}</h3>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <h2>Type</h2>\r\n          <h3 style=\"color: black; font-weight: bold;\">{{Type}}</h3>\r\n        </ion-col>\r\n        <ion-col>\r\n          <h2>Attack</h2>\r\n          <h3 style=\"color: black; font-weight: bold;\">{{Attack_Strength}}</h3>\r\n        </ion-col>\r\n        <ion-col>\r\n          <h2>Defense</h2>\r\n          <h3 style=\"color: black; font-weight: bold;\">{{Defense_Strength}}</h3>\r\n        </ion-col>\r\n        <ion-col>\r\n          <h2>Hull Size</h2>\r\n          <h3 style=\"color: black; font-weight: bold;\">{{Hull_Size}}</h3>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-label style=\"margin-top: 1rem;color: black; font-weight: bold;\">\r\n          {{Description}}   \r\n        </ion-label>\r\n      </ion-row>      \r\n    </ion-card-content>\r\n    </ion-card>\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-card-title>Technologies</ion-card-title>\r\n      </ion-card-header> \r\n      <ion-card-content>\r\n        <ion-row>\r\n          <ion-col>\r\n            <h2>Attack </h2>\r\n            <h3 style=\"color: black; font-weight: bold;\">Level : {{TAttack}}</h3>\r\n          </ion-col>\r\n          <ion-col>\r\n            <h2>Defense </h2>\r\n            <h3 style=\"color: black; font-weight: bold;\">Level :{{TDefense}}</h3>\r\n          </ion-col>\r\n          <ion-col>\r\n            <h2>Tactical </h2>\r\n            <h3 style=\"color: black; font-weight: bold;\">Level :{{TTactics}}</h3>\r\n          </ion-col>\r\n        </ion-row>\r\n          <ion-row>\r\n          <ion-col>\r\n            <h2>Move </h2>\r\n            <h3 style=\"color: black; font-weight: bold;\">Level :{{TMove}}</h3>\r\n          </ion-col>\r\n          <ion-col>\r\n            <h2>Other </h2>\r\n            <h3 style=\"color: black; font-weight: bold;\">Level :{{TOther}}</h3>\r\n          </ion-col>\r\n        </ion-row>         \r\n      </ion-card-content>\r\n      </ion-card>\r\n</ion-content>\r\n\r\n";
      /***/
    },

    /***/
    29640:
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/modal/modal.page.html ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Ship Details</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"close()\">Close</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-subtitle>Class</ion-card-subtitle>\r\n      <ion-card-title>{{Class}}</ion-card-title>\r\n    </ion-card-header> \r\n    <ion-card-content>\r\n      <ion-row>\r\n        <ion-col>\r\n          <h2>CP</h2>\r\n          <h3 style=\"color: black; font-weight: bold;\">{{CP}}</h3>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <h2>Type</h2>\r\n          <h3 style=\"color: black; font-weight: bold;\">{{Type}}</h3>\r\n        </ion-col>\r\n        <ion-col>\r\n          <h2>Attack</h2>\r\n          <h3 style=\"color: black; font-weight: bold;\">{{Attack_Strength}}</h3>\r\n        </ion-col>\r\n        <ion-col>\r\n          <h2>Defense</h2>\r\n          <h3 style=\"color: black; font-weight: bold;\">{{Defense_Strength}}</h3>\r\n        </ion-col>\r\n        <ion-col>\r\n          <h2>Hull Size</h2>\r\n          <h3 style=\"color: black; font-weight: bold;\">{{Hull_Size}}</h3>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-label style=\"margin-top: 1rem;color: black; font-weight: bold;\">\r\n          {{Description}}   \r\n        </ion-label>\r\n      </ion-row>      \r\n    </ion-card-content>\r\n    </ion-card>\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map