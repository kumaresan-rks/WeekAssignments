"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanaraBank = void 0;
var CanaraBank = /** @class */ (function () {
    function CanaraBank() {
    }
    CanaraBank.prototype.recordPaymentDetails = function (paymentType, amount) {
        console.log("Recording Payment Details => Mode: ".concat(paymentType, " | Amount: \u20B9").concat(amount));
    };
    return CanaraBank;
}());
exports.CanaraBank = CanaraBank;
