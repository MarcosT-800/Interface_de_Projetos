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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_pages_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/pages/Home */ \"./src/styles/pages/Home.ts\");\nvar _jsxFileName = \"/workspace/Interface_de_Projetos/src/pages/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Imagem = function Imagem(props) {\n  return __jsx(\"svg\", props, __jsx(\"path\", {\n    d: \"M40.004 10.805a2.945 2.945 0 0 0-2.947 2.948v12.47h2.947v-12.47h7.029v-2.948h-7.029ZM64.604 18.486v-4.761a2.945 2.945 0 0 0-2.947-2.948h-9.523a2.945 2.945 0 0 0-2.947 2.948V23.247a2.945 2.945 0 0 0 2.947 2.948h9.522a2.945 2.945 0 0 0 2.948-2.948v-4.761Zm-2.947 0v4.761h-9.523v-9.522h9.522v4.76ZM70.5 10.805a2.945 2.945 0 0 0-2.948 2.948v9.522a2.945 2.945 0 0 0 2.947 2.948l10.373-.142v-2.806H70.5V13.753h10.373v-2.806L70.5 10.805ZM97.766 10.805h-3.997l-5.838 6.207H86.77v-6.207h-2.947v15.39h2.947v-6.236h1.701l6.065 6.236h4.052l-7.793-8.05 6.972-7.34ZM102.156 23.247V19.96l12.47-.142v-6.093a2.945 2.945 0 0 0-2.947-2.948h-9.523a2.946 2.946 0 0 0-2.948 2.948V23.247a2.945 2.945 0 0 0 2.948 2.948l12.47-.142v-2.806h-12.47Zm0-9.522h9.523v3.287h-9.523v-3.287ZM122.023 6.3h-1.134l-1.814 2.238v2.24h-2.239v2.947l2.239-.029v9.551a2.945 2.945 0 0 0 2.948 2.948l4.761-.142v-2.806h-4.761v-9.58l5.186-.084v-2.806h-5.186V6.3ZM142.74 19.96a2.945 2.945 0 0 0-2.947-2.948h-7.426v-3.287h10.373v-2.806l-10.373-.142a2.945 2.945 0 0 0-2.947 2.948v3.287a2.945 2.945 0 0 0 2.947 2.948h7.426v3.287H129.42v2.806l10.373.142a2.945 2.945 0 0 0 2.947-2.948V19.96ZM158.129 10.805h-9.523a2.945 2.945 0 0 0-2.947 2.948v9.522a2.945 2.945 0 0 0 2.947 2.948l12.47-.142v-2.806h-12.47v-3.287l12.47-.142v-6.093a2.927 2.927 0 0 0-2.947-2.948Zm0 6.207h-9.523v-3.287h9.523v3.287ZM176.493 10.805l-12.47.142v2.806h12.47v3.287l-12.47.142v6.093a2.945 2.945 0 0 0 2.948 2.948h9.522a2.945 2.945 0 0 0 2.948-2.948V13.753c-.028-1.644-1.332-2.948-2.948-2.948Zm0 12.442h-9.522V19.96h9.522v3.288ZM186.814 13.668l5.186-.085v-2.806h-5.186V6.271h-1.134l-1.814 2.239v2.239h-2.239v2.947l2.239-.028v9.55a2.945 2.945 0 0 0 2.948 2.948l4.761-.141v-2.806h-4.761v-9.551Z\",\n    fill: \"#E1E1E6\"\n  }), __jsx(\"path\", {\n    d: \"m29.264.716-4.79-.708a.41.41 0 0 0-.34.085l-2.04 2.664a.649.649 0 0 0-.114.595c.057.198-.113.368-.312.34l-1.672-.369a.695.695 0 0 0-.708.256l-6.632 8.502a.435.435 0 0 1-.539.142l-2.522-1.134a.654.654 0 0 0-.68.056l-1.276.88a.705.705 0 0 1-.708.056l-.624-.312a.707.707 0 0 0-.992.454l-.453 2.012c-.113.482.085.963.51 1.218l.964.596 3.089 1.898 1.502.936c.425.255.964.198 1.332-.114l2.522-2.21c.199-.17.51-.227.737-.085l.765.396a.643.643 0 0 0 .766-.113l1.275-1.19a.651.651 0 0 1 .737-.114l1.899.879a.663.663 0 0 0 .822-.198L22.66 15l6.66-8.53a.692.692 0 0 0-.396-1.106l-1.474-.34c-.312-.057-.454-.454-.227-.68l2.296-2.863c.226-.34.085-.708-.255-.765ZM7.299 17.89c-.142-.084-.284.057-.227.199l.709 1.87a.73.73 0 0 1 .028.426l-.624 2.437c-.028.17.029.34.142.425l1.786 1.389c.17.113.396.113.538-.028l1.87-1.644c.114-.085.256-.142.37-.17l2.125-.227c.141-.028.198-.227.056-.312L7.3 17.891ZM6.676 24.182a.452.452 0 0 0-.426-.056l-1.502.737c-.085.028-.141.113-.198.198l-3.203 7.907v.057c.029.028.057.056.114.056l.737-.283h.085c.028.028.056.085.028.113l-2.296 3.77c-.056.085.057.17.114.085l8.304-8.332a.54.54 0 0 0 .141-.284l.17-2.154a.47.47 0 0 0-.141-.34l-1.927-1.474Z\",\n    fill: \"#8257E6\"\n  }));\n};\n\nImagem.defaultProps = {\n  width: \"192\",\n  height: \"37\",\n  fill: \"none\",\n  xmlns: \"http://www.w3.org/2000/svg\"\n};\n\n\nconst Home = () => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_2__[\"Header\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, __jsx(\"img\", {\n    className: \"spinner\",\n    src: \"https://o.remove.bg/downloads/3d30b416-a2c9-4f88-8108-0c64c022fb4b/tribal-removebg-preview.png\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }), __jsx(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 6\n    }\n  })), __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, \"Projetos\")), __jsx(Imagem, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }), __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, \"Welcome $Marcos\"), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, \"Bem-Vindo\"), __jsx(\"div\", {\n    className: \"container\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"card1\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"content\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 12\n    }\n  }, \"REDES\"), __jsx(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 12\n    }\n  }, \"REDES SOCIAIS\"), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 12\n    }\n  }, \"Clique aqui para Verificar suas Redes Sociais\"), __jsx(\"a\", {\n    href: \"#\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 12\n    }\n  }, \"Entrar\"))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiSW1hZ2VtIiwiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztJQUNPQSxNLFlBQUFBLE07Ozs7Ozs7Ozs7QUFBQUEsTTs7Ozs7O0FBQ1A7O0FBR0EsTUFBTUMsSUFBYyxHQUFHLE1BQU07QUFDM0IsU0FDRixtRUFDSSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQXlCLE9BQUcsRUFBQyxnR0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZELENBREosRUFLSSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBREYsRUFLRSxNQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFORixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEYsRUFRRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRjtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREgsRUFFRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZILEVBR0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxREFISCxFQUlHO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpILENBREosQ0FERSxDQVJGLENBTEosQ0FERTtBQTJCRCxDQTVCRDs7QUE4QmVBLG1FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2VtIGZyb20gJy4uL2Fzc2V0cy9yb2NrZXRzZWF0LnN2ZydcbmltcG9ydCB7IENvbnRhaW5lciwgSGVhZGVyIH0gZnJvbSAnLi4vc3R5bGVzL3BhZ2VzL0hvbWUnXG5cblxuY29uc3QgSG9tZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG48PlxuICAgIDxIZWFkZXI+XG4gICAgICA8aW1nIGNsYXNzTmFtZT1cInNwaW5uZXJcIiBzcmM9XCJodHRwczovL28ucmVtb3ZlLmJnL2Rvd25sb2Fkcy8zZDMwYjQxNi1hMmM5LTRmODgtODEwOC0wYzY0YzAyMmZiNGIvdHJpYmFsLXJlbW92ZWJnLXByZXZpZXcucG5nXCIgLz5cbiAgICAgPGxhYmVsPjwvbGFiZWw+XG4gICAgPC9IZWFkZXI+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UHJvamV0b3M8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8SW1hZ2VtIC8+XG4gICAgICA8aDE+V2VsY29tZSAkTWFyY29zPC9oMT5cbiAgICAgIDxwPkJlbS1WaW5kbzwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkMVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICBcdCAgIDxoMj5SRURFUzwvaDI+XG4gICAgICAgXHQgICA8aDM+UkVERVMgU09DSUFJUzwvaDM+XG4gICAgICAgXHQgICA8cD5DbGlxdWUgYXF1aSBwYXJhIFZlcmlmaWNhciBzdWFzIFJlZGVzIFNvY2lhaXM8L3A+XG4gICAgICAgXHQgICA8YSBocmVmPVwiI1wiPkVudHJhcjwvYT5cbiAgICAgICA8L2Rpdj5cdFx0XG5cdDwvZGl2PlxuPC9kaXY+XG4gICAgPC9Db250YWluZXI+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/styles/pages/Home.ts":
/*!**********************************!*\
  !*** ./src/styles/pages/Home.ts ***!
  \**********************************/
/*! exports provided: Container, Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"Home__Container\",\n  componentId: \"heizgz-0\"\n})([\"width:100vw;height:95vh;margin-top:5vw;display:flex;justify-content:center;align-items:center;flex-direction:column;h1{font-size:54px;color:\", \";margin-top:40px;}p{margin-top:24px;font-size:24px;line-height:32px;}.container{position:relative;display:flex;justify-content:center;align-items:center;max-width:1200px;flex-wrap:wrap;z-index:1;}.container .card1{position:70;width:350px;height:300px;margin:30px;box-shadow:20px 20px 50px rgba(0,0,0,0.5);border-radius:15px;background:rgba(255,255,255,0.1);overflow:hidden;display:flex;justify-content:center;align-items:center;border-top:1px solid rgba(255,255,255,0.5);border-left:1px solid rgba(255,255,255,0.5);}.container .card1 .content{padding:20px;text-align:center;transform:translateY(100px);opacity:0;transition:0.5s;}.container .card1:hover .content{transform:translateY(0px);opacity:1;}.container .card1 .content h2{position:absolute;top:-80px;right:30px;font-size:8em;color:rgba(255,255,255,0.05);pointer-events:none;}.container .card1 .content h3{font-size:1.8em;color:#fff;z-index:1;}.container .card1 .content p{font-size:1em;color:#fff;font-weight:300;}.container .card1 .content a{position:relative;display:inline-block;padding:8px 20px;margin-top:15px;background:#FFF;color:#000;text-decoration:none;border-radius:20px;font-weight:500;box-shadow:0 5px 15px rgba(0,0,0,0.2);}\"], props => props.theme.colors.primary);\nconst Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"Home__Header\",\n  componentId: \"heizgz-1\"\n})([\"width:100vw;height:7vh;background:white;display:flex;justify-content:space-between;img:hover{transform:rotate(360deg);transition-duration:1s;animation:spinner .6s linear infinite;}@keyframes spinner{to{traform:rotate(360deg);}}\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3BhZ2VzL0hvbWUudHM/YmY3NyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwiY29sb3JzIiwicHJpbWFyeSIsIkhlYWRlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUEsU0FBUyxHQUFHQyx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG0wQ0FXVEMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsT0FYbkIsQ0FBZjtBQThGRSxNQUFNQyxNQUFNLEdBQUdOLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMk9BQVoiLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3BhZ2VzL0hvbWUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDk1dmg7XG4gIG1hcmdpbi10b3A6IDV2dztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogNTRweDtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICB9XG5cbiAgLmNvbnRhaW5lcntcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0bWF4LXdpZHRoOiAxMjAwcHg7XG5cdGZsZXgtd3JhcDogd3JhcDtcblx0ei1pbmRleDogMTtcbn1cblxuLmNvbnRhaW5lciAuY2FyZDF7XG5cdHBvc2l0aW9uOiA3MDtcblx0d2lkdGg6IDM1MHB4Oy8qQSBsYXJndXJhIGRvcyBjYXJkcyovXG5cdGhlaWdodDogMzAwcHg7LyphbHR1cmEgZG9zIGNhcmRzKi9cblx0bWFyZ2luOiAzMHB4O1xuXHRib3gtc2hhZG93OiAyMHB4IDIwcHggNTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7IFxuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG4uY29udGFpbmVyIC5jYXJkMSAuY29udGVudHtcblx0cGFkZGluZzogMjBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpO1xuXHRvcGFjaXR5OiAwO1xuXHR0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uY29udGFpbmVyIC5jYXJkMTpob3ZlciAuY29udGVudHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uY29udGFpbmVyIC5jYXJkMSAuY29udGVudCBoMiB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAtODBweDtcblx0cmlnaHQ6IDMwcHg7XG5cdGZvbnQtc2l6ZTogOGVtO1xuXHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5jb250YWluZXIgLmNhcmQxIC5jb250ZW50IGgzIHtcbiAgZm9udC1zaXplOiAxLjhlbTtcbiAgY29sb3I6ICNmZmY7XG4gIHotaW5kZXg6IDE7XG59XG4uY29udGFpbmVyIC5jYXJkMSAuY29udGVudCBwIHtcblx0Zm9udC1zaXplOiAxZW07XG5cdGNvbG9yOiAjZmZmO1xuXHRmb250LXdlaWdodDogMzAwO1xufVxuXG4uY29udGFpbmVyIC5jYXJkMSAuY29udGVudCBhe1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0cGFkZGluZzogOHB4IDIwcHg7XG5cdG1hcmdpbi10b3A6IDE1cHg7XG5cdGJhY2tncm91bmQ6ICNGRkY7XG5cdGNvbG9yOiAjMDAwO1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuXG59XG4gIGBcblxuICBleHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiA3dmg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cblxuICAgICBpbWc6aG92ZXIge1xuICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgICAgYW5pbWF0aW9uOiBzcGlubmVyIC42cyBsaW5lYXIgaW5maW5pdGU7XG5cbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIHNwaW5uZXIge1xuICAgICAgdG8ge3RyYWZvcm06IHJvdGF0ZSgzNjBkZWcpO31cbiAgICB9XG5cbmBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/pages/Home.ts\n");

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