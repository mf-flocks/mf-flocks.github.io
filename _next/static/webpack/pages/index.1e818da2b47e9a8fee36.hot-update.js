webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./src/components/layout.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/veeresh/opensource/flocks-ui/src/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Cell = function Cell(_ref) {\n  var children = _ref.children,\n      responsive = _ref.responsive,\n      header = _ref.header,\n      showMD = _ref.showMD;\n  var CellType = _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Td\"];\n\n  if (header) {\n    CellType = _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Th\"];\n  }\n\n  var displayType = ['none', 'none', 'None', 'table-cell', 'table-cell'];\n\n  if (showMD) {\n    displayType = ['none', 'none', 'table-cell', 'table-cell', 'table-cell'];\n  }\n\n  if (responsive) {\n    return __jsx(CellType, {\n      display: displayType,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 16\n      }\n    }, children);\n  }\n\n  return __jsx(CellType, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 12\n    }\n  }, children);\n};\n\n_c = Cell;\n\nvar Row = function Row(mf) {\n  var badgeColors = {\n    \"new\": 'green.500',\n    exit: 'red.500',\n    reduced: 'red.300',\n    added: 'green.300',\n    held: 'gray.200'\n  };\n  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Tr\"], {\n    key: mf.stock_name,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, __jsx(Cell, {\n    responsive: false,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }\n  }, \" \", mf.stock_name), __jsx(Cell, {\n    responsive: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }, mf.industry), __jsx(Cell, {\n    responsive: false,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Badge\"], {\n    variant: \"outline\",\n    colorScheme: badgeColors[mf.state],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 17\n    }\n  }, mf.state)), __jsx(Cell, {\n    responsive: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }\n  }, mf.current_quantity), __jsx(Cell, {\n    responsive: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }\n  }, mf.previous_quantity), __jsx(Cell, {\n    responsive: false,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 13\n    }\n  }, mf.change_quantity), __jsx(Cell, {\n    responsive: true,\n    showMD: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }\n  }, Number(mf.change_market_value).toFixed(2)), __jsx(Cell, {\n    responsive: true,\n    showMD: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 13\n    }\n  }, Number(mf.change_percentage_aum).toFixed(2)));\n};\n\n_c2 = Row;\n\nvar IndexPage = function IndexPage(_ref2) {\n  var caption = _ref2.caption,\n      mutual_funds = _ref2.mutual_funds;\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n    spacing: 2,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    fontSize: \"xl\",\n    ml: 4,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 21\n    }\n  }, \"This is what Parag Parikh Long Term Equity Fund bought last month.\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Table\"], {\n    variant: \"simple\",\n    colorScheme: \"teal.500\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 17\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"TableCaption\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 21\n    }\n  }, caption), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Thead\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 21\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Tr\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 25\n    }\n  }, __jsx(Cell, {\n    responsive: false,\n    header: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 29\n    }\n  }, 'Stock name'), __jsx(Cell, {\n    responsive: true,\n    header: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 29\n    }\n  }, 'Industry'), __jsx(Cell, {\n    responsive: false,\n    header: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 29\n    }\n  }, 'State'), __jsx(Cell, {\n    responsive: true,\n    header: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 29\n    }\n  }, 'Current Quantity'), __jsx(Cell, {\n    responsive: true,\n    header: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 29\n    }\n  }, 'Previous Quantity'), __jsx(Cell, {\n    responsive: false,\n    header: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 29\n    }\n  }, 'Change in Quantity'), __jsx(Cell, {\n    responsive: true,\n    header: true,\n    showMD: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 29\n    }\n  }, 'Change in Value(in Lacs)'), __jsx(Cell, {\n    responsive: true,\n    header: true,\n    showMD: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 29\n    }\n  }, 'Change in AUM %'))), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Tbody\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 21\n    }\n  }, mutual_funds[\"new\"].map(Row), mutual_funds.added.map(Row), mutual_funds.held.map(Row), mutual_funds.reduced.map(Row), mutual_funds.exit.map(Row)))));\n};\n\n_c3 = IndexPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Cell\");\n$RefreshReg$(_c2, \"Row\");\n$RefreshReg$(_c3, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQ1NzAiXSwibmFtZXMiOlsiQ2VsbCIsImNoaWxkcmVuIiwicmVzcG9uc2l2ZSIsImhlYWRlciIsInNob3dNRCIsIkNlbGxUeXBlIiwiVGQiLCJUaCIsImRpc3BsYXlUeXBlIiwiUm93IiwibWYiLCJiYWRnZUNvbG9ycyIsImV4aXQiLCJyZWR1Y2VkIiwiYWRkZWQiLCJoZWxkIiwic3RvY2tfbmFtZSIsImluZHVzdHJ5Iiwic3RhdGUiLCJjdXJyZW50X3F1YW50aXR5IiwicHJldmlvdXNfcXVhbnRpdHkiLCJjaGFuZ2VfcXVhbnRpdHkiLCJOdW1iZXIiLCJjaGFuZ2VfbWFya2V0X3ZhbHVlIiwidG9GaXhlZCIsImNoYW5nZV9wZXJjZW50YWdlX2F1bSIsIkluZGV4UGFnZSIsImNhcHRpb24iLCJtdXR1YWxfZnVuZHMiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFjQTs7QUFJQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUE4QztBQUFBLE1BQTNDQyxRQUEyQyxRQUEzQ0EsUUFBMkM7QUFBQSxNQUFqQ0MsVUFBaUMsUUFBakNBLFVBQWlDO0FBQUEsTUFBckJDLE1BQXFCLFFBQXJCQSxNQUFxQjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUN2RCxNQUFJQyxRQUFRLEdBQUdDLG1EQUFmOztBQUNBLE1BQUlILE1BQUosRUFBWTtBQUNSRSxZQUFRLEdBQUdFLG1EQUFYO0FBQ0g7O0FBRUQsTUFBSUMsV0FBVyxHQUFHLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsTUFBakIsRUFBeUIsWUFBekIsRUFBdUMsWUFBdkMsQ0FBbEI7O0FBQ0EsTUFBSUosTUFBSixFQUFZO0FBQ1JJLGVBQVcsR0FBRyxDQUNWLE1BRFUsRUFFVixNQUZVLEVBR1YsWUFIVSxFQUlWLFlBSlUsRUFLVixZQUxVLENBQWQ7QUFPSDs7QUFFRCxNQUFJTixVQUFKLEVBQWdCO0FBQ1osV0FB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QVUsRUFBRSxLQUFsQjtBQUF5QixVQUFNLEVBQUUsSUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLLG9CQURMLENBbkJKLEVBc0JJLE1BQUMsSUFBRDtBQUFNLGNBQVUsRUFBRSxJQUFsQjtBQUF3QixVQUFNLEVBQUUsSUFBaEM7QUFBc0MsVUFBTSxFQUFFLElBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSywwQkFETCxDQXRCSixFQXlCSSxNQUFDLElBQUQ7QUFBTSxjQUFVLEVBQUUsSUFBbEI7QUFBd0IsVUFBTSxFQUFFLElBQWhDO0FBQXNDLFVBQU0sRUFBRSxJQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ssaUJBREwsQ0F6QkosQ0FESixDQUZKLEVBa0NJLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLQyxZQUFZLE9BQVosQ0FBaUJDLEdBQWpCLENBQXFCcEIsR0FBckIsQ0FETCxFQUVLbUIsWUFBWSxDQUFDZCxLQUFiLENBQW1CZSxHQUFuQixDQUF1QnBCLEdBQXZCLENBRkwsRUFHS21CLFlBQVksQ0FBQ2IsSUFBYixDQUFrQmMsR0FBbEIsQ0FBc0JwQixHQUF0QixDQUhMLEVBSUttQixZQUFZLENBQUNmLE9BQWIsQ0FBcUJnQixHQUFyQixDQUF5QnBCLEdBQXpCLENBSkwsRUFLS21CLFlBQVksQ0FBQ2hCLElBQWIsQ0FBa0JpQixHQUFsQixDQUFzQnBCLEdBQXRCLENBTEwsQ0FsQ0osQ0FOSixDQURKLENBREo7QUFxREgsQ0F0REQ7O01BQU1pQixTOztBQTJHU0Esd0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIFRhYmxlLFxuICAgIFRoZWFkLFxuICAgIFRib2R5LFxuICAgIFRleHQsXG4gICAgQmFkZ2UsXG4gICAgVHIsXG4gICAgVGgsXG4gICAgVGQsXG4gICAgVGFibGVDYXB0aW9uLFxuICAgIEJveCxcbiAgICBTdGFja1xufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XG5cbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcblxuY29uc3QgQ2VsbCA9ICh7IGNoaWxkcmVuLCByZXNwb25zaXZlLCBoZWFkZXIsIHNob3dNRCB9KSA9PiB7XG4gICAgbGV0IENlbGxUeXBlID0gVGQ7XG4gICAgaWYgKGhlYWRlcikge1xuICAgICAgICBDZWxsVHlwZSA9IFRoO1xuICAgIH1cblxuICAgIGxldCBkaXNwbGF5VHlwZSA9IFsnbm9uZScsICdub25lJywgJ05vbmUnLCAndGFibGUtY2VsbCcsICd0YWJsZS1jZWxsJ107XG4gICAgaWYgKHNob3dNRCkge1xuICAgICAgICBkaXNwbGF5VHlwZSA9IFtcbiAgICAgICAgICAgICdub25lJyxcbiAgICAgICAgICAgICdub25lJyxcbiAgICAgICAgICAgICd0YWJsZS1jZWxsJyxcbiAgICAgICAgICAgICd0YWJsZS1jZWxsJyxcbiAgICAgICAgICAgICd0YWJsZS1jZWxsJ1xuICAgICAgICBdO1xuICAgIH1cblxuICAgIGlmIChyZXNwb25zaXZlKSB7XG4gICAgICAgIHJldHVybiA8Q2VsbFR5cGUgZGlzcGxheT17ZGlzcGxheVR5cGV9PntjaGlsZHJlbn08L0NlbGxUeXBlPjtcbiAgICB9XG5cbiAgICByZXR1cm4gPENlbGxUeXBlPntjaGlsZHJlbn08L0NlbGxUeXBlPjtcbn07XG5cbmNvbnN0IFJvdyA9IChtZikgPT4ge1xuICAgIGNvbnN0IGJhZGdlQ29sb3JzID0ge1xuICAgICAgICBuZXc6ICdncmVlbi41MDAnLFxuICAgICAgICBleGl0OiAncmVkLjUwMCcsXG4gICAgICAgIHJlZHVjZWQ6ICdyZWQuMzAwJyxcbiAgICAgICAgYWRkZWQ6ICdncmVlbi4zMDAnLFxuICAgICAgICBoZWxkOiAnZ3JheS4yMDAnXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxUciBrZXk9e21mLnN0b2NrX25hbWV9PlxuICAgICAgICAgICAgPENlbGwgcmVzcG9uc2l2ZT17ZmFsc2V9PiB7bWYuc3RvY2tfbmFtZX08L0NlbGw+XG4gICAgICAgICAgICA8Q2VsbCByZXNwb25zaXZlPXt0cnVlfT57bWYuaW5kdXN0cnl9PC9DZWxsPlxuICAgICAgICAgICAgPENlbGwgcmVzcG9uc2l2ZT17ZmFsc2V9PlxuICAgICAgICAgICAgICAgIDxCYWRnZSB2YXJpYW50PVwib3V0bGluZVwiIGNvbG9yU2NoZW1lPXtiYWRnZUNvbG9yc1ttZi5zdGF0ZV19PlxuICAgICAgICAgICAgICAgICAgICB7bWYuc3RhdGV9XG4gICAgICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICAgIDwvQ2VsbD5cbiAgICAgICAgICAgIDxDZWxsIHJlc3BvbnNpdmU9e3RydWV9PnttZi5jdXJyZW50X3F1YW50aXR5fTwvQ2VsbD5cbiAgICAgICAgICAgIDxDZWxsIHJlc3BvbnNpdmU9e3RydWV9PnttZi5wcmV2aW91c19xdWFudGl0eX08L0NlbGw+XG4gICAgICAgICAgICA8Q2VsbCByZXNwb25zaXZlPXtmYWxzZX0+e21mLmNoYW5nZV9xdWFudGl0eX08L0NlbGw+XG4gICAgICAgICAgICA8Q2VsbCByZXNwb25zaXZlPXt0cnVlfSBzaG93TUQ9e3RydWV9PlxuICAgICAgICAgICAgICAgIHtOdW1iZXIobWYuY2hhbmdlX21hcmtldF92YWx1ZSkudG9GaXhlZCgyKX1cbiAgICAgICAgICAgIDwvQ2VsbD5cbiAgICAgICAgICAgIDxDZWxsIHJlc3BvbnNpdmU9e3RydWV9IHNob3dNRD17dHJ1ZX0+XG4gICAgICAgICAgICAgICAge051bWJlcihtZi5jaGFuZ2VfcGVyY2VudGFnZV9hdW0pLnRvRml4ZWQoMil9XG4gICAgICAgICAgICA8L0NlbGw+XG4gICAgICAgIDwvVHI+XG4gICAgKTtcbn07XG5cbmNvbnN0IEluZGV4UGFnZSA9ICh7IGNhcHRpb24sIG11dHVhbF9mdW5kcyB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJ4bFwiIG1sPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgd2hhdCBQYXJhZyBQYXJpa2ggTG9uZyBUZXJtIEVxdWl0eSBGdW5kIGJvdWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdCBtb250aC5cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuXG4gICAgICAgICAgICAgICAgPFRhYmxlIHZhcmlhbnQ9XCJzaW1wbGVcIiBjb2xvclNjaGVtZT1cInRlYWwuNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNhcHRpb24+e2NhcHRpb259PC9UYWJsZUNhcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxUaGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2VsbCByZXNwb25zaXZlPXtmYWxzZX0gaGVhZGVyPXt0cnVlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydTdG9jayBuYW1lJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NlbGw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2VsbCByZXNwb25zaXZlPXt0cnVlfSBoZWFkZXI9e3RydWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7J0luZHVzdHJ5J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NlbGw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2VsbCByZXNwb25zaXZlPXtmYWxzZX0gaGVhZGVyPXt0cnVlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydTdGF0ZSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DZWxsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENlbGwgcmVzcG9uc2l2ZT17dHJ1ZX0gaGVhZGVyPXt0cnVlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydDdXJyZW50IFF1YW50aXR5J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENlbGwgcmVzcG9uc2l2ZT17dHJ1ZX0gaGVhZGVyPXt0cnVlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydQcmV2aW91cyBRdWFudGl0eSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDZWxsIHJlc3BvbnNpdmU9e2ZhbHNlfSBoZWFkZXI9e3RydWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7J0NoYW5nZSBpbiBRdWFudGl0eSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDZWxsIHJlc3BvbnNpdmU9e3RydWV9IGhlYWRlcj17dHJ1ZX0gc2hvd01EPXt0cnVlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydDaGFuZ2UgaW4gVmFsdWUoaW4gTGFjcyknfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2VsbCByZXNwb25zaXZlPXt0cnVlfSBoZWFkZXI9e3RydWV9IHNob3dNRD17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnQ2hhbmdlIGluIEFVTSAlJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RyPlxuICAgICAgICAgICAgICAgICAgICA8L1RoZWFkPlxuXG4gICAgICAgICAgICAgICAgICAgIDxUYm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttdXR1YWxfZnVuZHMubmV3Lm1hcChSb3cpfVxuICAgICAgICAgICAgICAgICAgICAgICAge211dHVhbF9mdW5kcy5hZGRlZC5tYXAoUm93KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHttdXR1YWxfZnVuZHMuaGVsZC5tYXAoUm93KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHttdXR1YWxfZnVuZHMucmVkdWNlZC5tYXAoUm93KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHttdXR1YWxfZnVuZHMuZXhpdC5tYXAoUm93KX1cbiAgICAgICAgICAgICAgICAgICAgPC9UYm9keT5cbiAgICAgICAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gICAgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuXG4gICAgbGV0IG1mcyA9IGF3YWl0IHByaXNtYS5tZl9kaWZmLmZpbmRNYW55KHtcbiAgICAgICAgb3JkZXJCeToge1xuICAgICAgICAgICAgY2hhbmdlX21hcmtldF92YWx1ZTogJ2Rlc2MnXG4gICAgICAgIH0sXG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICBmdW5kX2hvdXNlOiB7XG4gICAgICAgICAgICAgICAgZXF1YWxzOiAnUFBMVFZGJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGN1cnJlbnRfbW9udGg6IHtcbiAgICAgICAgICAgICAgICBlcXVhbHM6IDlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFtZnMpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0VtcHR5IG11dHVhbCBmdW5kcyBmb3IgUUxURVZGJyk7XG4gICAgICAgIG1mcyA9IFtdO1xuICAgIH1cblxuICAgIGxldCBtdXR1YWxfZnVuZHMgPSB7XG4gICAgICAgIG5ldzogW10sXG4gICAgICAgIGV4aXQ6IFtdLFxuICAgICAgICByZWR1Y2VkOiBbXSxcbiAgICAgICAgYWRkZWQ6IFtdLFxuICAgICAgICBoZWxkOiBbXVxuICAgIH07XG5cbiAgICBtZnMubWFwKChtZikgPT5cbiAgICAgICAgbXV0dWFsX2Z1bmRzW21mLnN0YXRlLnRvU3RyaW5nKCldLnB1c2goe1xuICAgICAgICAgICAgc3RvY2tfbmFtZTogbWYuc3RvY2tfbmFtZS50b1N0cmluZygpLFxuICAgICAgICAgICAgaW5kdXN0cnk6IG1mLmluZHVzdHJ5LnRvU3RyaW5nKCksXG4gICAgICAgICAgICBzdGF0ZTogbWYuc3RhdGUudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIGN1cnJlbnRfcXVhbnRpdHk6IG1mLmN1cnJlbnRfcXVhbnRpdHkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHByZXZpb3VzX3F1YW50aXR5OiBtZi5wcmV2aW91c19xdWFudGl0eS50b1N0cmluZygpLFxuICAgICAgICAgICAgY2hhbmdlX3F1YW50aXR5OiBtZi5jaGFuZ2VfcXVhbnRpdHkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIGNoYW5nZV9tYXJrZXRfdmFsdWU6IG1mLmNoYW5nZV9tYXJrZXRfdmFsdWUudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIGNoYW5nZV9wZXJjZW50YWdlX2F1bTogbWYuY2hhbmdlX3BlcmNlbnRhZ2VfYXVtLnRvU3RyaW5nKClcbiAgICAgICAgfSlcbiAgICApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGNhcHRpb246ICdQYXJhZyBQYXJpa2ggTG9uZyBUZXJtIEVxdWl0eSBGdW5kJyxcbiAgICAgICAgICAgIG11dHVhbF9mdW5kczogbXV0dWFsX2Z1bmRzXG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

})