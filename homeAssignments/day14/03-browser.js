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
var Browser = /** @class */ (function () {
    function Browser(browserName, browserVersion) {
        this.browserName = browserName;
        this.browserVersion = browserVersion;
    }
    Browser.prototype.openURL = function (url) {
        console.log(" Opening ".concat(url, " in ").concat(this.browserName, " v").concat(this.browserVersion));
    };
    Browser.prototype.closeBrowser = function () {
        console.log(" Closing ".concat(this.browserName, " browser"));
    };
    Browser.prototype.navigateBack = function () {
        console.log(" Navigating back in ".concat(this.browserName));
    };
    return Browser;
}());
var Chrome = /** @class */ (function (_super) {
    __extends(Chrome, _super);
    function Chrome(version) {
        return _super.call(this, "Chrome", version) || this;
    }
    Chrome.prototype.openIncognito = function () {
        console.log(" Opening Chrome in Incognito Mode");
    };
    Chrome.prototype.clearCache = function () {
        console.log(" Clearing Chrome Cache");
    };
    return Chrome;
}(Browser));
var Edge = /** @class */ (function (_super) {
    __extends(Edge, _super);
    function Edge(version) {
        return _super.call(this, "Edge", version) || this;
    }
    Edge.prototype.takeSnap = function () {
        console.log(" Taking screenshot in Edge");
    };
    Edge.prototype.clearCookies = function () {
        console.log(" Clearing cookies in Edge");
    };
    return Edge;
}(Browser));
var Safari = /** @class */ (function (_super) {
    __extends(Safari, _super);
    function Safari(version) {
        return _super.call(this, "Safari", version) || this;
    }
    Safari.prototype.readerMode = function () {
        console.log(" Safari Reader Mode Activated");
    };
    Safari.prototype.fullScreenMode = function () {
        console.log(" Safari Full Screen Mode Enabled");
    };
    return Safari;
}(Browser));
// ---------- Demo ----------
var chrome = new Chrome("118.0");
chrome.openURL("https://google.com");
chrome.openIncognito();
chrome.clearCache();
chrome.closeBrowser();
console.log("\n---------------------\n");
var edge = new Edge("115.0");
edge.openURL("https://microsoft.com");
edge.takeSnap();
edge.clearCookies();
edge.closeBrowser();
console.log("\n---------------------\n");
var safari = new Safari("16.4");
safari.openURL("https://apple.com");
safari.readerMode();
safari.fullScreenMode();
safari.closeBrowser();
