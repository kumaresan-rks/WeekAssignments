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
var WebComponent = /** @class */ (function () {
    function WebComponent(selector) {
        this.selector = selector;
    }
    WebComponent.prototype.click = function () {
        console.log(" Clicking on component with selector: ".concat(this.selector));
    };
    WebComponent.prototype.focus = function () {
        console.log(" Focusing on component with selector: ".concat(this.selector));
    };
    return WebComponent;
}());
// Button class extends WebComponent
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(selector) {
        return _super.call(this, selector) || this;
    }
    Button.prototype.click = function () {
        _super.prototype.click.call(this);
        // call base class click()
        console.log(" Button-specific action performed on: ".concat(this.selector));
    };
    return Button;
}(WebComponent));
var TextInput = /** @class */ (function (_super) {
    __extends(TextInput, _super);
    function TextInput(selector) {
        var _this = _super.call(this, selector) || this;
        _this.value = "";
        return _this;
    }
    TextInput.prototype.enterText = function (text) {
        this.value = text;
        console.log(" Entering text \"".concat(this.value, "\" into input with selector: ").concat(this.selector));
    };
    return TextInput;
}(WebComponent));
function testComponents() {
    var loginButton = new Button("#login-btn");
    var usernameInput = new TextInput("#username");
    usernameInput.focus();
    usernameInput.enterText("Kumaresan");
    loginButton.click();
}
testComponents();
