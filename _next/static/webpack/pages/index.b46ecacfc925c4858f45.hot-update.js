webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./src/components/layout.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/veeresh/opensource/flocks-ui/src/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Investment = function Investment(mf) {\n  var badgeColors = {\n    \"new\": 'green.500',\n    exit: 'red.500',\n    reduced: 'red.200',\n    added: 'green.200',\n    held: 'grey.200'\n  };\n  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Tr\"], {\n    key: mf.stock_name,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Td\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }, mf.stock_name), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Td\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }, mf.industry), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Td\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Badge\"], {\n    variant: \"outline\",\n    colorScheme: badgeColors[mf.state],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 17\n    }\n  }, mf.state)), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Td\"], {\n    isNumeric: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }, mf.current_quantity), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Td\"], {\n    isNumeric: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }, mf.previous_quantity), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Td\"], {\n    isNumeric: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }, mf.change_quantity), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Td\"], {\n    isNumeric: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }, Number(mf.change_market_value).toFixed(2)), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Td\"], {\n    isNumeric: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, Number(mf.change_percentage_aum).toFixed(2)));\n};\n\n_c = Investment;\n\nvar IndexPage = function IndexPage(_ref) {\n  var caption = _ref.caption,\n      mutual_funds = _ref.mutual_funds;\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Table\"], {\n    variant: \"simple\",\n    colorScheme: \"teal\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"TableCaption\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 17\n    }\n  }, caption), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Thead\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 17\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Tr\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 21\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Th\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 25\n    }\n  }, \"Stock Name\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Th\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 25\n    }\n  }, \"Industry\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Th\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 25\n    }\n  }, \"State\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Th\"], {\n    isNumeric: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 25\n    }\n  }, \"Current Quantity\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Th\"], {\n    isNumeric: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 25\n    }\n  }, \"Previous Quantity\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Th\"], {\n    isNumeric: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 25\n    }\n  }, \"Change in Quantity\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Th\"], {\n    isNumeric: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 25\n    }\n  }, \"Change in Market Value(in Lacs)\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Th\"], {\n    isNumeric: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 25\n    }\n  }, \"Change in AUM %\"))), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Tbody\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 17\n    }\n  }, mutual_funds[\"new\"].map(Investment), mutual_funds.added.map(Investment), mutual_funds.held.map(Investment), mutual_funds.reduced.map(Investment), mutual_funds.exit.map(Investment))));\n};\n\n_c2 = IndexPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Investment\");\n$RefreshReg$(_c2, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQ1NzAiXSwibmFtZXMiOlsiSW52ZXN0bWVudCIsIm1mIiwiYmFkZ2VDb2xvcnMiLCJleGl0IiwicmVkdWNlZCIsImFkZGVkIiwiaGVsZCIsInN0b2NrX25hbWUiLCJpbmR1c3RyeSIsInN0YXRlIiwiY3VycmVudF9xdWFudGl0eSIsInByZXZpb3VzX3F1YW50aXR5IiwiY2hhbmdlX3F1YW50aXR5IiwiTnVtYmVyIiwiY2hhbmdlX21hcmtldF92YWx1ZSIsInRvRml4ZWQiLCJjaGFuZ2VfcGVyY2VudGFnZV9hdW0iLCJJbmRleFBhZ2UiLCJjYXB0aW9uIiwibXV0dWFsX2Z1bmRzIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBV0E7O0FBSUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsRUFBRCxFQUFRO0FBQ3ZCLE1BQU1DLFdBQVcsR0FBRztBQUNoQixXQUFLLFdBRFc7QUFFaEJDLFFBQUksRUFBRSxTQUZVO0FBR2hCQyxXQUFPLEVBQUUsU0FITztBQUloQkMsU0FBSyxFQUFFLFdBSlM7QUFLaEJDLFFBQUksRUFBRTtBQUxVLEdBQXBCO0FBUUEsU0FDSSxNQUFDLG1EQUFEO0FBQUksT0FBRyxFQUFFTCxFQUFFLENBQUNNLFVBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLTixFQUFFLENBQUNNLFVBQVIsQ0FESixFQUVJLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLTixFQUFFLENBQUNPLFFBQVIsQ0FGSixFQUdJLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0RBQUQ7QUFBTyxXQUFPLEVBQUMsU0FBZjtBQUF5QixlQUFXLEVBQUVO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QixDQUZMLEVBR0ttQixZQUFZLENBQUNiLElBQWIsQ0FBa0JjLEdBQWxCLENBQXNCcEIsVUFBdEIsQ0FITCxFQUlLbUIsWUFBWSxDQUFDZixPQUFiLENBQXFCZ0IsR0FBckIsQ0FBeUJwQixVQUF6QixDQUpMLEVBS0ttQixZQUFZLENBQUNoQixJQUFiLENBQWtCaUIsR0FBbEIsQ0FBc0JwQixVQUF0QixDQUxMLENBZkosQ0FESixDQURKO0FBMkJILENBNUJEOztNQUFNaUIsUzs7QUFpRlNBLHdFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBUYWJsZSxcbiAgICBUaGVhZCxcbiAgICBUYm9keSxcbiAgICBCYWRnZSxcbiAgICBUcixcbiAgICBUaCxcbiAgICBUZCxcbiAgICBUYWJsZUNhcHRpb25cbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnO1xuXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmNvbnN0IEludmVzdG1lbnQgPSAobWYpID0+IHtcbiAgICBjb25zdCBiYWRnZUNvbG9ycyA9IHtcbiAgICAgICAgbmV3OiAnZ3JlZW4uNTAwJyxcbiAgICAgICAgZXhpdDogJ3JlZC41MDAnLFxuICAgICAgICByZWR1Y2VkOiAncmVkLjIwMCcsXG4gICAgICAgIGFkZGVkOiAnZ3JlZW4uMjAwJyxcbiAgICAgICAgaGVsZDogJ2dyZXkuMjAwJ1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VHIga2V5PXttZi5zdG9ja19uYW1lfT5cbiAgICAgICAgICAgIDxUZD57bWYuc3RvY2tfbmFtZX08L1RkPlxuICAgICAgICAgICAgPFRkPnttZi5pbmR1c3RyeX08L1RkPlxuICAgICAgICAgICAgPFRkPlxuICAgICAgICAgICAgICAgIDxCYWRnZSB2YXJpYW50PVwib3V0bGluZVwiIGNvbG9yU2NoZW1lPXtiYWRnZUNvbG9yc1ttZi5zdGF0ZV19PlxuICAgICAgICAgICAgICAgICAgICB7bWYuc3RhdGV9XG4gICAgICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICAgIDwvVGQ+XG4gICAgICAgICAgICA8VGQgaXNOdW1lcmljPnttZi5jdXJyZW50X3F1YW50aXR5fTwvVGQ+XG4gICAgICAgICAgICA8VGQgaXNOdW1lcmljPnttZi5wcmV2aW91c19xdWFudGl0eX08L1RkPlxuICAgICAgICAgICAgPFRkIGlzTnVtZXJpYz57bWYuY2hhbmdlX3F1YW50aXR5fTwvVGQ+XG4gICAgICAgICAgICA8VGQgaXNOdW1lcmljPntOdW1iZXIobWYuY2hhbmdlX21hcmtldF92YWx1ZSkudG9GaXhlZCgyKX08L1RkPlxuICAgICAgICAgICAgPFRkIGlzTnVtZXJpYz57TnVtYmVyKG1mLmNoYW5nZV9wZXJjZW50YWdlX2F1bSkudG9GaXhlZCgyKX08L1RkPlxuICAgICAgICA8L1RyPlxuICAgICk7XG59O1xuXG5jb25zdCBJbmRleFBhZ2UgPSAoeyBjYXB0aW9uLCBtdXR1YWxfZnVuZHMgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8VGFibGUgdmFyaWFudD1cInNpbXBsZVwiIGNvbG9yU2NoZW1lPVwidGVhbFwiPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNhcHRpb24+e2NhcHRpb259PC9UYWJsZUNhcHRpb24+XG4gICAgICAgICAgICAgICAgPFRoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8VHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGg+U3RvY2sgTmFtZTwvVGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGg+SW5kdXN0cnk8L1RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRoPlN0YXRlPC9UaD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaCBpc051bWVyaWM+Q3VycmVudCBRdWFudGl0eTwvVGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGggaXNOdW1lcmljPlByZXZpb3VzIFF1YW50aXR5PC9UaD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaCBpc051bWVyaWM+Q2hhbmdlIGluIFF1YW50aXR5PC9UaD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaCBpc051bWVyaWM+Q2hhbmdlIGluIE1hcmtldCBWYWx1ZShpbiBMYWNzKTwvVGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGggaXNOdW1lcmljPkNoYW5nZSBpbiBBVU0gJTwvVGg+XG4gICAgICAgICAgICAgICAgICAgIDwvVHI+XG4gICAgICAgICAgICAgICAgPC9UaGVhZD5cblxuICAgICAgICAgICAgICAgIDxUYm9keT5cbiAgICAgICAgICAgICAgICAgICAge211dHVhbF9mdW5kcy5uZXcubWFwKEludmVzdG1lbnQpfVxuICAgICAgICAgICAgICAgICAgICB7bXV0dWFsX2Z1bmRzLmFkZGVkLm1hcChJbnZlc3RtZW50KX1cbiAgICAgICAgICAgICAgICAgICAge211dHVhbF9mdW5kcy5oZWxkLm1hcChJbnZlc3RtZW50KX1cbiAgICAgICAgICAgICAgICAgICAge211dHVhbF9mdW5kcy5yZWR1Y2VkLm1hcChJbnZlc3RtZW50KX1cbiAgICAgICAgICAgICAgICAgICAge211dHVhbF9mdW5kcy5leGl0Lm1hcChJbnZlc3RtZW50KX1cbiAgICAgICAgICAgICAgICA8L1Rib2R5PlxuICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gICAgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuXG4gICAgbGV0IG1mcyA9IGF3YWl0IHByaXNtYS5tZl9kaWZmLmZpbmRNYW55KHtcbiAgICAgICAgb3JkZXJCeToge1xuICAgICAgICAgICAgY2hhbmdlX21hcmtldF92YWx1ZTogJ2Rlc2MnXG4gICAgICAgIH0sXG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICBmdW5kX2hvdXNlOiB7XG4gICAgICAgICAgICAgICAgZXF1YWxzOiAnUFBMVFZGJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGN1cnJlbnRfbW9udGg6IHtcbiAgICAgICAgICAgICAgICBlcXVhbHM6IDlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFtZnMpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0VtcHR5IG11dHVhbCBmdW5kcyBmb3IgUUxURVZGJyk7XG4gICAgICAgIG1mcyA9IFtdO1xuICAgIH1cblxuICAgIGxldCBtdXR1YWxfZnVuZHMgPSB7XG4gICAgICAgIG5ldzogW10sXG4gICAgICAgIGV4aXQ6IFtdLFxuICAgICAgICByZWR1Y2VkOiBbXSxcbiAgICAgICAgYWRkZWQ6IFtdLFxuICAgICAgICBoZWxkOiBbXVxuICAgIH07XG5cbiAgICBtZnMubWFwKChtZikgPT5cbiAgICAgICAgbXV0dWFsX2Z1bmRzW21mLnN0YXRlLnRvU3RyaW5nKCldLnB1c2goe1xuICAgICAgICAgICAgc3RvY2tfbmFtZTogbWYuc3RvY2tfbmFtZS50b1N0cmluZygpLFxuICAgICAgICAgICAgaW5kdXN0cnk6IG1mLmluZHVzdHJ5LnRvU3RyaW5nKCksXG4gICAgICAgICAgICBzdGF0ZTogbWYuc3RhdGUudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIGN1cnJlbnRfcXVhbnRpdHk6IG1mLmN1cnJlbnRfcXVhbnRpdHkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHByZXZpb3VzX3F1YW50aXR5OiBtZi5wcmV2aW91c19xdWFudGl0eS50b1N0cmluZygpLFxuICAgICAgICAgICAgY2hhbmdlX3F1YW50aXR5OiBtZi5jaGFuZ2VfcXVhbnRpdHkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIGNoYW5nZV9tYXJrZXRfdmFsdWU6IG1mLmNoYW5nZV9tYXJrZXRfdmFsdWUudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIGNoYW5nZV9wZXJjZW50YWdlX2F1bTogbWYuY2hhbmdlX3BlcmNlbnRhZ2VfYXVtLnRvU3RyaW5nKClcbiAgICAgICAgfSlcbiAgICApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGNhcHRpb246ICdQYXJhZyBQYXJpa2ggTG9uZyBUZXJtIEVxdWl0eSBGdW5kJyxcbiAgICAgICAgICAgIG11dHVhbF9mdW5kczogbXV0dWFsX2Z1bmRzXG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

})