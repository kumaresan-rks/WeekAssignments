const browserName = "kumaresan"; // global declaration

function getBrowserName(){

var browserTitle="TestLeaf";

if(browserName==="Chrome"){
    let browserTitle ="Amazon";
    console.log("Browser opened is "+ browserName);
    console.log("Browser opened is "+ browserTitle);
}else{
    let localBrowserName ="Opera"
    console.log("Browser opened is "+ browserName);
    console.log("Browser opened is "+ localBrowserName);
    console.log("Browser opened is "+ browserTitle);
}
}

getBrowserName()
console.log(browserName);