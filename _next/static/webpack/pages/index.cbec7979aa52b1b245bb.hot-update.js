webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/mailist.js":
/*!***********************************!*\
  !*** ./src/components/mailist.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\nvar _jsxFileName = \"/home/veeresh/opensource/flocks-ui/src/components/mailist.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Mailist() {\n  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    justify: \"left\",\n    align: \"left\",\n    direction: \"column\",\n    className: \"border border-blue-200 rounded p-6 my-4 w-3/4 dark:border-blue-800 bg-blue-50 dark:bg-blue-900\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    fontSize: \"sm\",\n    textColor: \"gray.500\",\n    ml: 6,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }\n  }, \"Subscribe to mailing list:\"), __jsx(\"form\", {\n    action: \"https://buttondown.email/api/emails/embed-subscribe/vireshas\",\n    method: \"post\",\n    target: \"popupwindow\",\n    onSubmit: \"window.open('https://buttondown.email/vireshas', 'popupwindow')\",\n    className: \"p-2 ml-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }\n  }, __jsx(\"input\", {\n    className: \"px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100\",\n    type: \"email\",\n    placeholder: \"Enter your email\",\n    name: \"email\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 17\n    }\n  }), __jsx(\"input\", {\n    type: \"hidden\",\n    value: \"1\",\n    className: \"embed\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 17\n    }\n  }), __jsx(\"input\", {\n    className: \"flex items-center justify-center absolute right-1 top-1 px-4 font-bold h-8 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28\",\n    type: \"submit\",\n    value: \"Subscribe\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 17\n    }\n  })));\n}\n\n_c = Mailist;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Mailist);\n\nvar _c;\n\n$RefreshReg$(_c, \"Mailist\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbWFpbGlzdC5qcz9iYWViIl0sIm5hbWVzIjpbIk1haWxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFXQSxTQUFTQSxPQUFULEdBQW1CO0FBQ2YsU0FDSSxNQUFDLHFEQUFEO0FBQU0sV0FBTyxFQUFDLE1BQWQ7QUFBcUIsU0FBSyxFQUFDLE1BQTNCO0FBQWtDLGFBQVMsRUFBQyxRQUE1QztBQUFxRCxhQUFTLEVBQUMsZ0dBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHFEQUFEO0FBQU0sWUFBUSxFQUFDLElBQWY7QUFBb0IsYUFBUyxFQUFDLFVBQTlCO0FBQXlDLE1BQUUsRUFBRSxDQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURKLEVBS0k7QUFDSSxVQUFNLEVBQUMsOERBRFg7QUFFSSxVQUFNLEVBQUMsTUFGWDtBQUdJLFVBQU0sRUFBQyxhQUhYO0FBSUksWUFBUSxFQUFDLGlFQUpiO0FBS0ksYUFBUyxFQUFDLFVBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9JO0FBQ0ksYUFBUyxFQUFDLDZKQURkO0FBRUksUUFBSSxFQUFDLE9BRlQ7QUFHSSxlQUFXLEVBQUMsa0JBSGhCO0FBSUksUUFBSSxFQUFDLE9BSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBKLEVBY0k7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFxQixTQUFLLEVBQUMsR0FBM0I7QUFBK0IsYUFBUyxFQUFDLE9BQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkSixFQWdCSTtBQUNJLGFBQVMsRUFBQyx1SkFEZDtBQUVJLFFBQUksRUFBQyxRQUZUO0FBR0ksU0FBSyxFQUFDLFdBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCSixDQUxKLENBREo7QUErQkg7O0tBaENRQSxPO0FBa0NNQSxzRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL21haWxpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEZvcm1Db250cm9sLFxuICAgIEZvcm1MYWJlbCxcbiAgICBGb3JtRXJyb3JNZXNzYWdlLFxuICAgIEZvcm1IZWxwZXJUZXh0LFxuICAgIEJveCxcbiAgICBGbGV4LFxuICAgIFRleHQsXG4gICAgU3RhY2tcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5cbmZ1bmN0aW9uIE1haWxpc3QoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZsZXgganVzdGlmeT1cImxlZnRcIiBhbGlnbj1cImxlZnRcIiBkaXJlY3Rpb249XCJjb2x1bW5cIiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWJsdWUtMjAwIHJvdW5kZWQgcC02IG15LTQgdy0zLzQgZGFyazpib3JkZXItYmx1ZS04MDAgYmctYmx1ZS01MCBkYXJrOmJnLWJsdWUtOTAwXCI+XG4gICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cInNtXCIgdGV4dENvbG9yPVwiZ3JheS41MDBcIiBtbD17Nn0+XG4gICAgICAgICAgICAgICAgU3Vic2NyaWJlIHRvIG1haWxpbmcgbGlzdDpcbiAgICAgICAgICAgIDwvVGV4dD5cblxuICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICBhY3Rpb249XCJodHRwczovL2J1dHRvbmRvd24uZW1haWwvYXBpL2VtYWlscy9lbWJlZC1zdWJzY3JpYmUvdmlyZXNoYXNcIlxuICAgICAgICAgICAgICAgIG1ldGhvZD1cInBvc3RcIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cInBvcHVwd2luZG93XCJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD1cIndpbmRvdy5vcGVuKCdodHRwczovL2J1dHRvbmRvd24uZW1haWwvdmlyZXNoYXMnLCAncG9wdXB3aW5kb3cnKVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIG1sLTRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgbXQtMSBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgYmctd2hpdGUgZGFyazpiZy1ncmF5LTgwMCB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC1ncmF5LTEwMFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCIxXCIgY2xhc3NOYW1lPVwiZW1iZWRcIiAvPlxuXG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGFic29sdXRlIHJpZ2h0LTEgdG9wLTEgcHgtNCBmb250LWJvbGQgaC04IGJnLWdyYXktMTAwIGRhcms6YmctZ3JheS03MDAgdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS0xMDAgcm91bmRlZCB3LTI4XCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiU3Vic2NyaWJlXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgIDwvRmxleD5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWlsaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/mailist.js\n");

/***/ })

})