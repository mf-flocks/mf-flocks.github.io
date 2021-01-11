webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/mailist.js":
/*!***********************************!*\
  !*** ./src/components/mailist.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\nvar _jsxFileName = \"/home/veeresh/opensource/flocks-ui/src/components/mailist.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Mailist() {\n  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n    border: \"1px\",\n    spacing: 5,\n    minW: \"100%\",\n    justify: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, __jsx(\"form\", {\n    action: \"https://buttondown.email/api/emails/embed-subscribe/vireshas\",\n    method: \"post\",\n    target: \"popupwindow\",\n    onsubmit: \"window.open('https://buttondown.email/vireshas', 'popupwindow')\",\n    \"class\": \"form\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 17\n    }\n  }, __jsx(\"label\", {\n    \"for\": \"bd-email\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 21\n    }\n  }, \"Enter your email\")), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 17\n    }\n  }, __jsx(\"input\", {\n    \"class\": \"border py-2 px-3 text-grey-darkest w-auto\",\n    type: \"email\",\n    name: \"email\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 21\n    }\n  })), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 17\n    }\n  }, __jsx(\"input\", {\n    type: \"hidden\",\n    value: \"1\",\n    className: \"embed\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 21\n    }\n  })), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 17\n    }\n  }, __jsx(\"input\", {\n    type: \"submit\",\n    value: \"Subscribe\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 21\n    }\n  }))));\n}\n\n_c = Mailist;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Mailist);\n\nvar _c;\n\n$RefreshReg$(_c, \"Mailist\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbWFpbGlzdC5qcz9iYWViIl0sIm5hbWVzIjpbIk1haWxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFXQSxTQUFTQSxPQUFULEdBQW1CO0FBQ2YsU0FDSSxNQUFDLHNEQUFEO0FBQU8sVUFBTSxFQUFDLEtBQWQ7QUFBb0IsV0FBTyxFQUFFLENBQTdCO0FBQWdDLFFBQUksRUFBQyxNQUFyQztBQUE0QyxXQUFPLEVBQUMsUUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQ0ksVUFBTSxFQUFDLDhEQURYO0FBRUksVUFBTSxFQUFDLE1BRlg7QUFHSSxVQUFNLEVBQUMsYUFIWDtBQUlJLFlBQVEsRUFBQyxpRUFKYjtBQUtJLGFBQU0sTUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0ksTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTyxXQUFJLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESixDQVBKLEVBV0ksTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTyxhQUFNLDJDQUFiO0FBQXlELFFBQUksRUFBQyxPQUE5RDtBQUFzRSxRQUFJLEVBQUMsT0FBM0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBWEosRUFlSSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQXFCLFNBQUssRUFBQyxHQUEzQjtBQUErQixhQUFTLEVBQUMsT0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBZkosRUFtQkksTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFxQixTQUFLLEVBQUMsV0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBbkJKLENBREosQ0FESjtBQTJCSDs7S0E1QlFBLE87QUE4Qk1BLHNFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvbWFpbGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgRm9ybUNvbnRyb2wsXG4gICAgRm9ybUxhYmVsLFxuICAgIEZvcm1FcnJvck1lc3NhZ2UsXG4gICAgRm9ybUhlbHBlclRleHQsXG4gICAgQm94LFxuICAgIEZsZXgsXG4gICAgU3RhY2tcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5cblxuZnVuY3Rpb24gTWFpbGlzdCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8U3RhY2sgYm9yZGVyPVwiMXB4XCIgc3BhY2luZz17NX0gbWluVz1cIjEwMCVcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICAgIGFjdGlvbj1cImh0dHBzOi8vYnV0dG9uZG93bi5lbWFpbC9hcGkvZW1haWxzL2VtYmVkLXN1YnNjcmliZS92aXJlc2hhc1wiXG4gICAgICAgICAgICAgICAgbWV0aG9kPVwicG9zdFwiXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwicG9wdXB3aW5kb3dcIlxuICAgICAgICAgICAgICAgIG9uc3VibWl0PVwid2luZG93Lm9wZW4oJ2h0dHBzOi8vYnV0dG9uZG93bi5lbWFpbC92aXJlc2hhcycsICdwb3B1cHdpbmRvdycpXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJiZC1lbWFpbFwiPkVudGVyIHlvdXIgZW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiYm9yZGVyIHB5LTIgcHgtMyB0ZXh0LWdyZXktZGFya2VzdCB3LWF1dG9cIiB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiAvPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cIjFcIiBjbGFzc05hbWU9XCJlbWJlZFwiIC8+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3Vic2NyaWJlXCIgLz5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9TdGFjaz5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWlsaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/mailist.js\n");

/***/ })

})