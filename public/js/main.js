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

eval("const toggleIcon = document.getElementsByClassName('navigation-icon')[0];\r\nconst callbackLink = document.getElementsByClassName('header__callback')[0];\r\nconst menu = document.getElementsByClassName('preview__adaptive-menu')[0];\r\nconst previewOrderBtn = document.getElementsByClassName('preview__order')[0];\r\nconst rangeInput = document.getElementsByClassName('range__input')[0];\r\nconst rangeResult = document.getElementsByClassName('range__result')[0];\r\nconst questions = document.querySelectorAll('.question__heading');\r\nconst popup = document.getElementsByClassName('popup')[0];\r\nconst popupCloseBtn = document.getElementsByClassName('popup__close')[0];\r\nconst calcLink = document.getElementsByClassName('preview__calc')[0];\r\nconst calcLink2 = document.getElementsByClassName('footer__link')[0];\r\nconst getEmployee = document.getElementsByClassName('preparation__btn')[0];\r\nconst getEmployee2 = document.getElementsByClassName('preparation__btn')[1];\r\nconst getEmployee3 = document.getElementsByClassName('footer__link')[1];\r\nconst sectionDiscussion = document.getElementsByClassName('discussion')[0]\r\nconst sectionCalculator = document.getElementsByClassName('calculator')[0];\r\nconst works = document.getElementsByClassName('works')[0];\r\nconst comments = document.getElementsByClassName('comments')[0];\r\n\r\nconst mainLink = document.getElementsByClassName('footer__link')[2];\r\nconst preparationLink = document.getElementsByClassName('footer__link')[3];\r\nconst servicesLink = document.getElementsByClassName('footer__link')[4];\r\nconst aboutLink = document.getElementsByClassName('footer__link')[5];\r\nconst contactsLink = document.getElementsByClassName('footer__link')[6];\r\n\r\nconst navigation = document.getElementsByClassName('navigation')[0].children[0].children;\r\nconst mainLink2 = navigation[0];\r\nconst servicesLink2 = navigation[1];\r\nconst aboutLink2 = navigation[2];\r\nconst linkPortfolio = navigation[3];\r\nconst contactsLink2 = navigation[4];\r\nconst linkComments = navigation[5];\r\n\r\nconst navigation2 = document.getElementsByClassName('navigation')[1].children[0].children;\r\nconst mainLink3 = navigation2[0];\r\nconst servicesLink3 = navigation2[1];\r\nconst aboutLink3 = navigation2[2];\r\nconst linkPortfolio2 = navigation2[3];\r\nconst contactsLink3 = navigation2[4];\r\nconst linkComments2 = navigation2[5];\r\n\r\nconst sectionPreview = document.getElementsByClassName('preview')[0];\r\nconst sectionPreparation = document.getElementsByClassName('preparation')[0];\r\nconst sectionServices = document.getElementsByClassName('services')[0];\r\nconst sectionAbout = document.getElementsByClassName('about')[0];\r\n\r\n\r\n// code js\r\ntoggleIcon.addEventListener('click', function (e) {\r\n    menu.classList.toggle('preview__adaptive-menu_open');\r\n    toggleIcon.classList.toggle('navigation-icon_open');\r\n});\r\n\r\ncallbackLink.addEventListener('click', function () {\r\n    sectionDiscussion.scrollIntoView({\r\n        behavior: 'smooth',\r\n        block: 'start'\r\n    })\r\n})\r\n\r\ncalcLink.addEventListener('click', function () {\r\n    sectionCalculator.scrollIntoView({\r\n        behavior: 'smooth',\r\n        block: 'start'\r\n    })\r\n})\r\n\r\ncalcLink2.addEventListener('click', function () {\r\n    sectionCalculator.scrollIntoView({\r\n        behavior: 'smooth',\r\n        block: 'start'\r\n    })\r\n})\r\n\r\npreviewOrderBtn.addEventListener('click', function () {\r\n    popup.classList.toggle('popup_open');\r\n})\r\n\r\ngetEmployee.addEventListener('click', function () {\r\n    popup.classList.toggle('popup_open');\r\n})\r\n\r\ngetEmployee2.addEventListener('click', function () {\r\n    popup.classList.toggle('popup_open');\r\n})\r\n\r\npopup.addEventListener('click', function (event) {\r\n    if (event.currentTarget === event.target) {\r\n        popup.classList.toggle('popup_open');\r\n    }\r\n})\r\n\r\npopupCloseBtn.addEventListener('click', function () {\r\n    popup.classList.toggle('popup_open');\r\n})\r\n\r\nrangeInput.addEventListener('change', function () {\r\n    rangeResult.innerHTML = this.value;\r\n})\r\n\r\nquestions.forEach((question, item) => question.addEventListener('click', function () {\r\n    console.log('click question ', item);\r\n    question.children[2].classList.toggle('question__arrow_active');\r\n    if (question.parentElement.children[1].style.maxHeight) {\r\n        question.parentElement.children[1].style.maxHeight = null;\r\n    } else {\r\n        question.parentElement.children[1].style.maxHeight = question.parentElement.children[1].scrollHeight + \"px\";\r\n    }\r\n}))\r\n\r\ngetEmployee3.addEventListener('click', function () {\r\n    sectionDiscussion.scrollIntoView({\r\n        behavior: 'smooth',\r\n        block: 'start'\r\n    })\r\n})\r\n\r\nmainLink.addEventListener('click', function () {\r\n    sectionPreview.scrollIntoView({\r\n        behavior: 'smooth',\r\n        block: 'start'\r\n    })\r\n})\r\n\r\nmainLink2.addEventListener('click', function () {\r\n    sectionPreview.scrollIntoView({\r\n        behavior: 'smooth',\r\n        block: 'start'\r\n    })\r\n})\r\n\r\nmainLink3.addEventListener('click', function () {\r\n    sectionPreview.scrollIntoView({\r\n        behavior: 'smooth',\r\n        block: 'start'\r\n    })\r\n})\r\n\r\npreparationLink.addEventListener('click', function () {\r\n    sectionPreparation.scrollIntoView({\r\n        behavior: 'smooth',\r\n        block: 'start'\r\n    })\r\n})\r\n\r\nservicesLink.addEventListener('click', function () {\r\n    sectionServices.scrollIntoView({\r\n        behavior: 'smooth',\r\n        block: 'start'\r\n    })\r\n})\r\n\r\nservicesLink2.addEventListener('click', function () {\r\n    sectionServices.scrollIntoView({\r\n        behavior: 'smooth',\r\n        block: 'start'\r\n    })\r\n})\r\n\r\nservicesLink3.addEventListener('click', function () {\r\n    sectionServices.scrollIntoView({\r\n        behavior: 'smooth',\r\n        block: 'start'\r\n    })\r\n})\r\n\r\naboutLink.addEventListener('click', function () {\r\n    sectionAbout.scrollIntoView({\r\n        behavior: 'smooth',\r\n        block: 'start'\r\n    })\r\n})\r\n\r\naboutLink2.addEventListener('click', function () {\r\n    sectionAbout.scrollIntoView({\r\n        behavior: 'smooth',\r\n        block: 'start'\r\n    })\r\n})\r\n\r\naboutLink3.addEventListener('click', function () {\r\n    sectionAbout.scrollIntoView({\r\n        behavior: 'smooth',\r\n        block: 'start'\r\n    })\r\n})\r\n\r\ncontactsLink.addEventListener('click', function () {\r\n    sectionDiscussion.scrollIntoView({\r\n        behavior: 'smooth',\r\n        block: 'start'\r\n    })\r\n})\r\n\r\ncontactsLink2.addEventListener('click', function () {\r\n    sectionDiscussion.scrollIntoView({\r\n        behavior: 'smooth',\r\n        block: 'start'\r\n    })\r\n})\r\n\r\ncontactsLink3.addEventListener('click', function () {\r\n    sectionDiscussion.scrollIntoView({\r\n        behavior: 'smooth',\r\n        block: 'start'\r\n    })\r\n})\r\n\r\nlinkPortfolio.addEventListener('click', function () {\r\n    works.scrollIntoView({\r\n        behavior: 'smooth',\r\n        block: 'start'\r\n    })\r\n})\r\n\r\nlinkPortfolio2.addEventListener('click', function () {\r\n    works.scrollIntoView({\r\n        behavior: 'smooth',\r\n        block: 'start'\r\n    })\r\n})\r\n\r\nlinkComments.addEventListener('click', function () {\r\n    comments.scrollIntoView({\r\n        behavior: 'smooth',\r\n        block: 'start'\r\n    })\r\n})\r\n\r\nlinkComments2.addEventListener('click', function () {\r\n    comments.scrollIntoView({\r\n        behavior: 'smooth',\r\n        block: 'start'\r\n    })\r\n})\r\n\r\n// модуль калькулятора\r\nconst types = document.querySelectorAll('.types');\r\n\r\ntypes.forEach(item => item.addEventListener('click', function (e) {\r\n    const list = item.children[1];\r\n    if (e.target.classList.contains('types__chips')) {\r\n        Array.prototype.forEach.call(list.children, chips => {\r\n            if (chips.classList.contains('types__chips_active')) {\r\n                chips.classList.remove('types__chips_active');\r\n            }\r\n        })\r\n        e.target.classList.add('types__chips_active');\r\n        item.children[2].value = e.target.id;\r\n    }\r\n}));\r\n\r\n\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

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