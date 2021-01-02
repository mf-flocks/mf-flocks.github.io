webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./src/components/layout.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/veeresh/opensource/flocks-ui/src/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Investment = function Investment(mf) {\n  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Tr\"], {\n    key: mf.stock_name,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Td\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }\n  }, mf.stock_name), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Td\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }\n  }, mf.industry), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Td\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }\n  }, mf.state), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Td\"], {\n    isNumeric: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }, mf.current_quantity), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Td\"], {\n    isNumeric: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }, mf.previous_quantity), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Td\"], {\n    isNumeric: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }, mf.change_quantity), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Td\"], {\n    isNumeric: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }, Number(mf.change_market_value).toFixed(2)), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Td\"], {\n    isNumeric: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  }, mf.change_percentage_aum.toFixed(2)));\n};\n\n_c = Investment;\n\nvar IndexPage = function IndexPage(_ref) {\n  var caption = _ref.caption,\n      mutual_funds = _ref.mutual_funds;\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Table\"], {\n    variant: \"simple\",\n    colorScheme: \"teal\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"TableCaption\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 17\n    }\n  }, caption), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Thead\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 17\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Tr\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 21\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Th\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 25\n    }\n  }, \"Stock Name\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Th\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 25\n    }\n  }, \"Industry\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Th\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 25\n    }\n  }, \"State\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Th\"], {\n    isNumeric: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 25\n    }\n  }, \"Current Month's Quantity\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Th\"], {\n    isNumeric: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 25\n    }\n  }, \"Previous Month's Quantity\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Th\"], {\n    isNumeric: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 25\n    }\n  }, \"Change in Quantity\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Th\"], {\n    isNumeric: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 25\n    }\n  }, \"Change in Market Value\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Th\"], {\n    isNumeric: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 25\n    }\n  }, \"Change in AUM %\"))), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Tbody\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 17\n    }\n  }, mutual_funds.map(Investment))));\n};\n\n_c2 = IndexPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Investment\");\n$RefreshReg$(_c2, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQ1NzAiXSwibmFtZXMiOlsiSW52ZXN0bWVudCIsIm1mIiwic3RvY2tfbmFtZSIsImluZHVzdHJ5Iiwic3RhdGUiLCJjdXJyZW50X3F1YW50aXR5IiwicHJldmlvdXNfcXVhbnRpdHkiLCJjaGFuZ2VfcXVhbnRpdHkiLCJOdW1iZXIiLCJjaGFuZ2VfbWFya2V0X3ZhbHVlIiwidG9GaXhlZCIsImNoYW5nZV9wZXJjZW50YWdlX2F1bSIsIkluZGV4UGFnZSIsImNhcHRpb24iLCJtdXR1YWxfZnVuZHMiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFVQTs7QUFJQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxFQUFELEVBQVE7QUFDdkIsU0FDSSxNQUFDLG1EQUFEO0FBQUksT0FBRyxFQUFFQSxFQUFFLENBQUNDLFVBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLRCxFQUFFLENBQUNDLFVBQVIsQ0FESixFQUVJLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLRCxFQUFFLENBQUNFLFFBQVIsQ0FGSixFQUdJLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLRixFQUFFLENBQUNHLEtBQVIsQ0FISixFQUlJLE1BQUMsbURBQUQ7QUFBSSxhQUFTLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFlSCxFQUFFLENBQUNJLGdCQUFsQixDQUpKLEVBS0ksTUFBQyxtREFBRDtBQUFJLGFBQVMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWVKLEVBQUUsQ0FBQ0ssaUJBQWxCLENBTEosRUFNSSxNQUFDLG1EQUFEO0FBQUksYUFBUyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZUwsRUFBRSxDQUFDTSxlQUFsQixDQU5KLEVBT0ksTUFBQyxtREFBRDtBQUFJLGFBQVMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWVDLE1BQU0sQ0FBQ1AsRUFBRSxDQUFDUSxtQkFBSixDQUFOLENBQStCQyxPQUEvQixDQUF1QyxDQUF2QyxDQUFmLENBUEosRUFRSSxNQUFDLG1EQUFEO0FBQUksYUFBUyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZVQsRUFBRSxDQUFDVSxxQkFBSCxDQUF5QkQsT0FBekIsQ0FBaUMsQ0FBakMsQ0FBZixDQVJKLENBREo7QUFZSCxDQWJEOztLQUFNVixVOztBQWVOLElBQU1ZLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQStCO0FBQUEsTUFBNUJDLE9BQTRCLFFBQTVCQSxPQUE0QjtBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7QUFDN0MsU0FDSSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHNEQUFEO0FBQU8sV0FBTyxFQUFDLFFBQWY7QUFBd0IsZUFBVyxFQUFDLE1BQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZUQsT0FBZixDQURKLEVBRUksTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLEVBRUksTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLEVBR0ksTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEosRUFJSSxNQUFDLG1EQUFEO0FBQUksYUFBUyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBSkosRUFLSSxNQUFDLG1EQUFEO0FBQUksYUFBUyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBTEosRUFNSSxNQUFDLG1EQUFEO0FBQUksYUFBUyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBTkosRUFPSSxNQUFDLG1EQUFEO0FBQUksYUFBUyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBUEosRUFRSSxNQUFDLG1EQUFEO0FBQUksYUFBUyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUkosQ0FESixDQUZKLEVBZUksTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1ZDLFlBQVksQ0FBQ0MsR0FBYixDQUFpQmYsVUFBakIsQ0FEVSxDQWZKLENBREosQ0FESjtBQXdCSCxDQXpCRDs7TUFBTVksUzs7QUFvRVNBLHdFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBUYWJsZSxcbiAgICBUaGVhZCxcbiAgICBUYm9keSxcbiAgICBUcixcbiAgICBUaCxcbiAgICBUZCxcbiAgICBUYWJsZUNhcHRpb25cbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnO1xuXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmNvbnN0IEludmVzdG1lbnQgPSAobWYpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8VHIga2V5PXttZi5zdG9ja19uYW1lfT5cbiAgICAgICAgICAgIDxUZD57bWYuc3RvY2tfbmFtZX08L1RkPlxuICAgICAgICAgICAgPFRkPnttZi5pbmR1c3RyeX08L1RkPlxuICAgICAgICAgICAgPFRkPnttZi5zdGF0ZX08L1RkPlxuICAgICAgICAgICAgPFRkIGlzTnVtZXJpYz57bWYuY3VycmVudF9xdWFudGl0eX08L1RkPlxuICAgICAgICAgICAgPFRkIGlzTnVtZXJpYz57bWYucHJldmlvdXNfcXVhbnRpdHl9PC9UZD5cbiAgICAgICAgICAgIDxUZCBpc051bWVyaWM+e21mLmNoYW5nZV9xdWFudGl0eX08L1RkPlxuICAgICAgICAgICAgPFRkIGlzTnVtZXJpYz57TnVtYmVyKG1mLmNoYW5nZV9tYXJrZXRfdmFsdWUpLnRvRml4ZWQoMil9PC9UZD5cbiAgICAgICAgICAgIDxUZCBpc051bWVyaWM+e21mLmNoYW5nZV9wZXJjZW50YWdlX2F1bS50b0ZpeGVkKDIpfTwvVGQ+XG4gICAgICAgIDwvVHI+XG4gICAgKTtcbn07XG5cbmNvbnN0IEluZGV4UGFnZSA9ICh7IGNhcHRpb24sIG11dHVhbF9mdW5kcyB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxUYWJsZSB2YXJpYW50PVwic2ltcGxlXCIgY29sb3JTY2hlbWU9XCJ0ZWFsXCI+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2FwdGlvbj57Y2FwdGlvbn08L1RhYmxlQ2FwdGlvbj5cbiAgICAgICAgICAgICAgICA8VGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDxUcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaD5TdG9jayBOYW1lPC9UaD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaD5JbmR1c3RyeTwvVGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGg+U3RhdGU8L1RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRoIGlzTnVtZXJpYz5DdXJyZW50IE1vbnRoJ3MgUXVhbnRpdHk8L1RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRoIGlzTnVtZXJpYz5QcmV2aW91cyBNb250aCdzIFF1YW50aXR5PC9UaD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaCBpc051bWVyaWM+Q2hhbmdlIGluIFF1YW50aXR5PC9UaD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaCBpc051bWVyaWM+Q2hhbmdlIGluIE1hcmtldCBWYWx1ZTwvVGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGggaXNOdW1lcmljPkNoYW5nZSBpbiBBVU0gJTwvVGg+XG4gICAgICAgICAgICAgICAgICAgIDwvVHI+XG4gICAgICAgICAgICAgICAgPC9UaGVhZD5cblxuICAgICAgICAgICAgICAgIDxUYm9keT5cblx0XHRcdFx0XHR7bXV0dWFsX2Z1bmRzLm1hcChJbnZlc3RtZW50KX1cblx0XHRcdFx0PC9UYm9keT5cblxuICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gICAgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuXG4gICAgbGV0IG1mcyA9IGF3YWl0IHByaXNtYS5tZl9kaWZmLmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIGZ1bmRfaG91c2U6IHtcbiAgICAgICAgICAgICAgICBlcXVhbHM6ICdQUExUVkYnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3VycmVudF9tb250aDoge1xuICAgICAgICAgICAgICAgIGVxdWFsczogOVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIW1mcykge1xuICAgICAgICBjb25zb2xlLmxvZygnRW1wdHkgbXV0dWFsIGZ1bmRzIGZvciBRTFRFVkYnKTtcbiAgICAgICAgbWZzID0gW107XG4gICAgfVxuXG4gICAgbGV0IG11dHVhbF9mdW5kcyA9IFtdO1xuICAgIG1mcy5tYXAoKG1mKSA9PlxuICAgICAgICBtdXR1YWxfZnVuZHMucHVzaCh7XG4gICAgICAgICAgICBzdG9ja19uYW1lOiBtZi5zdG9ja19uYW1lLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBpbmR1c3RyeTogbWYuaW5kdXN0cnkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHN0YXRlOiBtZi5zdGF0ZS50b1N0cmluZygpLFxuICAgICAgICAgICAgY3VycmVudF9xdWFudGl0eTogbWYuY3VycmVudF9xdWFudGl0eS50b1N0cmluZygpLFxuICAgICAgICAgICAgcHJldmlvdXNfcXVhbnRpdHk6IG1mLnByZXZpb3VzX3F1YW50aXR5LnRvU3RyaW5nKCksXG4gICAgICAgICAgICBjaGFuZ2VfcXVhbnRpdHk6IG1mLmNoYW5nZV9xdWFudGl0eS50b1N0cmluZygpLFxuICAgICAgICAgICAgY2hhbmdlX21hcmtldF92YWx1ZTogbWYuY2hhbmdlX21hcmtldF92YWx1ZS50b1N0cmluZygpLFxuICAgICAgICAgICAgY2hhbmdlX3BlcmNlbnRhZ2VfYXVtOiBtZi5jaGFuZ2VfcGVyY2VudGFnZV9hdW0udG9TdHJpbmcoKVxuICAgICAgICB9KVxuICAgICk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgY2FwdGlvbjogJ1BhcmFnIFBhcmlraCBMb25nIFRlcm0gRXF1aXR5IEZ1bmQnLFxuICAgICAgICAgICAgbXV0dWFsX2Z1bmRzOiBtdXR1YWxfZnVuZHNcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

})