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

eval("const toggleIcon = document.getElementsByClassName('navigation-icon')[0];\r\nconst callbackLink = document.getElementsByClassName('header__callback')[0];\r\nconst menu = document.getElementsByClassName('preview__adaptive-menu')[0];\r\nconst previewOrderBtn = document.getElementsByClassName('preview__order')[0];\r\nconst rangeInput = document.getElementsByClassName('range__input')[0];\r\nconst rangeResult = document.getElementsByClassName('range__result')[0];\r\nconst questions = document.querySelectorAll('.question__heading');\r\nconst popup = document.getElementsByClassName('popup')[0];\r\nconst popupCloseBtn = document.getElementsByClassName('popup__close')[0];\r\nconst calcLink = document.getElementsByClassName('preview__calc')[0];\r\nconst calcLink2 = document.getElementsByClassName('footer__link')[0];\r\nconst getEmployee = document.getElementsByClassName('preparation__btn')[0];\r\nconst getEmployee2 = document.getElementsByClassName('preparation__btn')[1];\r\nconst sectionDiscussion = document.getElementsByClassName('discussion')[0]\r\nconst sectionCalculator = document.getElementsByClassName('calculator')[0];\r\n\r\ntoggleIcon.addEventListener('click', function (e) {\r\n    menu.classList.toggle('preview__adaptive-menu_open');\r\n    toggleIcon.classList.toggle('navigation-icon_open');\r\n});\r\n\r\ncallbackLink.addEventListener('click', function () {\r\n    sectionDiscussion.scrollIntoView({\r\n        behavior: 'smooth',\r\n        block: 'start'\r\n    })\r\n})\r\n\r\ncalcLink.addEventListener('click', function () {\r\n    sectionCalculator.scrollIntoView({\r\n        behavior: 'smooth',\r\n        block: 'start'\r\n    })\r\n})\r\n\r\ncalcLink2.addEventListener('click', function () {\r\n    sectionCalculator.scrollIntoView({\r\n        behavior: 'smooth',\r\n        block: 'start'\r\n    })\r\n})\r\n\r\npreviewOrderBtn.addEventListener('click', function () {\r\n    popup.classList.toggle('popup_open');\r\n})\r\n\r\ngetEmployee.addEventListener('click', function () {\r\n    popup.classList.toggle('popup_open');\r\n})\r\n\r\ngetEmployee2.addEventListener('click', function () {\r\n    popup.classList.toggle('popup_open');\r\n})\r\n\r\npopup.addEventListener('click', function (event) {\r\n    if (event.currentTarget === event.target) {\r\n        popup.classList.toggle('popup_open');\r\n    }\r\n})\r\n\r\npopupCloseBtn.addEventListener('click', function () {\r\n    popup.classList.toggle('popup_open');\r\n})\r\n\r\nrangeInput.addEventListener('change', function () {\r\n    rangeResult.innerHTML = this.value;\r\n})\r\n\r\nquestions.forEach((question, item) => question.addEventListener('click', function () {\r\n    console.log('click question ', item);\r\n    question.children[2].classList.toggle('question__arrow_active');\r\n    if (question.parentElement.children[1].style.maxHeight) {\r\n        question.parentElement.children[1].style.maxHeight = null;\r\n    } else {\r\n        question.parentElement.children[1].style.maxHeight = question.parentElement.children[1].scrollHeight + \"px\";\r\n    }\r\n}))\r\n\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

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