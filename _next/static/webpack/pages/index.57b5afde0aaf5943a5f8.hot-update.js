webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./src/components/layout.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/veeresh/opensource/flocks-ui/src/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Investment = function Investment(mf) {\n  var badgeColors = {\n    \"new\": 'green.500',\n    exit: 'red.500',\n    reduced: 'red.300',\n    added: 'green.300',\n    held: 'grey.500'\n  };\n  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Tr\"], {\n    key: mf.stock_name,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Td\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }, mf.stock_name), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Td\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }, mf.industry), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Td\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    fontWeight: \"bold\",\n    color: badgeColors[mf.state],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 17\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Badge\"], {\n    variant: \"outline\",\n    colorScheme: badgeColors[mf.state],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 21\n    }\n  }, mf.state))), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Td\"], {\n    isNumeric: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }\n  }, mf.current_quantity), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Td\"], {\n    isNumeric: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }, mf.previous_quantity), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Td\"], {\n    isNumeric: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }\n  }, mf.change_quantity), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Td\"], {\n    isNumeric: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  }, Number(mf.change_market_value).toFixed(2)), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Td\"], {\n    isNumeric: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  }, Number(mf.change_percentage_aum).toFixed(2)));\n};\n\n_c = Investment;\n\nvar IndexPage = function IndexPage(_ref) {\n  var caption = _ref.caption,\n      mutual_funds = _ref.mutual_funds;\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Table\"], {\n    variant: \"simple\",\n    colorScheme: \"teal.500\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"TableCaption\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 17\n    }\n  }, caption), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Thead\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 17\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Tr\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 21\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Th\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 25\n    }\n  }, \"Stock Name\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Th\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 25\n    }\n  }, \"Industry\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Th\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 25\n    }\n  }, \"State\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Th\"], {\n    isNumeric: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 25\n    }\n  }, \"Current Quantity\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Th\"], {\n    isNumeric: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 25\n    }\n  }, \"Previous Quantity\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Th\"], {\n    isNumeric: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 25\n    }\n  }, \"Change in Quantity\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Th\"], {\n    isNumeric: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 25\n    }\n  }, \"Change in Market Value(in Lacs)\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Th\"], {\n    isNumeric: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 25\n    }\n  }, \"Change in AUM %\"))), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Tbody\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 17\n    }\n  }, mutual_funds[\"new\"].map(Investment), mutual_funds.added.map(Investment), mutual_funds.held.map(Investment), mutual_funds.reduced.map(Investment), mutual_funds.exit.map(Investment))));\n};\n\n_c2 = IndexPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Investment\");\n$RefreshReg$(_c2, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQ1NzAiXSwibmFtZXMiOlsiSW52ZXN0bWVudCIsIm1mIiwiYmFkZ2VDb2xvcnMiLCJleGl0IiwicmVkdWNlZCIsImFkZGVkIiwiaGVsZCIsInN0b2NrX25hbWUiLCJpbmR1c3RyeSIsInN0YXRlIiwiY3VycmVudF9xdWFudGl0eSIsInByZXZpb3VzX3F1YW50aXR5IiwiY2hhbmdlX3F1YW50aXR5IiwiTnVtYmVyIiwiY2hhbmdlX21hcmtldF92YWx1ZSIsInRvRml4ZWQiLCJjaGFuZ2VfcGVyY2VudGFnZV9hdW0iLCJJbmRleFBhZ2UiLCJjYXB0aW9uIiwibXV0dWFsX2Z1bmRzIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBWUE7O0FBSUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsRUFBRCxFQUFRO0FBQ3ZCLE1BQU1DLFdBQVcsR0FBRztBQUNoQixXQUFLLFdBRFc7QUFFaEJDLFFBQUksRUFBRSxTQUZVO0FBR2hCQyxXQUFPLEVBQUUsU0FITztBQUloQkMsU0FBSyxFQUFFLFdBSlM7QUFLaEJDLFFBQUksRUFBRTtBQUxVLEdBQXBCO0FBUUEsU0FDSSxNQUFDLG1EQUFEO0FBQUksT0FBRyxFQUFFTCxFQUFFLENBQUNNLFVBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLTixFQUFFLENBQUNNLFVBQVIsQ0FESixFQUVJLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLTixFQUFFLENBQUNPLFFBQVIsQ0FGSixFQUdJLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMscURBQUQ7QUFBTSxjQUFVLEVBQUMsTUFBakI7QUFBd0IsU0FBSyxFQUFF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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tDLFlBQVksT0FBWixDQUFpQkMsR0FBakIsQ0FBcUJwQixVQUFyQixDQURMLEVBRUttQixZQUFZLENBQUNkLEtBQWIsQ0FBbUJlLEdBQW5CLENBQXVCcEIsVUFBdkIsQ0FGTCxFQUdLbUIsWUFBWSxDQUFDYixJQUFiLENBQWtCYyxHQUFsQixDQUFzQnBCLFVBQXRCLENBSEwsRUFJS21CLFlBQVksQ0FBQ2YsT0FBYixDQUFxQmdCLEdBQXJCLENBQXlCcEIsVUFBekIsQ0FKTCxFQUtLbUIsWUFBWSxDQUFDaEIsSUFBYixDQUFrQmlCLEdBQWxCLENBQXNCcEIsVUFBdEIsQ0FMTCxDQWZKLENBREosQ0FESjtBQTJCSCxDQTVCRDs7TUFBTWlCLFM7O0FBaUZTQSx3RUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgVGFibGUsXG4gICAgVGhlYWQsXG4gICAgVGJvZHksXG4gICAgVGV4dCxcbiAgICBCYWRnZSxcbiAgICBUcixcbiAgICBUaCxcbiAgICBUZCxcbiAgICBUYWJsZUNhcHRpb25cbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnO1xuXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmNvbnN0IEludmVzdG1lbnQgPSAobWYpID0+IHtcbiAgICBjb25zdCBiYWRnZUNvbG9ycyA9IHtcbiAgICAgICAgbmV3OiAnZ3JlZW4uNTAwJyxcbiAgICAgICAgZXhpdDogJ3JlZC41MDAnLFxuICAgICAgICByZWR1Y2VkOiAncmVkLjMwMCcsXG4gICAgICAgIGFkZGVkOiAnZ3JlZW4uMzAwJyxcbiAgICAgICAgaGVsZDogJ2dyZXkuNTAwJ1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VHIga2V5PXttZi5zdG9ja19uYW1lfT5cbiAgICAgICAgICAgIDxUZD57bWYuc3RvY2tfbmFtZX08L1RkPlxuICAgICAgICAgICAgPFRkPnttZi5pbmR1c3RyeX08L1RkPlxuICAgICAgICAgICAgPFRkPlxuICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9XCJib2xkXCIgY29sb3I9e2JhZGdlQ29sb3JzW21mLnN0YXRlXX0+XG4gICAgICAgICAgICAgICAgICAgIDxCYWRnZVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JTY2hlbWU9e2JhZGdlQ29sb3JzW21mLnN0YXRlXX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge21mLnN0YXRlfVxuICAgICAgICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvVGQ+XG4gICAgICAgICAgICA8VGQgaXNOdW1lcmljPnttZi5jdXJyZW50X3F1YW50aXR5fTwvVGQ+XG4gICAgICAgICAgICA8VGQgaXNOdW1lcmljPnttZi5wcmV2aW91c19xdWFudGl0eX08L1RkPlxuICAgICAgICAgICAgPFRkIGlzTnVtZXJpYz57bWYuY2hhbmdlX3F1YW50aXR5fTwvVGQ+XG4gICAgICAgICAgICA8VGQgaXNOdW1lcmljPntOdW1iZXIobWYuY2hhbmdlX21hcmtldF92YWx1ZSkudG9GaXhlZCgyKX08L1RkPlxuICAgICAgICAgICAgPFRkIGlzTnVtZXJpYz57TnVtYmVyKG1mLmNoYW5nZV9wZXJjZW50YWdlX2F1bSkudG9GaXhlZCgyKX08L1RkPlxuICAgICAgICA8L1RyPlxuICAgICk7XG59O1xuXG5jb25zdCBJbmRleFBhZ2UgPSAoeyBjYXB0aW9uLCBtdXR1YWxfZnVuZHMgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8VGFibGUgdmFyaWFudD1cInNpbXBsZVwiIGNvbG9yU2NoZW1lPVwidGVhbC41MDBcIj5cbiAgICAgICAgICAgICAgICA8VGFibGVDYXB0aW9uPntjYXB0aW9ufTwvVGFibGVDYXB0aW9uPlxuICAgICAgICAgICAgICAgIDxUaGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPFRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRoPlN0b2NrIE5hbWU8L1RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRoPkluZHVzdHJ5PC9UaD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaD5TdGF0ZTwvVGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGggaXNOdW1lcmljPkN1cnJlbnQgUXVhbnRpdHk8L1RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRoIGlzTnVtZXJpYz5QcmV2aW91cyBRdWFudGl0eTwvVGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGggaXNOdW1lcmljPkNoYW5nZSBpbiBRdWFudGl0eTwvVGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGggaXNOdW1lcmljPkNoYW5nZSBpbiBNYXJrZXQgVmFsdWUoaW4gTGFjcyk8L1RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRoIGlzTnVtZXJpYz5DaGFuZ2UgaW4gQVVNICU8L1RoPlxuICAgICAgICAgICAgICAgICAgICA8L1RyPlxuICAgICAgICAgICAgICAgIDwvVGhlYWQ+XG5cbiAgICAgICAgICAgICAgICA8VGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIHttdXR1YWxfZnVuZHMubmV3Lm1hcChJbnZlc3RtZW50KX1cbiAgICAgICAgICAgICAgICAgICAge211dHVhbF9mdW5kcy5hZGRlZC5tYXAoSW52ZXN0bWVudCl9XG4gICAgICAgICAgICAgICAgICAgIHttdXR1YWxfZnVuZHMuaGVsZC5tYXAoSW52ZXN0bWVudCl9XG4gICAgICAgICAgICAgICAgICAgIHttdXR1YWxfZnVuZHMucmVkdWNlZC5tYXAoSW52ZXN0bWVudCl9XG4gICAgICAgICAgICAgICAgICAgIHttdXR1YWxfZnVuZHMuZXhpdC5tYXAoSW52ZXN0bWVudCl9XG4gICAgICAgICAgICAgICAgPC9UYm9keT5cbiAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICAgIGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuICAgIGxldCBtZnMgPSBhd2FpdCBwcmlzbWEubWZfZGlmZi5maW5kTWFueSh7XG4gICAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgICAgIGNoYW5nZV9tYXJrZXRfdmFsdWU6ICdkZXNjJ1xuICAgICAgICB9LFxuICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgZnVuZF9ob3VzZToge1xuICAgICAgICAgICAgICAgIGVxdWFsczogJ1BQTFRWRidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjdXJyZW50X21vbnRoOiB7XG4gICAgICAgICAgICAgICAgZXF1YWxzOiA5XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghbWZzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFbXB0eSBtdXR1YWwgZnVuZHMgZm9yIFFMVEVWRicpO1xuICAgICAgICBtZnMgPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgbXV0dWFsX2Z1bmRzID0ge1xuICAgICAgICBuZXc6IFtdLFxuICAgICAgICBleGl0OiBbXSxcbiAgICAgICAgcmVkdWNlZDogW10sXG4gICAgICAgIGFkZGVkOiBbXSxcbiAgICAgICAgaGVsZDogW11cbiAgICB9O1xuXG4gICAgbWZzLm1hcCgobWYpID0+XG4gICAgICAgIG11dHVhbF9mdW5kc1ttZi5zdGF0ZS50b1N0cmluZygpXS5wdXNoKHtcbiAgICAgICAgICAgIHN0b2NrX25hbWU6IG1mLnN0b2NrX25hbWUudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIGluZHVzdHJ5OiBtZi5pbmR1c3RyeS50b1N0cmluZygpLFxuICAgICAgICAgICAgc3RhdGU6IG1mLnN0YXRlLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBjdXJyZW50X3F1YW50aXR5OiBtZi5jdXJyZW50X3F1YW50aXR5LnRvU3RyaW5nKCksXG4gICAgICAgICAgICBwcmV2aW91c19xdWFudGl0eTogbWYucHJldmlvdXNfcXVhbnRpdHkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIGNoYW5nZV9xdWFudGl0eTogbWYuY2hhbmdlX3F1YW50aXR5LnRvU3RyaW5nKCksXG4gICAgICAgICAgICBjaGFuZ2VfbWFya2V0X3ZhbHVlOiBtZi5jaGFuZ2VfbWFya2V0X3ZhbHVlLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBjaGFuZ2VfcGVyY2VudGFnZV9hdW06IG1mLmNoYW5nZV9wZXJjZW50YWdlX2F1bS50b1N0cmluZygpXG4gICAgICAgIH0pXG4gICAgKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBjYXB0aW9uOiAnUGFyYWcgUGFyaWtoIExvbmcgVGVybSBFcXVpdHkgRnVuZCcsXG4gICAgICAgICAgICBtdXR1YWxfZnVuZHM6IG11dHVhbF9mdW5kc1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

})