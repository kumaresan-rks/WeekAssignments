//Create the Environment enum
var Environment;
(function (Environment) {
    Environment["LOCAL"] = "Local";
    Environment["DEVELOPMENT"] = "Developt";
    Environment["STAGING"] = "Staging";
    Environment["PRODUCTION"] = "Product";
})(Environment || (Environment = {}));
// Write the runTests function two perameter used
function runTests(name, val) {
    console.log("the ".concat(name, " result is ").concat(val, " environment"));
}
//call function 
runTests("Test", Environment.LOCAL);
runTests("Test", Environment.DEVELOPMENT);
runTests("Test", Environment.STAGING);
runTests("Test", Environment.PRODUCTION);
