webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/chart.js":
/*!*********************************!*\
  !*** ./src/components/chart.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var victory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! victory */ \"./node_modules/victory/es/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/veeresh/opensource/flocks-ui/src/components/chart.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nvar data = [{\n  name: 'Page A',\n  uv: 400,\n  pv: 2400,\n  amt: 2400\n}];\n\nvar Chart = function Chart(_ref) {\n  var portfolio = _ref.portfolio;\n  var data = [];\n  portfolio.map(function (stock) {\n    data.push({\n      x: stock.stock_name,\n      y: stock.percentage_aum\n    });\n  });\n  return __jsx(victory__WEBPACK_IMPORTED_MODULE_1__[\"VictoryChart\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }\n  }, __jsx(victory__WEBPACK_IMPORTED_MODULE_1__[\"VictoryBar\"], {\n    horizontal: true,\n    style: {\n      data: {\n        fill: 'black'\n      }\n    },\n    data: data,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 17\n    }\n  }));\n};\n\n_c = Chart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chart);\n\nvar _c;\n\n$RefreshReg$(_c, \"Chart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2hhcnQuanM/YjRjNyJdLCJuYW1lcyI6WyJkYXRhIiwibmFtZSIsInV2IiwicHYiLCJhbXQiLCJDaGFydCIsInBvcnRmb2xpbyIsIm1hcCIsInN0b2NrIiwicHVzaCIsIngiLCJzdG9ja19uYW1lIiwieSIsInBlcmNlbnRhZ2VfYXVtIiwiZmlsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxJQUFJLEdBQUcsQ0FBQztBQUFFQyxNQUFJLEVBQUUsUUFBUjtBQUFrQkMsSUFBRSxFQUFFLEdBQXRCO0FBQTJCQyxJQUFFLEVBQUUsSUFBL0I7QUFBcUNDLEtBQUcsRUFBRTtBQUExQyxDQUFELENBQWI7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBaUI7QUFBQSxNQUFmQyxTQUFlLFFBQWZBLFNBQWU7QUFDM0IsTUFBTU4sSUFBSSxHQUFHLEVBQWI7QUFFQU0sV0FBUyxDQUFDQyxHQUFWLENBQWMsVUFBQ0MsS0FBRCxFQUFXO0FBQ3JCUixRQUFJLENBQUNTLElBQUwsQ0FBVTtBQUNOQyxPQUFDLEVBQUVGLEtBQUssQ0FBQ0csVUFESDtBQUVOQyxPQUFDLEVBQUVKLEtBQUssQ0FBQ0s7QUFGSCxLQUFWO0FBSUgsR0FMRDtBQU9BLFNBQ1EsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0ksTUFBQyxrREFBRDtBQUNJLGNBQVUsTUFEZDtBQUVJLFNBQUssRUFBRTtBQUNIYixVQUFJLEVBQUU7QUFBRWMsWUFBSSxFQUFFO0FBQVI7QUFESCxLQUZYO0FBS0ksUUFBSSxFQUFFZCxJQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixDQURSO0FBYUgsQ0F2QkQ7O0tBQU1LLEs7QUF5QlNBLG9FQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvY2hhcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWaWN0b3J5Q2hhcnQsIFZpY3RvcnlCYXIsIFZpY3RvcnlUaGVtZSB9IGZyb20gJ3ZpY3RvcnknO1xuXG5jb25zdCBkYXRhID0gW3sgbmFtZTogJ1BhZ2UgQScsIHV2OiA0MDAsIHB2OiAyNDAwLCBhbXQ6IDI0MDAgfV07XG5cbmNvbnN0IENoYXJ0ID0gKHtwb3J0Zm9saW99KSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IFtdO1xuXG4gICAgcG9ydGZvbGlvLm1hcCgoc3RvY2spID0+IHtcbiAgICAgICAgZGF0YS5wdXNoKHtcbiAgICAgICAgICAgIHg6IHN0b2NrLnN0b2NrX25hbWUsXG4gICAgICAgICAgICB5OiBzdG9jay5wZXJjZW50YWdlX2F1bVxuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFZpY3RvcnlDaGFydFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxWaWN0b3J5QmFyXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgZmlsbDogJ2JsYWNrJyB9XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvVmljdG9yeUNoYXJ0PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGFydDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/chart.js\n");

/***/ })

})