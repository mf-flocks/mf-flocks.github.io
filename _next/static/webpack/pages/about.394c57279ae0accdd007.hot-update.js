webpackHotUpdate_N_E("pages/about",{

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\nvar _jsxFileName = \"/home/veeresh/opensource/flocks-ui/src/components/header.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction Header() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isExpanded = _useState[0],\n      toggleExpansion = _useState[1];\n\n  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n    as: \"nav\",\n    align: \"center\",\n    justify: \"space-between\",\n    wrap: \"wrap\",\n    w: \"4xl\",\n    mb: 2,\n    p: 4,\n    bgColor: \"teal.400\",\n    color: ['white', 'white', 'primary.700', 'primary.700'],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n    className: \"flex items-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    className: \"text-xl font-bold text-white\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 21\n    }\n  }, \"FilterStocks\"))), __jsx(\"ul\", {\n    className: \"\".concat(isExpanded ? \"block\" : \"hidden\", \" md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto\"),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }, [{\n    title: 'Home',\n    route: '/'\n  }].map(function (navigationItem) {\n    return __jsx(\"li\", {\n      className: \"mt-3 md:mt-0 md:ml-6\",\n      key: navigationItem.title,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 21\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: navigationItem.route,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 25\n      }\n    }, __jsx(\"a\", {\n      className: \"block text-white\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 29\n      }\n    }, navigationItem.title)));\n  })));\n}\n\n_s(Header, \"REx9R4eCrMQjSKSru0gbPErym5k=\");\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzPzJkYjQiXSwibmFtZXMiOlsiSGVhZGVyIiwidXNlU3RhdGUiLCJpc0V4cGFuZGVkIiwidG9nZ2xlRXhwYW5zaW9uIiwidGl0bGUiLCJyb3V0ZSIsIm1hcCIsIm5hdmlnYXRpb25JdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ3dCQyxzREFBUSxDQUFDLEtBQUQsQ0FEaEM7QUFBQSxNQUNQQyxVQURPO0FBQUEsTUFDS0MsZUFETDs7QUFHZCxTQUNJLE1BQUMscURBQUQ7QUFDSSxNQUFFLEVBQUMsS0FEUDtBQUVJLFNBQUssRUFBQyxRQUZWO0FBR0ksV0FBTyxFQUFDLGVBSFo7QUFJSSxRQUFJLEVBQUMsTUFKVDtBQUtJLEtBQUMsRUFBQyxLQUxOO0FBTUksTUFBRSxFQUFFLENBTlI7QUFPSSxLQUFDLEVBQUUsQ0FQUDtBQVFJLFdBQU8sRUFBQyxVQVJaO0FBU0ksU0FBSyxFQUFFLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsYUFBbkIsRUFBa0MsYUFBbEMsQ0FUWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBV0ksTUFBQyxxREFBRDtBQUFNLGFBQVMsRUFBQyxtQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUMsOEJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixDQURKLENBWEosRUFpQkk7QUFDSSxhQUFTLFlBQ0xELFVBQVUscUJBREwsNkZBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtLLENBQ0c7QUFBRUUsU0FBSyxFQUFFLE1BQVQ7QUFBaUJDLFNBQUssRUFBRTtBQUF4QixHQURILEVBRUNDLEdBRkQsQ0FFSyxVQUFDQyxjQUFEO0FBQUEsV0FDRjtBQUNJLGVBQVMsRUFBQyxzQkFEZDtBQUVJLFNBQUcsRUFBRUEsY0FBYyxDQUFDSCxLQUZ4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSUksTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRUcsY0FBYyxDQUFDRixLQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBRyxlQUFTLEVBQUMsa0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNLRSxjQUFjLENBQUNILEtBRHBCLENBREosQ0FKSixDQURFO0FBQUEsR0FGTCxDQUxMLENBakJKLENBREo7QUF3Q0g7O0dBM0NRSixNOztLQUFBQSxNO0FBNkNNQSxxRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2hlYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQm94LCBGbGV4IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5cbmZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgICBjb25zdCBbaXNFeHBhbmRlZCwgdG9nZ2xlRXhwYW5zaW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxGbGV4XG4gICAgICAgICAgICBhcz1cIm5hdlwiXG4gICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICB3cmFwPVwid3JhcFwiXG4gICAgICAgICAgICB3PVwiNHhsXCJcbiAgICAgICAgICAgIG1iPXsyfVxuICAgICAgICAgICAgcD17NH1cbiAgICAgICAgICAgIGJnQ29sb3I9XCJ0ZWFsLjQwMFwiXG4gICAgICAgICAgICBjb2xvcj17Wyd3aGl0ZScsICd3aGl0ZScsICdwcmltYXJ5LjcwMCcsICdwcmltYXJ5LjcwMCddfVxuICAgICAgICA+XG4gICAgICAgICAgICA8RmxleCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtd2hpdGVcIj5GaWx0ZXJTdG9ja3M8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9GbGV4PlxuXG4gICAgICAgICAgICA8dWxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgICAgICAgICBpc0V4cGFuZGVkID8gYGJsb2NrYCA6IGBoaWRkZW5gXG4gICAgICAgICAgICAgICAgfSBtZDpmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IG1kOml0ZW1zLWNlbnRlciBtZDpqdXN0aWZ5LWNlbnRlciB0ZXh0LXNtIHctZnVsbCBtZDp3LWF1dG9gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgICAgICAgIHsgdGl0bGU6ICdIb21lJywgcm91dGU6ICcvJyB9LFxuICAgICAgICAgICAgICAgIF0ubWFwKChuYXZpZ2F0aW9uSXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTMgbWQ6bXQtMCBtZDptbC02XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bmF2aWdhdGlvbkl0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e25hdmlnYXRpb25JdGVtLnJvdXRlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYXZpZ2F0aW9uSXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L0ZsZXg+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/header.js\n");

/***/ })

})