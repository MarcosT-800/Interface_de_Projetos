webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Navegator/index.tsx":
/*!********************************************!*\
  !*** ./src/components/Navegator/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ \"./src/components/Navegator/style.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/workspace/Interface_de_Projetos/src/components/Navegator/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Home = function Home() {\n  var list = document.querySelectorAll('.navigation li');\n\n  function activeLink() {\n    list.forEach(function (item) {\n      return item.classList.remove('active');\n    });\n    this.classList.add('active');\n  }\n\n  list.forEach(function (item) {\n    return item.addEventListener('click', activeLink);\n  });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_style__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_1__[\"Navigation\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 12\n    }\n  }, __jsx(\"body\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 12\n    }\n  }, __jsx(\"ul\", {\n    className: \"navigation\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 14\n    }\n  }, __jsx(\"li\", {\n    className: \"active\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    href: \"1section\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 21\n    }\n  }, __jsx(\"span\", {\n    className: \"icon\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 25\n    }\n  }), __jsx(\"span\", {\n    className: \"text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 25\n    }\n  }, \"Home\"))), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    href: \"#\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 21\n    }\n  }, __jsx(\"span\", {\n    className: \"icon\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 25\n    }\n  }), __jsx(\"span\", {\n    className: \"text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 25\n    }\n  }, \"Profile\"))), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    href: \"#\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 21\n    }\n  }, __jsx(\"span\", {\n    className: \"icon\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 25\n    }\n  }), __jsx(\"span\", {\n    className: \"text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 25\n    }\n  }, \"Messages\"))), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    href: \"#\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 21\n    }\n  }, __jsx(\"span\", {\n    className: \"icon\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 25\n    }\n  }), __jsx(\"span\", {\n    className: \"text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 25\n    }\n  }, \"Outros\"))))))));\n};\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2ZWdhdG9yL2luZGV4LnRzeD9iOTI3Il0sIm5hbWVzIjpbIkhvbWUiLCJsaXN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWN0aXZlTGluayIsImZvckVhY2giLCJpdGVtIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUdBOztBQUdBLElBQU1BLElBQWMsR0FBRyxTQUFqQkEsSUFBaUIsR0FBTTtBQUN6QixNQUFJQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsZ0JBQTFCLENBQVg7O0FBRUosV0FBU0MsVUFBVCxHQUFzQjtBQUNsQkgsUUFBSSxDQUFDSSxPQUFMLENBQWEsVUFBQ0MsSUFBRDtBQUFBLGFBQ2JBLElBQUksQ0FBQ0MsU0FBTCxDQUFlQyxNQUFmLENBQXNCLFFBQXRCLENBRGE7QUFBQSxLQUFiO0FBRUEsU0FBS0QsU0FBTCxDQUFlRSxHQUFmLENBQW1CLFFBQW5CO0FBQ0g7O0FBRURSLE1BQUksQ0FBQ0ksT0FBTCxDQUFhLFVBQUNDLElBQUQ7QUFBQSxXQUNiQSxJQUFJLENBQUNJLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCTixVQUEvQixDQURhO0FBQUEsR0FBYjtBQUVFLFNBQ0YsbUVBQ1EsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHO0FBQUksYUFBUyxFQUFDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsUUFBSSxFQUFDLFVBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU0sYUFBUyxFQUFDLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQU0sYUFBUyxFQUFDLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixDQURKLENBREgsRUFTRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTSxhQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBTSxhQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLENBREosQ0FUSCxFQWlCRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUk7QUFBTSxhQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0k7QUFBTSxhQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISixDQURKLENBakJILEVBMEJHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFNLGFBQVMsRUFBQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFNLGFBQVMsRUFBQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosQ0FESixDQTFCSCxDQURGLENBREEsQ0FESCxDQURSLENBREU7QUE4Q0QsQ0F6REQ7O0tBQU1KLEk7QUEyRFNBLG1FQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTmF2ZWdhdG9yL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2VtIGZyb20gJy4uL2Fzc2V0cy9yb2NrZXRzZWF0LnN2ZydcbmltcG9ydCB7IENvbnRhaW5lciwgTmF2aWdhdGlvbiB9IGZyb20gJy4vc3R5bGUnXG5cblxuY29uc3QgSG9tZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgbGV0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2aWdhdGlvbiBsaScpO1xuXG5mdW5jdGlvbiBhY3RpdmVMaW5rKCkge1xuICAgIGxpc3QuZm9yRWFjaCgoaXRlbSkgPT5cbiAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufVxuXG5saXN0LmZvckVhY2goKGl0ZW0pID0+XG5pdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWN0aXZlTGluaykpXG4gIHJldHVybiAoXG48PlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICA8TmF2aWdhdGlvbj5cbiAgICAgICAgICAgPGJvZHk+XG4gICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIxc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHRcIj5Ib21lPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHRcIj5Qcm9maWxlPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuIFxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHRcIj5NZXNzYWdlczwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCI+T3V0cm9zPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgPC9ib2R5PlxuICAgICAgICAgICA8L05hdmlnYXRpb24+XG4gICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Navegator/index.tsx\n");

/***/ })

})