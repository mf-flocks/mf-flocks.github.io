webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ \"./src/components/layout.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/veeresh/opensource/flocks-ui/src/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar TableinTableComp = function TableinTableComp(_ref) {\n  var fundHouse = _ref.fundHouse;\n  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Tr\"], {\n    textAlign: \"left\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Td\"], {\n    w: 5,\n    minW: 4,\n    textAlign: \"left\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }, fundHouse.change_percentage_aum, '%'), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Td\"], {\n    w: 15,\n    minW: 15,\n    textAlign: \"left\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }, fundHouse.change_quantity), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Td\"], {\n    textAlign: \"left\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/mutual_funds/\".concat(fundHouse.fund_house),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 21\n    }\n  }, __jsx(\"u\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 25\n    }\n  }, fundHouse.fund_name)))));\n};\n\n_c = TableinTableComp;\n\nvar LiComp = function LiComp(_ref2) {\n  var _stock$fundHouses$;\n\n  var stock = _ref2.stock;\n  var numRows = stock.fundHouses.length;\n  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Tr\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Td\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, stock.stock_name), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Td\"], {\n    display: ['none', 'none', 'table-cell', 'table-cell', 'table-cell'],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }, stock.industry), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Td\"], {\n    display: ['none', 'none', 'none', 'table-cell', 'table-cell'],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }\n  }, stock.isin), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Td\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/mutual_funds/\".concat((_stock$fundHouses$ = stock.fundHouses[0]) === null || _stock$fundHouses$ === void 0 ? void 0 : _stock$fundHouses$.fund_house),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 21\n    }\n  }, __jsx(\"u\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 25\n    }\n  }, numRows)))), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Td\"], {\n    display: ['none', 'none', 'none', 'table-cell', 'table-cell'],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 17\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Thead\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 21\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Tr\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 25\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Th\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 29\n    }\n  }, \"AUM%\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Th\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 29\n    }\n  }, \"Quantity\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Th\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 29\n    }\n  }, \"Fund\"))), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Tbody\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 21\n    }\n  }, stock.fundHouses.map(function (fundHouse) {\n    return __jsx(TableinTableComp, {\n      key: fundHouse.fund_house,\n      fundHouse: fundHouse,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 29\n      }\n    });\n  })))));\n};\n\n_c2 = LiComp;\n\nvar IndexPage = function IndexPage(_ref3) {\n  var stocks = _ref3.stocks;\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n    direction: \"column\",\n    align: \"left\",\n    justify: \"left\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Stack\"], {\n    pd: 10,\n    spacing: 3,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 17\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Heading\"], {\n    fontSize: \"2xl\",\n    textColor: \"gray.600\",\n    mt: 10,\n    ml: 6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 21\n    }\n  }, \"We track the best of mutual funds and filter out the stocks that they have added in the last month.\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Divider\"], {\n    orientation: \"horizontal\",\n    colorScheme: \"teal\",\n    mb: 4,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 21\n    }\n  }), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    mt: 2,\n    maxW: \"8xl\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 21\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Stack\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 25\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n    fontSize: \"md\",\n    textColor: \"gray.600\",\n    mb: 4,\n    ml: 6,\n    display: ['none', 'none', 'none', 'table-cell', 'table-cell'],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 29\n    }\n  }, \"The following are the list of stocks that various mutual funds have freshly entered last month. Click on the mutual fund-house name to get more details about their portfolio.\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n    fontSize: \"sg\",\n    textColor: \"gray.500\",\n    mb: 4,\n    pl: 5,\n    display: ['table-cell', 'table-cell', 'table-cell', 'none', 'none'],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 29\n    }\n  }, \"The following are the list of stocks that various mutual funds have freshly entered last month. Click on the no,of fund-house count to get more details about one of the mutaul fund-house that has entered the stock.\")), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"], {\n    colorScheme: \"teal\",\n    textColor: \"gray.600\",\n    textAlign: \"match-parent\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 25\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Thead\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 157,\n      columnNumber: 29\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Tr\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 158,\n      columnNumber: 33\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Th\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 159,\n      columnNumber: 37\n    }\n  }, \"Stock Name\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Th\"], {\n    display: ['none', 'none', 'table-cell', 'table-cell', 'table-cell'],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 161,\n      columnNumber: 37\n    }\n  }, \"Industry\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Th\"], {\n    display: ['none', 'none', 'none', 'table-cell', 'table-cell'],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 173,\n      columnNumber: 37\n    }\n  }, \"ISIN\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Th\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 185,\n      columnNumber: 37\n    }\n  }, \"No,of MFs\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Th\"], {\n    display: ['none', 'none', 'none', 'table-cell', 'table-cell'],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 187,\n      columnNumber: 37\n    }\n  }, \"Mutual Funds\"))), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Tbody\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 201,\n      columnNumber: 29\n    }\n  }, Object.entries(stocks.entry).map(function (_ref4) {\n    var _ref5 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref4, 2),\n        isin = _ref5[0],\n        stock = _ref5[1];\n\n    return __jsx(LiComp, {\n      key: isin,\n      stock: stock,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 204,\n        columnNumber: 41\n      }\n    });\n  })))))));\n};\n\n_c3 = IndexPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"TableinTableComp\");\n$RefreshReg$(_c2, \"LiComp\");\n$RefreshReg$(_c3, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQ1NzAiXSwibmFtZXMiOlsiVGFibGVpblRhYmxlQ29tcCIsImZ1bmRIb3VzZSIsImNoYW5nZV9wZXJjZW50YWdlX2F1bSIsImNoYW5nZV9xdWFudGl0eSIsImZ1bmRfaG91c2UiLCJmdW5kX25hbWUiLCJMaUNvbXAiLCJzdG9jayIsIm51bVJvd3MiLCJmdW5kSG91c2VzIiwibGVuZ3RoIiwic3RvY2tfbmFtZSIsImluZHVzdHJ5IiwiaXNpbiIsIm1hcCIsIkluZGV4UGFnZSIsInN0b2NrcyIsIk9iamVjdCIsImVudHJpZXMiLCJlbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBY0E7QUFHQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BQW1CO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUN4QyxTQUNJLE1BQUMsbURBQUQ7QUFBSSxhQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxtREFBRDtBQUFJLEtBQUMsRUFBRSxDQUFQO0FBQVUsUUFBSSxFQUFFLENBQWhCO0FBQW1CLGFBQVMsRUFBQyxNQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tBLFNBQVMsQ0FBQ0MscUJBRGYsRUFFSyxHQUZMLENBREosRUFLSSxNQUFDLG1EQUFEO0FBQUksS0FBQyxFQUFFLEVBQVA7QUFBVyxRQUFJLEVBQUUsRUFBakI7QUFBcUIsYUFBUyxFQUFDLE1BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0QsU0FBUyxDQUFDRSxlQURmLENBTEosRUFRSSxNQUFDLG1EQUFEO0FBQUksYUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLDBCQUFt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QUhLLEVBSUwsWUFKSyxFQUtMLFlBTEssQ0FEYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQTdCSixDQURKLENBTEosRUFpREksTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlRixNQUFNLENBQUNHLEtBQXRCLEVBQTZCTCxHQUE3QixDQUNHO0FBQUE7QUFBQSxRQUFFRCxJQUFGO0FBQUEsUUFBUU4sS0FBUjs7QUFBQSxXQUNJLE1BQUMsTUFBRDtBQUFRLFNBQUcsRUFBRU0sSUFBYjtBQUFtQixXQUFLLEVBQUVOLEtBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESjtBQUFBLEdBREgsQ0FETCxDQWpESixDQTFDSixDQVpKLENBREosQ0FESixDQURKO0FBdUhILENBeEhEOztNQUFNUSxTOztBQTZLU0Esd0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIFRleHQsXG4gICAgU3RhY2ssXG4gICAgRGl2aWRlcixcbiAgICBIZWFkaW5nLFxuICAgIEJveCxcbiAgICBGbGV4LFxuICAgIFRhYmxlLFxuICAgIFRyLFxuICAgIFRkLFxuICAgIFRib2R5LFxuICAgIFRoZWFkLFxuICAgIFRoXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XG5cbmNvbnN0IFRhYmxlaW5UYWJsZUNvbXAgPSAoeyBmdW5kSG91c2UgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxUciB0ZXh0QWxpZ249XCJsZWZ0XCI+XG4gICAgICAgICAgICA8VGQgdz17NX0gbWluVz17NH0gdGV4dEFsaWduPVwibGVmdFwiPlxuICAgICAgICAgICAgICAgIHtmdW5kSG91c2UuY2hhbmdlX3BlcmNlbnRhZ2VfYXVtfVxuICAgICAgICAgICAgICAgIHsnJSd9XG4gICAgICAgICAgICA8L1RkPlxuICAgICAgICAgICAgPFRkIHc9ezE1fSBtaW5XPXsxNX0gdGV4dEFsaWduPVwibGVmdFwiPlxuICAgICAgICAgICAgICAgIHtmdW5kSG91c2UuY2hhbmdlX3F1YW50aXR5fVxuICAgICAgICAgICAgPC9UZD5cbiAgICAgICAgICAgIDxUZCB0ZXh0QWxpZ249XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9tdXR1YWxfZnVuZHMvJHtmdW5kSG91c2UuZnVuZF9ob3VzZX1gfT5cbiAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dT57ZnVuZEhvdXNlLmZ1bmRfbmFtZX08L3U+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L1RkPlxuICAgICAgICA8L1RyPlxuICAgICk7XG59O1xuXG5jb25zdCBMaUNvbXAgPSAoeyBzdG9jayB9KSA9PiB7XG4gICAgY29uc3QgbnVtUm93cyA9IHN0b2NrLmZ1bmRIb3VzZXMubGVuZ3RoO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxUcj5cbiAgICAgICAgICAgIDxUZD57c3RvY2suc3RvY2tfbmFtZX08L1RkPlxuXG4gICAgICAgICAgICA8VGRcbiAgICAgICAgICAgICAgICBkaXNwbGF5PXtbXG4gICAgICAgICAgICAgICAgICAgICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAndGFibGUtY2VsbCcsXG4gICAgICAgICAgICAgICAgICAgICd0YWJsZS1jZWxsJyxcbiAgICAgICAgICAgICAgICAgICAgJ3RhYmxlLWNlbGwnXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7c3RvY2suaW5kdXN0cnl9XG4gICAgICAgICAgICA8L1RkPlxuXG4gICAgICAgICAgICA8VGQgZGlzcGxheT17Wydub25lJywgJ25vbmUnLCAnbm9uZScsICd0YWJsZS1jZWxsJywgJ3RhYmxlLWNlbGwnXX0+XG4gICAgICAgICAgICAgICAge3N0b2NrLmlzaW59XG4gICAgICAgICAgICA8L1RkPlxuXG4gICAgICAgICAgICA8VGQ+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9tdXR1YWxfZnVuZHMvJHtzdG9jay5mdW5kSG91c2VzWzBdPy5mdW5kX2hvdXNlfWB9PlxuICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1PntudW1Sb3dzfTwvdT5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvVGQ+XG5cbiAgICAgICAgICAgIDxUZCBkaXNwbGF5PXtbJ25vbmUnLCAnbm9uZScsICdub25lJywgJ3RhYmxlLWNlbGwnLCAndGFibGUtY2VsbCddfT5cbiAgICAgICAgICAgICAgICA8VGFibGU+XG4gICAgICAgICAgICAgICAgICAgIDxUaGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGg+QVVNJTwvVGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRoPlF1YW50aXR5PC9UaD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGg+RnVuZDwvVGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RyPlxuICAgICAgICAgICAgICAgICAgICA8L1RoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8VGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RvY2suZnVuZEhvdXNlcy5tYXAoKGZ1bmRIb3VzZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZWluVGFibGVDb21wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZnVuZEhvdXNlLmZ1bmRfaG91c2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmRIb3VzZT17ZnVuZEhvdXNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9UYm9keT5cbiAgICAgICAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICAgICAgPC9UZD5cbiAgICAgICAgPC9Ucj5cbiAgICApO1xufTtcblxuY29uc3QgSW5kZXhQYWdlID0gKHsgc3RvY2tzIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCIgYWxpZ249XCJsZWZ0XCIganVzdGlmeT1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICA8U3RhY2sgcGQ9ezEwfSBzcGFjaW5nPXszfT5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgZm9udFNpemU9XCIyeGxcIiB0ZXh0Q29sb3I9XCJncmF5LjYwMFwiIG10PXsxMH0gbWw9ezZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgV2UgdHJhY2sgdGhlIGJlc3Qgb2YgbXV0dWFsIGZ1bmRzIGFuZCBmaWx0ZXIgb3V0IHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvY2tzIHRoYXQgdGhleSBoYXZlIGFkZGVkIGluIHRoZSBsYXN0IG1vbnRoLlxuICAgICAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XG5cbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvclNjaGVtZT1cInRlYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbWI9ezR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPEJveCBtdD17Mn0gbWF4Vz1cIjh4bFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVwibWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I9XCJncmF5LjYwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1iPXs0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtbD17Nn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheT17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhYmxlLWNlbGwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhYmxlLWNlbGwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgZm9sbG93aW5nIGFyZSB0aGUgbGlzdCBvZiBzdG9ja3MgdGhhdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpb3VzIG11dHVhbCBmdW5kcyBoYXZlIGZyZXNobHkgZW50ZXJlZCBsYXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoLiBDbGljayBvbiB0aGUgbXV0dWFsIGZ1bmQtaG91c2UgbmFtZSB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQgbW9yZSBkZXRhaWxzIGFib3V0IHRoZWlyIHBvcnRmb2xpby5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cInNnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yPVwiZ3JheS41MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYj17NH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGw9ezV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWJsZS1jZWxsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWJsZS1jZWxsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWJsZS1jZWxsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdub25lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGZvbGxvd2luZyBhcmUgdGhlIGxpc3Qgb2Ygc3RvY2tzIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaW91cyBtdXR1YWwgZnVuZHMgaGF2ZSBmcmVzaGx5IGVudGVyZWQgbGFzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb250aC4gQ2xpY2sgb24gdGhlIG5vLG9mIGZ1bmQtaG91c2UgY291bnQgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0IG1vcmUgZGV0YWlscyBhYm91dCBvbmUgb2YgdGhlIG11dGF1bFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5kLWhvdXNlIHRoYXQgaGFzIGVudGVyZWQgdGhlIHN0b2NrLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lPVwidGVhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yPVwiZ3JheS42MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cIm1hdGNoLXBhcmVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGg+U3RvY2sgTmFtZTwvVGg+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWJsZS1jZWxsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhYmxlLWNlbGwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFibGUtY2VsbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZHVzdHJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RoPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWJsZS1jZWxsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhYmxlLWNlbGwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJU0lOXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RoPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGg+Tm8sb2YgTUZzPC9UaD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheT17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFibGUtY2VsbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWJsZS1jZWxsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTXV0dWFsIEZ1bmRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGhlYWQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhzdG9ja3MuZW50cnkpLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChbaXNpbiwgc3RvY2tdKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpQ29tcCBrZXk9e2lzaW59IHN0b2NrPXtzdG9ja30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gICAgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuXG4gICAgbGV0IGZ1bmRzID0gYXdhaXQgcHJpc21hLm1mX2RpZmYuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgY3VycmVudF9tb250aDoge1xuICAgICAgICAgICAgICAgIGVxdWFsczogMTFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb3JkZXJCeToge1xuICAgICAgICAgICAgY2hhbmdlX21hcmtldF92YWx1ZTogJ2Rlc2MnXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCBzdG9ja3MgPSB7XG4gICAgICAgIGVudHJ5OiB7fSxcbiAgICAgICAgZXhpdDoge30sXG4gICAgICAgIHJlZHVjZWQ6IHt9LFxuICAgICAgICBpbmNyZWFzZWQ6IHt9LFxuICAgICAgICBoZWxkOiB7fVxuICAgIH07XG5cbiAgICBmdW5kcy5tYXAoKG1mKSA9PiB7XG4gICAgICAgIGxldCBzdGF0ZVN0b2NrcyA9IHN0b2Nrc1ttZi5zdGF0ZS50b1N0cmluZygpXTtcblxuICAgICAgICBpZiAoIXN0YXRlU3RvY2tzW21mLmlzaW5dKSB7XG4gICAgICAgICAgICBzdGF0ZVN0b2Nrc1ttZi5pc2luXSA9IHtcbiAgICAgICAgICAgICAgICBzdG9ja19uYW1lOiBtZi5zdG9ja19uYW1lLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgaW5kdXN0cnk6IG1mLmluZHVzdHJ5LnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgaXNpbjogbWYuaXNpbi50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgIGZ1bmRIb3VzZXM6IFtdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGVTdG9ja3NbbWYuaXNpbl0uZnVuZEhvdXNlcy5wdXNoKHtcbiAgICAgICAgICAgIGZ1bmRfbmFtZTogbWYuZnVuZF9uYW1lLFxuICAgICAgICAgICAgZnVuZF9ob3VzZTogbWYuZnVuZF9ob3VzZSxcbiAgICAgICAgICAgIGN1cnJlbnRfcXVhbnRpdHk6IG1mLmN1cnJlbnRfcXVhbnRpdHkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIGNoYW5nZV9xdWFudGl0eTogbWYuY2hhbmdlX3F1YW50aXR5LnRvU3RyaW5nKCksXG4gICAgICAgICAgICBjaGFuZ2VfbWFya2V0X3ZhbHVlOiBOdW1iZXIobWYuY2hhbmdlX21hcmtldF92YWx1ZSkudG9GaXhlZCgyKSxcbiAgICAgICAgICAgIGNoYW5nZV9wZXJjZW50YWdlX2F1bTogTnVtYmVyKG1mLmNoYW5nZV9wZXJjZW50YWdlX2F1bSkudG9GaXhlZCgyKVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBzdG9ja3M6IHN0b2Nrc1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

})