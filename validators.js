"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ZipCodeValidator = /** @class */ (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && ZipCodeValidator.numberRegexp.test(s);
    };
    ZipCodeValidator.numberRegexp = /^[0-9]+$/;
    return ZipCodeValidator;
}());
exports.ZipCodeValidator = ZipCodeValidator;
exports.mainValidator = ZipCodeValidator;
