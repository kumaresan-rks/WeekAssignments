//Create the Environment enum
enum Environment {
  LOCAL = "Local",
  DEVELOPMENT = "Developt",
  STAGING = "Staging",
  PRODUCTION = "Product"
}

// Write the runTests function two perameter used

function runTests(name : string ,val: Environment): void {
  console.log(`the ${name} result is ${val} environment`);
}

//call function 
runTests("Test", Environment.LOCAL);
runTests("Test", Environment.DEVELOPMENT);
runTests("Test", Environment.STAGING);
runTests("Test", Environment.PRODUCTION);

