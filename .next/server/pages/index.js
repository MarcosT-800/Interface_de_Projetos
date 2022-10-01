module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_pages_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/pages/Home */ \"./src/styles/pages/Home.ts\");\nvar _jsxFileName = \"/workspace/Interface_de_Projetos/src/pages/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar RocketseatLogo = function RocketseatLogo(props) {\n  return __jsx(\"svg\", props, __jsx(\"path\", {\n    d: \"M40.004 10.805a2.945 2.945 0 0 0-2.947 2.948v12.47h2.947v-12.47h7.029v-2.948h-7.029ZM64.604 18.486v-4.761a2.945 2.945 0 0 0-2.947-2.948h-9.523a2.945 2.945 0 0 0-2.947 2.948V23.247a2.945 2.945 0 0 0 2.947 2.948h9.522a2.945 2.945 0 0 0 2.948-2.948v-4.761Zm-2.947 0v4.761h-9.523v-9.522h9.522v4.76ZM70.5 10.805a2.945 2.945 0 0 0-2.948 2.948v9.522a2.945 2.945 0 0 0 2.947 2.948l10.373-.142v-2.806H70.5V13.753h10.373v-2.806L70.5 10.805ZM97.766 10.805h-3.997l-5.838 6.207H86.77v-6.207h-2.947v15.39h2.947v-6.236h1.701l6.065 6.236h4.052l-7.793-8.05 6.972-7.34ZM102.156 23.247V19.96l12.47-.142v-6.093a2.945 2.945 0 0 0-2.947-2.948h-9.523a2.946 2.946 0 0 0-2.948 2.948V23.247a2.945 2.945 0 0 0 2.948 2.948l12.47-.142v-2.806h-12.47Zm0-9.522h9.523v3.287h-9.523v-3.287ZM122.023 6.3h-1.134l-1.814 2.238v2.24h-2.239v2.947l2.239-.029v9.551a2.945 2.945 0 0 0 2.948 2.948l4.761-.142v-2.806h-4.761v-9.58l5.186-.084v-2.806h-5.186V6.3ZM142.74 19.96a2.945 2.945 0 0 0-2.947-2.948h-7.426v-3.287h10.373v-2.806l-10.373-.142a2.945 2.945 0 0 0-2.947 2.948v3.287a2.945 2.945 0 0 0 2.947 2.948h7.426v3.287H129.42v2.806l10.373.142a2.945 2.945 0 0 0 2.947-2.948V19.96ZM158.129 10.805h-9.523a2.945 2.945 0 0 0-2.947 2.948v9.522a2.945 2.945 0 0 0 2.947 2.948l12.47-.142v-2.806h-12.47v-3.287l12.47-.142v-6.093a2.927 2.927 0 0 0-2.947-2.948Zm0 6.207h-9.523v-3.287h9.523v3.287ZM176.493 10.805l-12.47.142v2.806h12.47v3.287l-12.47.142v6.093a2.945 2.945 0 0 0 2.948 2.948h9.522a2.945 2.945 0 0 0 2.948-2.948V13.753c-.028-1.644-1.332-2.948-2.948-2.948Zm0 12.442h-9.522V19.96h9.522v3.288ZM186.814 13.668l5.186-.085v-2.806h-5.186V6.271h-1.134l-1.814 2.239v2.239h-2.239v2.947l2.239-.028v9.55a2.945 2.945 0 0 0 2.948 2.948l4.761-.141v-2.806h-4.761v-9.551Z\",\n    fill: \"#E1E1E6\"\n  }), __jsx(\"path\", {\n    d: \"m29.264.716-4.79-.708a.41.41 0 0 0-.34.085l-2.04 2.664a.649.649 0 0 0-.114.595c.057.198-.113.368-.312.34l-1.672-.369a.695.695 0 0 0-.708.256l-6.632 8.502a.435.435 0 0 1-.539.142l-2.522-1.134a.654.654 0 0 0-.68.056l-1.276.88a.705.705 0 0 1-.708.056l-.624-.312a.707.707 0 0 0-.992.454l-.453 2.012c-.113.482.085.963.51 1.218l.964.596 3.089 1.898 1.502.936c.425.255.964.198 1.332-.114l2.522-2.21c.199-.17.51-.227.737-.085l.765.396a.643.643 0 0 0 .766-.113l1.275-1.19a.651.651 0 0 1 .737-.114l1.899.879a.663.663 0 0 0 .822-.198L22.66 15l6.66-8.53a.692.692 0 0 0-.396-1.106l-1.474-.34c-.312-.057-.454-.454-.227-.68l2.296-2.863c.226-.34.085-.708-.255-.765ZM7.299 17.89c-.142-.084-.284.057-.227.199l.709 1.87a.73.73 0 0 1 .028.426l-.624 2.437c-.028.17.029.34.142.425l1.786 1.389c.17.113.396.113.538-.028l1.87-1.644c.114-.085.256-.142.37-.17l2.125-.227c.141-.028.198-.227.056-.312L7.3 17.891ZM6.676 24.182a.452.452 0 0 0-.426-.056l-1.502.737c-.085.028-.141.113-.198.198l-3.203 7.907v.057c.029.028.057.056.114.056l.737-.283h.085c.028.028.056.085.028.113l-2.296 3.77c-.056.085.057.17.114.085l8.304-8.332a.54.54 0 0 0 .141-.284l.17-2.154a.47.47 0 0 0-.141-.34l-1.927-1.474Z\",\n    fill: \"#8257E6\"\n  }));\n};\n\nRocketseatLogo.defaultProps = {\n  width: \"192\",\n  height: \"37\",\n  fill: \"none\",\n  xmlns: \"http://www.w3.org/2000/svg\"\n};\n\n\nconst Home = () => {\n  return __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, \"Homepage\")), __jsx(RocketseatLogo, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }), __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, \"Welcome $Marcos\"), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, \"Bem-Vindo\"), __jsx(\"button\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, \"Entrar\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiUm9ja2V0c2VhdExvZ28iLCJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7O0lBRU9BLGMsWUFBQUEsYzs7Ozs7Ozs7OztBQUFBQSxjOzs7Ozs7QUFFUDs7QUFFQSxNQUFNQyxJQUFjLEdBQUcsTUFBTTtBQUMzQixTQUNFLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsQ0FERixFQUtFLE1BQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQU5GLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRixFQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRixDQURGO0FBWUQsQ0FiRDs7QUFlZUEsbUVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5pbXBvcnQgUm9ja2V0c2VhdExvZ28gZnJvbSAnLi4vYXNzZXRzL3JvY2tldHNlYXQuc3ZnJ1xuXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi9zdHlsZXMvcGFnZXMvSG9tZSdcblxuY29uc3QgSG9tZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SG9tZXBhZ2U8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8Um9ja2V0c2VhdExvZ28gLz5cbiAgICAgIDxoMT5XZWxjb21lICRNYXJjb3M8L2gxPlxuICAgICAgPHA+QmVtLVZpbmRvPC9wPlxuICAgICAgPGJ1dHRvbj5FbnRyYXI8L2J1dHRvbj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/styles/pages/Home.ts":
/*!**********************************!*\
  !*** ./src/styles/pages/Home.ts ***!
  \**********************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"Home__Container\",\n  componentId: \"heizgz-0\"\n})([\"width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;flex-direction:column;h1{font-size:54px;color:\", \";margin-top:40px;}p{margin-top:24px;font-size:24px;line-height:32px;}button{border:0;width:10%;background:\", \";padding:15px 10px;}\"], props => props.theme.colors.primary, props => props.theme.colors.primary);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3BhZ2VzL0hvbWUudHM/YmY3NyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwiY29sb3JzIiwicHJpbWFyeSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLFNBQVMsR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw2UUFXVEMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsT0FYbkIsRUF3QkpILEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLE9BeEJ4QixDQUFmIiwiZmlsZSI6Ii4vc3JjL3N0eWxlcy9wYWdlcy9Ib21lLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICBoMSB7XG4gICAgZm9udC1zaXplOiA1NHB4O1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICB9XG5cbiAgcCB7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIH1cblxuICBidXR0b24ge1xuICAgIGJvcmRlcjogMDtcbiAgICB3aWR0aDogMTAlO1xuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgfVxuYFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/pages/Home.ts\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });