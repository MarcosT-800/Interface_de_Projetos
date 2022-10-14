webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Navegator/style.ts":
/*!*******************************************!*\
  !*** ./src/components/Navegator/style.ts ***!
  \*******************************************/
/*! exports provided: Container, Navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Navigation\", function() { return Navigation; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"style__Container\",\n  componentId: \"sc-8a6es7-0\"\n})([\"margin:0;padding:0;box-sizing:border-box;font-family:'Poppins',sans-serif;display:flex;justify-content:center;align-items:center;min-height:100vh;\"]);\nvar Navigation = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"style__Navigation\",\n  componentId: \"sc-8a6es7-1\"\n})([\"  .navigation{position:fixed;width:550px;height:120px;box-shadow:25px 25px 25px rgba(0,0,0,0.25),10px 10px 70px rgba(0,0,0,0.25),inset 5px 5px 10px rgba(0,0,0,0.5),inset 5px 5px 20px rgba(255,255,255,0.2),inset -5px -5px 15px rgba(0,0,0,0.75);border-radius:30px;display:flex;justify-content:center;align-items:center;}.navigation li{position:relative;list-style:none;justify-content:center;flex-direction:column;text-decoration:none;margin:60px;}.navigation li::before{content:'';position:absolute;top:40px;margin-left:30px;transform:translateX(-50%);width:5px;height:5px;background:#222;border-radius:50%;transition:0.5s;}.navigation li.active::before{background:#0f0;box-shadow:0 0 5px #0f0,0 0 10px #0f0,0 0 20px #0f0,0 0 30px #0f0,0 0 40px #0f0,0 0 50px #0f0;}.navigation li a .icon{position:absolute;font-size:1.75em;width:80px;height:80px;top:-30px;left:-10px;display:flex;justify-content:center;align-items:center;color:white;border-radius:50%;transition-delay:0.2s;}.navigation li.active a .icon{background:#29fd53;color:white;transform:translateY(-55px);box-shadow:5px 5px 7px rgba(0,0,0,0.25),inset 2px 2px 3px rgba(255,255,255,0.25),inset -3px -3px 5px rgba(0,0,0,0.5);}.navigation li a .icon:before{content:'';position:absolute;inset:10px;background:#2f363e;border-radius:50%;box-shadow:5px 5px 5px rgba(0,0,0,0.5),inset 2px 2px 3px rgba(255,255,255,0.25),inset -3px -3px 5px rgba(0,0,0,0.5);transform:scale(0);transition:0.5s;}.navigation li.active a .icon:before{transform:scale(1);}.navigation li a .text{position:absolute;font-size:0.75em;color:black;transform:translateY(20px);padding:2px 10px;background:white;border-radius:15px;box-shadow:5px 5px 7px rgba(0,0,0,0,25),inset -3px -3px 5px rgba(0,0,0,0.5);}.navigation li.active a .text{opacity:1;transform:translateY(10px);transition-delay:0.2s;}\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2ZWdhdG9yL3N0eWxlLnRzP2U5YjMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiTmF2aWdhdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwwSkFBZjtBQVdBLElBQU1DLFVBQVUsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw4eERBQWhCIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTmF2ZWdhdG9yL3N0eWxlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuYFxuXG5leHBvcnQgY29uc3QgTmF2aWdhdGlvbiA9IHN0eWxlZC5kaXZgIFxuLm5hdmlnYXRpb24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogNTUwcHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBib3gtc2hhZG93OiAyNXB4IDI1cHggMjVweCByZ2JhKDAsMCwwLDAuMjUpLCBcbiAgICAxMHB4IDEwcHggNzBweCByZ2JhKDAsMCwwLDAuMjUpLFxuICAgIGluc2V0IDVweCA1cHggMTBweCByZ2JhKDAsMCwwLDAuNSksXG4gICAgaW5zZXQgNXB4IDVweCAyMHB4IHJnYmEoMjU1LDI1NSwyNTUsMC4yKSxcbiAgICBpbnNldCAtNXB4IC01cHggMTVweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubmF2aWdhdGlvbiBsaSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbWFyZ2luOiA2MHB4O1xufVxuXG4ubmF2aWdhdGlvbiBsaTo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB3aWR0aDogNXB4O1xuICAgIGhlaWdodDogNXB4O1xuICAgIGJhY2tncm91bmQ6ICMyMjI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5uYXZpZ2F0aW9uIGxpLmFjdGl2ZTo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kOiAjMGYwO1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggIzBmMCxcbiAgICAwIDAgMTBweCAjMGYwLFxuICAgIDAgMCAyMHB4ICMwZjAsXG4gICAgMCAwIDMwcHggIzBmMCxcbiAgICAwIDAgNDBweCAjMGYwLFxuICAgIDAgMCA1MHB4ICMwZjA7XG5cblxufVxuXG4ubmF2aWdhdGlvbiBsaSBhIC5pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1zaXplOiAxLjc1ZW07XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHRvcDogLTMwcHg7XG4gICAgbGVmdDogLTEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcblxufVxuXG4ubmF2aWdhdGlvbiBsaS5hY3RpdmUgYSAuaWNvbiB7XG4gICAgYmFja2dyb3VuZDogIzI5ZmQ1MztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01NXB4KTtcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDdweCByZ2JhKDAsMCwwLDAuMjUpLFxuICAgIGluc2V0IDJweCAycHggM3B4IHJnYmEoMjU1LDI1NSwyNTUsMC4yNSksXG4gICAgaW5zZXQgLTNweCAtM3B4IDVweCByZ2JhKDAsMCwwLDAuNSk7XG59XG5cbi5uYXZpZ2F0aW9uIGxpIGEgLmljb246YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaW5zZXQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogIzJmMzYzZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgwLDAsMCwwLjUpLFxuICAgIGluc2V0IDJweCAycHggM3B4IHJnYmEoMjU1LDI1NSwyNTUsMC4yNSksXG4gICAgaW5zZXQgLTNweCAtM3B4IDVweCByZ2JhKDAsMCwwLDAuNSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4ubmF2aWdhdGlvbiBsaS5hY3RpdmUgYSAuaWNvbjpiZWZvcmUge1xuICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLm5hdmlnYXRpb24gbGkgYSAudGV4dHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1zaXplOiAwLjc1ZW07XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgICBwYWRkaW5nOiAycHggMTBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggN3B4IHJnYmEoMCwwLDAsMCwyNSksXG4gICAgaW5zZXQgLTNweCAtM3B4IDVweCByZ2JhKDAsMCwwLDAuNSk7XG59XG5cbi5uYXZpZ2F0aW9uIGxpLmFjdGl2ZSBhIC50ZXh0IHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xufVxuICBcbmBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Navegator/style.ts\n");

/***/ })

})