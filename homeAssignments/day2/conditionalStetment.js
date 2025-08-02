function launchBrowser(browserName) {
    if (browserName==='Chrome'){
        console.log("Browser launched: Chrome");
    }else if(browserName==='MSEdge'){
        console.log("Browser launched: MS Edge");
     }else if(browserName==='Safari'){
        console.log("Browser launched: Safari");
    }else{
        console.log("Check input");
    }
    
}
launchBrowser('Safari')

//Switch case

function runTests(testType) {
    switch (testType) {
        case "Smoke":
            console.log("Run type of the test is:" + testType);
            
            break;

        case "Sanity": 
            console.log("Run type of the test is:" + testType);
            
            break;

        case "Regression": 
            console.log("Run type of the test is:" + testType);
            
            break;
    
        default:
             console.log("Run type of the test is: Sprint testing");
            break;
    }
    
}
runTests("Sanity")