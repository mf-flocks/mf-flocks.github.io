webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ \"./src/components/layout.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/veeresh/opensource/flocks-ui/src/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar TableinTableComp = function TableinTableComp(_ref) {\n  var fundHouse = _ref.fundHouse;\n  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Tr\"], {\n    textAlign: \"left\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Td\"], {\n    w: 5,\n    minW: 4,\n    textAlign: \"left\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }, fundHouse.change_percentage_aum, '%'), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Td\"], {\n    w: 15,\n    minW: 15,\n    textAlign: \"left\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }, fundHouse.change_quantity), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Td\"], {\n    textAlign: \"left\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/mutual_funds/\".concat(fundHouse.fund_house),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 21\n    }\n  }, __jsx(\"u\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 25\n    }\n  }, fundHouse.fund_name)))));\n};\n\n_c = TableinTableComp;\n\nvar LiComp = function LiComp(_ref2) {\n  var _stock$fundHouses$;\n\n  var stock = _ref2.stock;\n  var numRows = stock.fundHouses.length;\n  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Tr\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Td\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, stock.stock_name), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Td\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }, stock.industry), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Td\"], {\n    display: ['table-cell', 'table-cell', 'table-cell', 'none', 'none'],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/mutual_funds/\".concat((_stock$fundHouses$ = stock.fundHouses[0]) === null || _stock$fundHouses$ === void 0 ? void 0 : _stock$fundHouses$.fund_house),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 21\n    }\n  }, __jsx(\"u\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 25\n    }\n  }, numRows)))), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Td\"], {\n    display: ['none', 'none', 'none', 'table-cell', 'table-cell'],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 17\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Thead\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 21\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Tr\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 25\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Th\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 29\n    }\n  }, \"AUM%\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Th\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 29\n    }\n  }, \"Quantity\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Th\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 29\n    }\n  }, \"Fund\"))), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Tbody\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 21\n    }\n  }, stock.fundHouses.map(function (fundHouse) {\n    return __jsx(TableinTableComp, {\n      key: fundHouse.fund_house,\n      fundHouse: fundHouse,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 29\n      }\n    });\n  })))));\n};\n\n_c2 = LiComp;\n\nvar IndexPage = function IndexPage(_ref3) {\n  var stocks = _ref3.stocks;\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n    direction: \"column\",\n    align: \"left\",\n    justify: \"left\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Stack\"], {\n    pd: 10,\n    spacing: 3,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 17\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Heading\"], {\n    fontSize: \"2xl\",\n    textColor: \"gray.600\",\n    mt: 10,\n    ml: 6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 21\n    }\n  }, \"We track the best of mutual funds and filter out the stocks that they have added in the last month.\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Divider\"], {\n    orientation: \"horizontal\",\n    colorScheme: \"teal\",\n    mb: 4,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 21\n    }\n  }), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    mt: 5,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 21\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Heading\"], {\n    fontSize: \"md\",\n    textColor: \"gray.600\",\n    mb: 5,\n    ml: 6,\n    display: ['none', 'none', 'none', 'table-cell', 'table-cell'],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 25\n    }\n  }, \"The following are the list of stocks that various mutual funds have freshly entered last month. Click on the mutual fund-house name to get more details about their portfolio.\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n    fontSize: \"md\",\n    textColor: \"gray.600\",\n    mb: 4,\n    ml: 10,\n    display: ['table-cell', 'table-cell', 'table-cell', 'none', 'none'],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 25\n    }\n  }, \"The following are the list of stocks that various mutual funds have freshly entered last month. Click on the no,of fund-house count to get more details about one of the mutaul fund-house that has entered the stock.\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"], {\n    colorScheme: \"teal\",\n    textColor: \"gray.600\",\n    textAlign: \"match-parent\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 25\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Thead\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 29\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Tr\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 33\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Th\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 37\n    }\n  }, \"Stock Name\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Th\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 37\n    }\n  }, \"Industry\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Th\"], {\n    display: ['table-cell', 'table-cell', 'table-cell', 'none', 'none'],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 37\n    }\n  }, \"No,of MFs\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Th\"], {\n    display: ['none', 'none', 'none', 'table-cell', 'table-cell'],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 158,\n      columnNumber: 37\n    }\n  }, \"Mutual Funds\"))), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Tbody\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 172,\n      columnNumber: 29\n    }\n  }, Object.entries(stocks.entry).map(function (_ref4) {\n    var _ref5 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref4, 2),\n        isin = _ref5[0],\n        stock = _ref5[1];\n\n    return __jsx(LiComp, {\n      key: isin,\n      stock: stock,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 175,\n        columnNumber: 41\n      }\n    });\n  })))))));\n};\n\n_c3 = IndexPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"TableinTableComp\");\n$RefreshReg$(_c2, \"LiComp\");\n$RefreshReg$(_c3, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQ1NzAiXSwibmFtZXMiOlsiVGFibGVpblRhYmxlQ29tcCIsImZ1bmRIb3VzZSIsImNoYW5nZV9wZXJjZW50YWdlX2F1bSIsImNoYW5nZV9xdWFudGl0eSIsImZ1bmRfaG91c2UiLCJmdW5kX25hbWUiLCJMaUNvbXAiLCJzdG9jayIsIm51bVJvd3MiLCJmdW5kSG91c2VzIiwibGVuZ3RoIiwic3RvY2tfbmFtZSIsImluZHVzdHJ5IiwibWFwIiwiSW5kZXhQYWdlIiwic3RvY2tzIiwiT2JqZWN0IiwiZW50cmllcyIsImVudHJ5IiwiaXNpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBY0E7QUFHQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BQW1CO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUN4QyxTQUNJLE1BQUMsbURBQUQ7QUFBSSxhQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxtREFBRDtBQUFJLEtBQUMsRUFBRSxDQUFQO0FBQVUsUUFBSSxFQUFFLENBQWhCO0FBQW1CLGFBQVMsRUFBQyxNQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tBLFNBQVMsQ0FBQ0MscUJBRGYsRUFFSyxHQUZMLENBREosRUFLSSxNQUFDLG1EQUFEO0FBQUksS0FBQyxFQUFFLEVBQVA7QUFBVyxRQUFJLEVBQUUsRUFBakI7QUFBcUIsYUFBUyxFQUFDLE1BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0QsU0FBUyxDQUFDRSxlQURmLENBTEosRUFRSSxNQUFDLG1EQUFEO0FBQUksYUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLDBCQUFt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SixDQXZDSixDQVpKLENBREosQ0FESixDQURKO0FBd0dILENBekdEOztNQUFNTyxTOztBQThKU0Esd0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIFRleHQsXG4gICAgU3RhY2ssXG4gICAgRGl2aWRlcixcbiAgICBIZWFkaW5nLFxuICAgIEJveCxcbiAgICBGbGV4LFxuICAgIFRhYmxlLFxuICAgIFRyLFxuICAgIFRkLFxuICAgIFRib2R5LFxuICAgIFRoZWFkLFxuICAgIFRoXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XG5cbmNvbnN0IFRhYmxlaW5UYWJsZUNvbXAgPSAoeyBmdW5kSG91c2UgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxUciB0ZXh0QWxpZ249XCJsZWZ0XCI+XG4gICAgICAgICAgICA8VGQgdz17NX0gbWluVz17NH0gdGV4dEFsaWduPVwibGVmdFwiPlxuICAgICAgICAgICAgICAgIHtmdW5kSG91c2UuY2hhbmdlX3BlcmNlbnRhZ2VfYXVtfVxuICAgICAgICAgICAgICAgIHsnJSd9XG4gICAgICAgICAgICA8L1RkPlxuICAgICAgICAgICAgPFRkIHc9ezE1fSBtaW5XPXsxNX0gdGV4dEFsaWduPVwibGVmdFwiPlxuICAgICAgICAgICAgICAgIHtmdW5kSG91c2UuY2hhbmdlX3F1YW50aXR5fVxuICAgICAgICAgICAgPC9UZD5cbiAgICAgICAgICAgIDxUZCB0ZXh0QWxpZ249XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9tdXR1YWxfZnVuZHMvJHtmdW5kSG91c2UuZnVuZF9ob3VzZX1gfT5cbiAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dT57ZnVuZEhvdXNlLmZ1bmRfbmFtZX08L3U+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L1RkPlxuICAgICAgICA8L1RyPlxuICAgICk7XG59O1xuXG5jb25zdCBMaUNvbXAgPSAoeyBzdG9jayB9KSA9PiB7XG4gICAgY29uc3QgbnVtUm93cyA9IHN0b2NrLmZ1bmRIb3VzZXMubGVuZ3RoO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxUcj5cbiAgICAgICAgICAgIDxUZD57c3RvY2suc3RvY2tfbmFtZX08L1RkPlxuXG4gICAgICAgICAgICA8VGQ+e3N0b2NrLmluZHVzdHJ5fTwvVGQ+XG5cbiAgICAgICAgICAgIDxUZCBkaXNwbGF5PXtbJ3RhYmxlLWNlbGwnLCAndGFibGUtY2VsbCcsICd0YWJsZS1jZWxsJywgJ25vbmUnLCAnbm9uZSddfT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL211dHVhbF9mdW5kcy8ke3N0b2NrLmZ1bmRIb3VzZXNbMF0/LmZ1bmRfaG91c2V9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHU+e251bVJvd3N9PC91PlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9UZD5cblxuICAgICAgICAgICAgPFRkIGRpc3BsYXk9e1snbm9uZScsICdub25lJywgJ25vbmUnLCAndGFibGUtY2VsbCcsICd0YWJsZS1jZWxsJ119PlxuICAgICAgICAgICAgICAgIDxUYWJsZT5cbiAgICAgICAgICAgICAgICAgICAgPFRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaD5BVU0lPC9UaD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGg+UXVhbnRpdHk8L1RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaD5GdW5kPC9UaD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHI+XG4gICAgICAgICAgICAgICAgICAgIDwvVGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDxUYm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdG9jay5mdW5kSG91c2VzLm1hcCgoZnVuZEhvdXNlKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlaW5UYWJsZUNvbXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtmdW5kSG91c2UuZnVuZF9ob3VzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuZEhvdXNlPXtmdW5kSG91c2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L1Rib2R5PlxuICAgICAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgICA8L1RkPlxuICAgICAgICA8L1RyPlxuICAgICk7XG59O1xuXG5jb25zdCBJbmRleFBhZ2UgPSAoeyBzdG9ja3MgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIiBhbGlnbj1cImxlZnRcIiBqdXN0aWZ5PVwibGVmdFwiPlxuICAgICAgICAgICAgICAgIDxTdGFjayBwZD17MTB9IHNwYWNpbmc9ezN9PlxuICAgICAgICAgICAgICAgICAgICA8SGVhZGluZyBmb250U2l6ZT1cIjJ4bFwiIHRleHRDb2xvcj1cImdyYXkuNjAwXCIgbXQ9ezEwfSBtbD17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAgICBXZSB0cmFjayB0aGUgYmVzdCBvZiBtdXR1YWwgZnVuZHMgYW5kIGZpbHRlciBvdXQgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9ja3MgdGhhdCB0aGV5IGhhdmUgYWRkZWQgaW4gdGhlIGxhc3QgbW9udGguXG4gICAgICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cblxuICAgICAgICAgICAgICAgICAgICA8RGl2aWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lPVwidGVhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBtYj17NH1cbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICA8Qm94IG10PXs1fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yPVwiZ3JheS42MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1iPXs1fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1sPXs2fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhYmxlLWNlbGwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFibGUtY2VsbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBmb2xsb3dpbmcgYXJlIHRoZSBsaXN0IG9mIHN0b2NrcyB0aGF0IHZhcmlvdXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXR1YWwgZnVuZHMgaGF2ZSBmcmVzaGx5IGVudGVyZWQgbGFzdCBtb250aC4gQ2xpY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbiB0aGUgbXV0dWFsIGZ1bmQtaG91c2UgbmFtZSB0byBnZXQgbW9yZSBkZXRhaWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvdXQgdGhlaXIgcG9ydGZvbGlvLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVwibWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcj1cImdyYXkuNjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYj17NH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtbD17MTB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheT17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFibGUtY2VsbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWJsZS1jZWxsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhYmxlLWNlbGwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdub25lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGZvbGxvd2luZyBhcmUgdGhlIGxpc3Qgb2Ygc3RvY2tzIHRoYXQgdmFyaW91c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dHVhbCBmdW5kcyBoYXZlIGZyZXNobHkgZW50ZXJlZCBsYXN0IG1vbnRoLiBDbGlja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uIHRoZSBubyxvZiBmdW5kLWhvdXNlIGNvdW50IHRvIGdldCBtb3JlIGRldGFpbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYm91dCBvbmUgb2YgdGhlIG11dGF1bCBmdW5kLWhvdXNlIHRoYXQgaGFzIGVudGVyZWQgdGhlIHN0b2NrLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvclNjaGVtZT1cInRlYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcj1cImdyYXkuNjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJtYXRjaC1wYXJlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRoPlN0b2NrIE5hbWU8L1RoPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGg+SW5kdXN0cnk8L1RoPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWJsZS1jZWxsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhYmxlLWNlbGwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFibGUtY2VsbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBObyxvZiBNRnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGg+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhYmxlLWNlbGwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFibGUtY2VsbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE11dHVhbCBGdW5kc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UaD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ucj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RoZWFkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmVudHJpZXMoc3RvY2tzLmVudHJ5KS5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoW2lzaW4sIHN0b2NrXSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaUNvbXAga2V5PXtpc2lufSBzdG9jaz17c3RvY2t9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICAgIGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuICAgIGxldCBmdW5kcyA9IGF3YWl0IHByaXNtYS5tZl9kaWZmLmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIGN1cnJlbnRfbW9udGg6IHtcbiAgICAgICAgICAgICAgICBlcXVhbHM6IDExXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgICAgIGNoYW5nZV9tYXJrZXRfdmFsdWU6ICdkZXNjJ1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgc3RvY2tzID0ge1xuICAgICAgICBlbnRyeToge30sXG4gICAgICAgIGV4aXQ6IHt9LFxuICAgICAgICByZWR1Y2VkOiB7fSxcbiAgICAgICAgaW5jcmVhc2VkOiB7fSxcbiAgICAgICAgaGVsZDoge31cbiAgICB9O1xuXG4gICAgZnVuZHMubWFwKChtZikgPT4ge1xuICAgICAgICBsZXQgc3RhdGVTdG9ja3MgPSBzdG9ja3NbbWYuc3RhdGUudG9TdHJpbmcoKV07XG5cbiAgICAgICAgaWYgKCFzdGF0ZVN0b2Nrc1ttZi5pc2luXSkge1xuICAgICAgICAgICAgc3RhdGVTdG9ja3NbbWYuaXNpbl0gPSB7XG4gICAgICAgICAgICAgICAgc3RvY2tfbmFtZTogbWYuc3RvY2tfbmFtZS50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgIGluZHVzdHJ5OiBtZi5pbmR1c3RyeS50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgIGlzaW46IG1mLmlzaW4udG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICBmdW5kSG91c2VzOiBbXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlU3RvY2tzW21mLmlzaW5dLmZ1bmRIb3VzZXMucHVzaCh7XG4gICAgICAgICAgICBmdW5kX25hbWU6IG1mLmZ1bmRfbmFtZSxcbiAgICAgICAgICAgIGZ1bmRfaG91c2U6IG1mLmZ1bmRfaG91c2UsXG4gICAgICAgICAgICBjdXJyZW50X3F1YW50aXR5OiBtZi5jdXJyZW50X3F1YW50aXR5LnRvU3RyaW5nKCksXG4gICAgICAgICAgICBjaGFuZ2VfcXVhbnRpdHk6IG1mLmNoYW5nZV9xdWFudGl0eS50b1N0cmluZygpLFxuICAgICAgICAgICAgY2hhbmdlX21hcmtldF92YWx1ZTogTnVtYmVyKG1mLmNoYW5nZV9tYXJrZXRfdmFsdWUpLnRvRml4ZWQoMiksXG4gICAgICAgICAgICBjaGFuZ2VfcGVyY2VudGFnZV9hdW06IE51bWJlcihtZi5jaGFuZ2VfcGVyY2VudGFnZV9hdW0pLnRvRml4ZWQoMilcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgc3RvY2tzOiBzdG9ja3NcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

})