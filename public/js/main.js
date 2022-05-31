/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("const toggleIcon = document.getElementsByClassName('header__nav-icon')[0];\r\nconst menu = document.getElementsByClassName('preview__adaptive-menu')[0];\r\nconst rangeInput = document.getElementsByClassName('range__input')[0];\r\nconst rangeResult = document.getElementsByClassName('range__result')[0];\r\n\r\ntoggleIcon.addEventListener('click', function (e) {\r\n    menu.classList.toggle('preview__adaptive-menu_open');\r\n});\r\n\r\nrangeInput.addEventListener('change', function(){\r\n    rangeResult.innerHTML = this.value;\r\n})\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;