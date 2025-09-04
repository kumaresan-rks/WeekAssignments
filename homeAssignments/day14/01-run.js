"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Amazon = void 0;
var _01_absract_1 = require("./01-absract");
var Amazon = /** @class */ (function (_super) {
    __extends(Amazon, _super);
    function Amazon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Amazon.prototype.cashOnDelivery = function () {
        console.log("Payment done use ing Cash on Delivery.");
        this.recordPaymentDetails("Cash on Delivery is", 100);
    };
    Amazon.prototype.upiPayments = function () {
        console.log("Payment done using UPI.");
        this.recordPaymentDetails("UPI Payment is", 50);
    };
    Amazon.prototype.cardPayments = function () {
        console.log("Payment done using Card.");
        this.recordPaymentDetails("Card Payment is", 10);
    };
    Amazon.prototype.internetBanking = function () {
        console.log("Payment done using Internet Banking.");
        this.recordPaymentDetails("Internet Banking is ", 5);
    };
    return Amazon;
}(_01_absract_1.CanaraBank));
exports.Amazon = Amazon;
var order = new Amazon();
order.cashOnDelivery();
order.upiPayments();
order.cardPayments();
order.internetBanking();
