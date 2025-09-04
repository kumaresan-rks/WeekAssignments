class Reporter {
  // Overload signatures
  reportStep(msg: string, status: string): void;
  reportStep(msg: string, status: string, snap: boolean): void;

  // Single implementation (handles both overloads)
  reportStep(msg: string, status: string, snap?: boolean): void {
    if (snap !== undefined) {
      console.log(`Message: ${msg}, Status: ${status}, Snapshot: ${snap}`);
    } else {
      console.log(`Message: ${msg}, Status: ${status}`);
    }
  }

  // Method to test overloading
  testReportSteps(): void {
    console.log("Testing Overloaded Methods");

    // Call  with 2 arguments
    this.reportStep("Login is successful", "PASS");

    // Call  with 3 arguments
    this.reportStep("Page not found", "FAIL", true);
  }
}

// Run the test
const reporter = new Reporter();
reporter.testReportSteps();