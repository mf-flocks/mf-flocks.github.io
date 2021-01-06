webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ \"./src/components/layout.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/veeresh/opensource/flocks-ui/src/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar LiComp = function LiComp(_ref) {\n  var path = _ref.path;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Td\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/mutual_funds/\".concat(path[0]),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 21\n    }\n  }, path[1]))), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Td\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/mutual_funds/\".concat(path[0]),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 21\n    }\n  }, path[0]))));\n};\n\n_c = LiComp;\n\nvar IndexPage = function IndexPage(_ref2) {\n  var paths = _ref2.paths;\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    direction: \"column\",\n    align: \"center\",\n    justify: \"center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n    pt: 10,\n    spacing: 3,\n    maxW: \"6xl\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 17\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n    fontSize: \"xl\",\n    textColor: \"gray.600\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 21\n    }\n  }, \"We track the best of mutual funds and filter out the stocks that they are adding month on month.\")), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Divider\"], {\n    width: 2,\n    bgColor: \"gray\",\n    mb: 2,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 17\n    }\n  }), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    maxW: \"2xl\",\n    mt: 5,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 17\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    fontSize: \"md\",\n    textColor: \"gray.500\",\n    mb: 4,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 21\n    }\n  }, \"The following are the list of mutual funds that we track at the moment. Click on them to see what they are upto.\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Table\"], {\n    colorScheme: \"teal\",\n    textColor: \"gray.600\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 21\n    }\n  }, paths.map(function (path) {\n    return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Tr\"], {\n      key: path,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 29\n      }\n    }, __jsx(LiComp, {\n      key: path,\n      path: path,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 33\n      }\n    }));\n  })))));\n};\n\n_c2 = IndexPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"LiComp\");\n$RefreshReg$(_c2, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQ1NzAiXSwibmFtZXMiOlsiTGlDb21wIiwicGF0aCIsIkluZGV4UGFnZSIsInBhdGhzIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFxQkE7QUFJQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3pCLFNBQ0ksbUVBQ0ksTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksMEJBQW1CQSxJQUFJLENBQUMsQ0FBRCxDQUF2QixDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlBLElBQUksQ0FBQyxDQUFELENBQVIsQ0FESixDQURKLENBREosRUFPSSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSwwQkFBbUJBLElBQUksQ0FBQyxDQUFELENBQXZCLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUEsSUFBSSxDQUFDLENBQUQsQ0FBUixDQURKLENBREosQ0FQSixDQURKO0FBZUgsQ0FoQkQ7O0tBQU1ELE07O0FBa0JOLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLFFBQWU7QUFBQSxNQUFaQyxLQUFZLFNBQVpBLEtBQVk7QUFDN0IsU0FDSSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHFEQUFEO0FBQU0sYUFBUyxFQUFDLFFBQWhCO0FBQXlCLFNBQUssRUFBQyxRQUEvQjtBQUF3QyxXQUFPLEVBQUMsUUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0RBQUQ7QUFBTyxNQUFFLEVBQUUsRUFBWDtBQUFlLFdBQU8sRUFBRSxDQUF4QjtBQUEyQixRQUFJLEVBQUMsS0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsd0RBQUQ7QUFBUyxZQUFRLEVBQUMsSUFBbEI7QUFBdUIsYUFBUyxFQUFDLFVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0dBREosQ0FESixFQVFJLE1BQUMsd0RBQUQ7QUFBUyxTQUFLLEVBQUUsQ0FBaEI7QUFBbUIsV0FBTyxFQUFDLE1BQTNCO0FBQWtDLE1BQUUsRUFBRSxDQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkosRUFVSSxNQUFDLG9EQUFEO0FBQUssUUFBSSxFQUFDLEtBQVY7QUFBZ0IsTUFBRSxFQUFFLENBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHFEQUFEO0FBQU0sWUFBUSxFQUFDLElBQWY7QUFBb0IsYUFBUyxFQUFDLFVBQTlCO0FBQXlDLE1BQUUsRUFBRSxDQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdIQURKLEVBTUksTUFBQyxzREFBRDtBQUFPLGVBQVcsRUFBQyxNQUFuQjtBQUEwQixhQUFTLEVBQUMsVUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLQSxLQUFLLENBQUNDLEdBQU4sQ0FBVSxVQUFDSCxJQUFEO0FBQUEsV0FDUCxNQUFDLG1EQUFEO0FBQUksU0FBRyxFQUFFQSxJQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLE1BQUQ7QUFBUSxTQUFHLEVBQUVBLElBQWI7QUFBbUIsVUFBSSxFQUFFQSxJQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FETztBQUFBLEdBQVYsQ0FETCxDQU5KLENBVkosQ0FESixDQURKO0FBNkJILENBOUJEOztNQUFNQyxTOztBQTREU0Esd0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIFRhYnMsXG4gICAgVGFiTGlzdCxcbiAgICBUZXh0LFxuICAgIFRhYixcbiAgICBUYWJQYW5lbCxcbiAgICBUYWJQYW5lbHMsXG4gICAgU3RhY2ssXG4gICAgRGl2aWRlcixcbiAgICBIZWFkaW5nLFxuICAgIEJveCxcbiAgICBGbGV4LFxuICAgIFRhYmxlLFxuICAgIFRoZWFkLFxuICAgIFRib2R5LFxuICAgIEJhZGdlLFxuICAgIFRyLFxuICAgIFRoLFxuICAgIFRkLFxuICAgIFRhYmxlQ2FwdGlvblxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cblxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XG5cbmNvbnN0IExpQ29tcCA9ICh7IHBhdGggfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8VGQ+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9tdXR1YWxfZnVuZHMvJHtwYXRoWzBdfWB9PlxuICAgICAgICAgICAgICAgICAgICA8YT57cGF0aFsxXX08L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9UZD5cblxuICAgICAgICAgICAgPFRkPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbXV0dWFsX2Z1bmRzLyR7cGF0aFswXX1gfT5cbiAgICAgICAgICAgICAgICAgICAgPGE+e3BhdGhbMF19PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvVGQ+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5jb25zdCBJbmRleFBhZ2UgPSAoeyBwYXRocyB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiIGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxTdGFjayBwdD17MTB9IHNwYWNpbmc9ezN9IG1heFc9XCI2eGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgZm9udFNpemU9XCJ4bFwiIHRleHRDb2xvcj1cImdyYXkuNjAwXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgV2UgdHJhY2sgdGhlIGJlc3Qgb2YgbXV0dWFsIGZ1bmRzIGFuZCBmaWx0ZXIgb3V0IHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvY2tzIHRoYXQgdGhleSBhcmUgYWRkaW5nIG1vbnRoIG9uIG1vbnRoLlxuICAgICAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIHdpZHRoPXsyfSBiZ0NvbG9yPVwiZ3JheVwiIG1iPXsyfS8+XG5cbiAgICAgICAgICAgICAgICA8Qm94IG1heFc9XCIyeGxcIiBtdD17NX0+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwibWRcIiB0ZXh0Q29sb3I9XCJncmF5LjUwMFwiIG1iPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBmb2xsb3dpbmcgYXJlIHRoZSBsaXN0IG9mIG11dHVhbCBmdW5kcyB0aGF0IHdlIHRyYWNrIGF0IHRoZSBtb21lbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICBDbGljayBvbiB0aGVtIHRvIHNlZSB3aGF0IHRoZXkgYXJlIHVwdG8uXG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cblxuICAgICAgICAgICAgICAgICAgICA8VGFibGUgY29sb3JTY2hlbWU9XCJ0ZWFsXCIgdGV4dENvbG9yPVwiZ3JheS42MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwYXRocy5tYXAoKHBhdGgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHIga2V5PXtwYXRofT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpQ29tcCBrZXk9e3BhdGh9IHBhdGg9e3BhdGh9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ucj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0xheW91dD5cbiAgICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgICBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbiAgICBsZXQgZnVuZHMgPSBhd2FpdCBwcmlzbWEubWZfZGlmZi5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICBjdXJyZW50X21vbnRoOiB7XG4gICAgICAgICAgICAgICAgZXF1YWxzOiAxMVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgIGZ1bmRfaG91c2U6IHRydWUsXG4gICAgICAgICAgICBmdW5kX25hbWU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgZGlzdGluY3Q6IFsnZnVuZF9ob3VzZScsICdmdW5kX25hbWUnXVxuICAgIH0pO1xuXG4gICAgbGV0IHBhdGhzID0gW107XG4gICAgZnVuZHMubWFwKChmdW5kKSA9PiB7XG4gICAgICAgIHBhdGhzLnB1c2goW2Z1bmQuZnVuZF9ob3VzZS50b1N0cmluZygpLCBmdW5kLmZ1bmRfbmFtZS50b1N0cmluZygpXSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgcGF0aHM6IHBhdGhzXG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

})