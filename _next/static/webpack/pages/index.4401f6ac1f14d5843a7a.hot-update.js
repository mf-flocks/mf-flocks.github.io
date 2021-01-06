webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\nvar _jsxFileName = \"/home/veeresh/opensource/flocks-ui/src/components/header.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction Header() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isExpanded = _useState[0],\n      toggleExpansion = _useState[1];\n\n  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n    as: \"nav\",\n    align: \"center\",\n    justify: \"space-between\",\n    wrap: \"wrap\",\n    w: \"100%\",\n    mb: 2,\n    p: 4,\n    bgColor: \"teal.400\",\n    color: ['white', 'white', 'primary.700', 'primary.700'],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n    className: \"flex items-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    className: \"text-xl font-bold text-white\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 21\n    }\n  }, \"FilterStocks\"))), __jsx(\"ul\", {\n    className: \"\".concat(isExpanded ? \"block\" : \"hidden\", \" md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto\"),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }, [{\n    title: 'Home',\n    route: '/'\n  }].map(function (navigationItem) {\n    return __jsx(\"li\", {\n      className: \"mt-3 md:mt-0 md:ml-6\",\n      key: navigationItem.title,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 21\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: navigationItem.route,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 25\n      }\n    }, __jsx(\"a\", {\n      className: \"block text-white\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 29\n      }\n    }, navigationItem.title)));\n  })));\n}\n\n_s(Header, \"REx9R4eCrMQjSKSru0gbPErym5k=\");\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzPzJkYjQiXSwibmFtZXMiOlsiSGVhZGVyIiwidXNlU3RhdGUiLCJpc0V4cGFuZGVkIiwidG9nZ2xlRXhwYW5zaW9uIiwidGl0bGUiLCJyb3V0ZSIsIm1hcCIsIm5hdmlnYXRpb25JdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ3dCQyxzREFBUSxDQUFDLEtBQUQsQ0FEaEM7QUFBQSxNQUNQQyxVQURPO0FBQUEsTUFDS0MsZUFETDs7QUFHZCxTQUNJLE1BQUMscURBQUQ7QUFDSSxNQUFFLEVBQUMsS0FEUDtBQUVJLFNBQUssRUFBQyxRQUZWO0FBR0ksV0FBTyxFQUFDLGVBSFo7QUFJSSxRQUFJLEVBQUMsTUFKVDtBQUtJLEtBQUMsRUFBQyxNQUxOO0FBTUksTUFBRSxFQUFFLENBTlI7QUFPSSxLQUFDLEVBQUUsQ0FQUDtBQVFJLFdBQU8sRUFBQyxVQVJaO0FBU0ksU0FBSyxFQUFFLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsYUFBbkIsRUFBa0MsYUFBbEMsQ0FUWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBV0ksTUFBQyxxREFBRDtBQUFNLGFBQVMsRUFBQyxtQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUMsOEJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixDQURKLENBWEosRUFpQkk7QUFDSSxhQUFTLFlBQ0xELFVBQVUscUJBREwsNkZBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtLLENBQ0c7QUFBRUUsU0FBSyxFQUFFLE1BQVQ7QUFBaUJDLFNBQUssRUFBRTtBQUF4QixHQURILEVBRUNDLEdBRkQsQ0FFSyxVQUFDQyxjQUFEO0FBQUEsV0FDRjtBQUNJLGVBQVMsRUFBQyxzQkFEZDtBQUVJLFNBQUcsRUFBRUEsY0FBYyxDQUFDSCxLQUZ4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSUksTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRUcsY0FBYyxDQUFDRixLQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBRyxlQUFTLEVBQUMsa0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNLRSxjQUFjLENBQUNILEtBRHBCLENBREosQ0FKSixDQURFO0FBQUEsR0FGTCxDQUxMLENBakJKLENBREo7QUF3Q0g7O0dBM0NRSixNOztLQUFBQSxNO0FBNkNNQSxxRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2hlYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQm94LCBGbGV4IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5cbmZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgICBjb25zdCBbaXNFeHBhbmRlZCwgdG9nZ2xlRXhwYW5zaW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxGbGV4XG4gICAgICAgICAgICBhcz1cIm5hdlwiXG4gICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICB3cmFwPVwid3JhcFwiXG4gICAgICAgICAgICB3PVwiMTAwJVwiXG4gICAgICAgICAgICBtYj17Mn1cbiAgICAgICAgICAgIHA9ezR9XG4gICAgICAgICAgICBiZ0NvbG9yPVwidGVhbC40MDBcIlxuICAgICAgICAgICAgY29sb3I9e1snd2hpdGUnLCAnd2hpdGUnLCAncHJpbWFyeS43MDAnLCAncHJpbWFyeS43MDAnXX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPEZsZXggY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+RmlsdGVyU3RvY2tzPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvRmxleD5cblxuICAgICAgICAgICAgPHVsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgICAgICAgaXNFeHBhbmRlZCA/IGBibG9ja2AgOiBgaGlkZGVuYFxuICAgICAgICAgICAgICAgIH0gbWQ6ZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBtZDppdGVtcy1jZW50ZXIgbWQ6anVzdGlmeS1jZW50ZXIgdGV4dC1zbSB3LWZ1bGwgbWQ6dy1hdXRvYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7W1xuICAgICAgICAgICAgICAgICAgICB7IHRpdGxlOiAnSG9tZScsIHJvdXRlOiAnLycgfSxcbiAgICAgICAgICAgICAgICBdLm1hcCgobmF2aWdhdGlvbkl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0zIG1kOm10LTAgbWQ6bWwtNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e25hdmlnYXRpb25JdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtuYXZpZ2F0aW9uSXRlbS5yb3V0ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmF2aWdhdGlvbkl0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9GbGV4PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/header.js\n");

/***/ })

})