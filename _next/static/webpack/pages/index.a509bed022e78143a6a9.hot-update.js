webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/mailist.js":
/*!***********************************!*\
  !*** ./src/components/mailist.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\nvar _jsxFileName = \"/home/veeresh/opensource/flocks-ui/src/components/mailist.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Mailist() {\n  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    className: \"ml-6\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }\n  }, ''), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    className: \"border bg-gray-200 border-blue-200 rounded p-10 w-2/3 bg-blue-50 mb-5\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    fontSize: \"sm\",\n    textColor: \"gray.500\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 17\n    }\n  }, \"Subscribe to mailing list:\"), __jsx(\"form\", {\n    action: \"https://buttondown.email/api/emails/embed-subscribe/vireshas\",\n    method: \"post\",\n    target: \"popupwindow\",\n    onSubmit: \"window.open('https://buttondown.email/vireshas', 'popupwindow')\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 17\n    }\n  }, __jsx(\"input\", {\n    className: \"px-4 py-2 focus:ring-blue-500 focus:border-blue-500 block w-3/5 border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900\",\n    type: \"email\",\n    placeholder: \"Enter your email\",\n    name: \"email\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 21\n    }\n  }), __jsx(\"input\", {\n    type: \"hidden\",\n    value: \"1\",\n    className: \"embed\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 21\n    }\n  }), __jsx(\"input\", {\n    className: \"flex items-center bg-teal-300 hover:bg-teal-400 justify-center absolute right-1 top-1 px-4 mb-4 font-bold h-8 bg-gray-100 text-white rounded w-2/8\",\n    type: \"submit\",\n    value: \"Subscribe\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 21\n    }\n  }))));\n}\n\n_c = Mailist;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Mailist);\n\nvar _c;\n\n$RefreshReg$(_c, \"Mailist\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbWFpbGlzdC5qcz9iYWViIl0sIm5hbWVzIjpbIk1haWxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFXQSxTQUFTQSxPQUFULEdBQW1CO0FBQ2YsU0FDSSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG9EQUFEO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1QixFQUF2QixDQURKLEVBRUksTUFBQyxvREFBRDtBQUFLLGFBQVMsRUFBQyx1RUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxxREFBRDtBQUFNLFlBQVEsRUFBQyxJQUFmO0FBQW9CLGFBQVMsRUFBQyxVQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURKLEVBS0k7QUFDSSxVQUFNLEVBQUMsOERBRFg7QUFFSSxVQUFNLEVBQUMsTUFGWDtBQUdJLFVBQU0sRUFBQyxhQUhYO0FBSUksWUFBUSxFQUFDLGlFQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNSTtBQUNJLGFBQVMsRUFBQyxvSUFEZDtBQUVJLFFBQUksRUFBQyxPQUZUO0FBR0ksZUFBVyxFQUFDLGtCQUhoQjtBQUlJLFFBQUksRUFBQyxPQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOSixFQWFJO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsU0FBSyxFQUFDLEdBQTNCO0FBQStCLGFBQVMsRUFBQyxPQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkosRUFlSTtBQUNJLGFBQVMsRUFBQyxvSkFEZDtBQUVJLFFBQUksRUFBQyxRQUZUO0FBR0ksU0FBSyxFQUFDLFdBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWZKLENBTEosQ0FGSixDQURKO0FBZ0NIOztLQWpDUUEsTztBQW1DTUEsc0VBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tYWlsaXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBGb3JtQ29udHJvbCxcbiAgICBGb3JtTGFiZWwsXG4gICAgRm9ybUVycm9yTWVzc2FnZSxcbiAgICBGb3JtSGVscGVyVGV4dCxcbiAgICBCb3gsXG4gICAgRmxleCxcbiAgICBUZXh0LFxuICAgIFN0YWNrXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuXG5mdW5jdGlvbiBNYWlsaXN0KCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxGbGV4PlxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9XCJtbC02XCI+eycnfTwvQm94PlxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9XCJib3JkZXIgYmctZ3JheS0yMDAgYm9yZGVyLWJsdWUtMjAwIHJvdW5kZWQgcC0xMCB3LTIvMyBiZy1ibHVlLTUwIG1iLTVcIj5cbiAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cInNtXCIgdGV4dENvbG9yPVwiZ3JheS41MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgU3Vic2NyaWJlIHRvIG1haWxpbmcgbGlzdDpcbiAgICAgICAgICAgICAgICA8L1RleHQ+XG5cbiAgICAgICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICAgICAgICBhY3Rpb249XCJodHRwczovL2J1dHRvbmRvd24uZW1haWwvYXBpL2VtYWlscy9lbWJlZC1zdWJzY3JpYmUvdmlyZXNoYXNcIlxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q9XCJwb3N0XCJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwicG9wdXB3aW5kb3dcIlxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD1cIndpbmRvdy5vcGVuKCdodHRwczovL2J1dHRvbmRvd24uZW1haWwvdmlyZXNoYXMnLCAncG9wdXB3aW5kb3cnKVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LTMvNSBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBiZy13aGl0ZSBkYXJrOmJnLWdyYXktODAwIHRleHQtZ3JheS05MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCIxXCIgY2xhc3NOYW1lPVwiZW1iZWRcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgYmctdGVhbC0zMDAgaG92ZXI6YmctdGVhbC00MDAganVzdGlmeS1jZW50ZXIgYWJzb2x1dGUgcmlnaHQtMSB0b3AtMSBweC00IG1iLTQgZm9udC1ib2xkIGgtOCBiZy1ncmF5LTEwMCB0ZXh0LXdoaXRlIHJvdW5kZWQgdy0yLzhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlN1YnNjcmliZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvRmxleD5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWlsaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/mailist.js\n");

/***/ })

})