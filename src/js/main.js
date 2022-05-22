class IUSREOU {
    constructor(value, options = {}) {
        let len, i;

        this.minLength = options.minLength || 8;
        this.maxLengthForValidateCheckSum = this.maxLengthForValidateCheckSum || 8;
        this.checkSum = {
            factors: [7, 1, 2, 3, 4, 5, 6],
            lowerLimit: 30000000,
            upperLimit: 60000000,
        };

        this.value = null;

        if (value instanceof IUSREOU) {
            this.value = value.value;
        } else {
            this.value = String(value).replace(/\s+/g, '');
            len = this.value.length;

            /**
             * Если код не пустой, содержит не только 0 и меньшей длинны, чем минимальная, то добавим
             * вначало необходимое кол-во 0.
             */
            if (len && this.value != 0 && len < this.minLength) {
                for (i = this.minLength - len; i > 0; i--) {
                    this.value = '0' + this.value;
                }
            }
        }

        if (!this.validate()) {
            this.value = null;
        }

        return this;
    }

    validate() {
        const length = (this.value && this.value.length) || 0;

        return !!(
            length &&
            /^[0-9]+$/.test(this.value) &&
            /**
             * все нули.
             * Но существует счет 000000000
             */
            (+this.value != 0 || length >= 9) &&
            /**
             * валидируем по контрольной сумме только значение с длинной maxLengthForValidateCheckSum
             */
            (length > this.maxLengthForValidateCheckSum || this._isValidCheckSum())
        );
    }

    toString() {
        return this.value || '';
    }

    /**
     * @description Правильная ли контрольная сумма
     * @return {boolean}
     * @private
     */
    _isValidCheckSum() {
        const factors = this.checkSum.factors,
            lowerLimit = this.checkSum.lowerLimit,
            upperLimit = this.checkSum.upperLimit,
            len = factors.length,
            value = this.value;
        let result = false,
            sum = 0,
            i,
            /**
             * в подсчете учавствуют не все цифры
             */
            factor,
            lastDigit,
            modulo;

        if (!isNaN(value)) {
            lastDigit = value[value.length - 1];

            for (i = 0; i < len; i++) {
                if (value > lowerLimit && value < upperLimit) {
                    factor = factors[i];
                } else {
                    factor = i + 1;
                }

                sum += value[i] * factor;
            }

            modulo = sum % 11;

            if (modulo > 10) {
                sum = 0;

                for (i = 0; i < len; i++) {
                    if (value > lowerLimit && value < upperLimit) {
                        factor = factors[i] + 2;
                    } else {
                        factor = i + 1 + 2;
                    }

                    sum += value[i] * factor;
                }

                modulo = sum % 11;
            }

            if (modulo === 10) {
                result = true;
            } else {
                /**
                 * @description Результат деления должен совпадать с последней цифрой
                 * @type {boolean}
                 */
                result = modulo == lastDigit;
            }
        }

        return result;
    }
}

const result = IUSREOU('14360570');
console.log('validate: ', result.validate())
console.log('toString: ', result.toString())