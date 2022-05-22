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

eval("class IUSREOU {\r\n    constructor(value, options = {}) {\r\n        let len, i;\r\n\r\n        this.minLength = options.minLength || 8;\r\n        this.maxLengthForValidateCheckSum = this.maxLengthForValidateCheckSum || 8;\r\n        this.checkSum = {\r\n            factors: [7, 1, 2, 3, 4, 5, 6],\r\n            lowerLimit: 30000000,\r\n            upperLimit: 60000000,\r\n        };\r\n\r\n        this.value = null;\r\n\r\n        if (value instanceof IUSREOU) {\r\n            this.value = value.value;\r\n        } else {\r\n            this.value = String(value).replace(/\\s+/g, '');\r\n            len = this.value.length;\r\n\r\n            /**\r\n             * Если код не пустой, содержит не только 0 и меньшей длинны, чем минимальная, то добавим\r\n             * вначало необходимое кол-во 0.\r\n             */\r\n            if (len && this.value != 0 && len < this.minLength) {\r\n                for (i = this.minLength - len; i > 0; i--) {\r\n                    this.value = '0' + this.value;\r\n                }\r\n            }\r\n        }\r\n\r\n        if (!this.validate()) {\r\n            this.value = null;\r\n        }\r\n\r\n        return this;\r\n    }\r\n\r\n    validate() {\r\n        const length = (this.value && this.value.length) || 0;\r\n\r\n        return !!(\r\n            length &&\r\n            /^[0-9]+$/.test(this.value) &&\r\n            /**\r\n             * все нули.\r\n             * Но существует счет 000000000\r\n             */\r\n            (+this.value != 0 || length >= 9) &&\r\n            /**\r\n             * валидируем по контрольной сумме только значение с длинной maxLengthForValidateCheckSum\r\n             */\r\n            (length > this.maxLengthForValidateCheckSum || this._isValidCheckSum())\r\n        );\r\n    }\r\n\r\n    toString() {\r\n        return this.value || '';\r\n    }\r\n\r\n    /**\r\n     * @description Правильная ли контрольная сумма\r\n     * @return {boolean}\r\n     * @private\r\n     */\r\n    _isValidCheckSum() {\r\n        const factors = this.checkSum.factors,\r\n            lowerLimit = this.checkSum.lowerLimit,\r\n            upperLimit = this.checkSum.upperLimit,\r\n            len = factors.length,\r\n            value = this.value;\r\n        let result = false,\r\n            sum = 0,\r\n            i,\r\n            /**\r\n             * в подсчете учавствуют не все цифры\r\n             */\r\n            factor,\r\n            lastDigit,\r\n            modulo;\r\n\r\n        if (!isNaN(value)) {\r\n            lastDigit = value[value.length - 1];\r\n\r\n            for (i = 0; i < len; i++) {\r\n                if (value > lowerLimit && value < upperLimit) {\r\n                    factor = factors[i];\r\n                } else {\r\n                    factor = i + 1;\r\n                }\r\n\r\n                sum += value[i] * factor;\r\n            }\r\n\r\n            modulo = sum % 11;\r\n\r\n            if (modulo > 10) {\r\n                sum = 0;\r\n\r\n                for (i = 0; i < len; i++) {\r\n                    if (value > lowerLimit && value < upperLimit) {\r\n                        factor = factors[i] + 2;\r\n                    } else {\r\n                        factor = i + 1 + 2;\r\n                    }\r\n\r\n                    sum += value[i] * factor;\r\n                }\r\n\r\n                modulo = sum % 11;\r\n            }\r\n\r\n            if (modulo === 10) {\r\n                result = true;\r\n            } else {\r\n                /**\r\n                 * @description Результат деления должен совпадать с последней цифрой\r\n                 * @type {boolean}\r\n                 */\r\n                result = modulo == lastDigit;\r\n            }\r\n        }\r\n\r\n        return result;\r\n    }\r\n}\r\n\r\nconst result = IUSREOU('14360570');\r\nconsole.log('validate: ', result.validate())\r\nconsole.log('toString: ', result.toString())\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

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