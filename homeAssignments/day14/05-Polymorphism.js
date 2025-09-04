var Reporter = /** @class */ (function () {
    function Reporter() {
    }
    // Single implementation (handles both overloads)
    Reporter.prototype.reportStep = function (msg, status, snap) {
        if (snap !== undefined) {
            console.log("Message: ".concat(msg, ", Status: ").concat(status, ", Snapshot: ").concat(snap));
        }
        else {
            console.log("Message: ".concat(msg, ", Status: ").concat(status));
        }
    };
    // Method to test overloading
    Reporter.prototype.testReportSteps = function () {
        console.log("Testing Overloaded Methods");
        // Call  with 2 arguments
        this.reportStep("Login is successful", "PASS");
        // Call  with 3 arguments
        this.reportStep("Page not found", "FAIL", true);
    };
    return Reporter;
}());
// Run the test
var reporter = new Reporter();
reporter.testReportSteps();
