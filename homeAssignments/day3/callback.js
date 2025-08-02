let browser = "Chrome";
function checkBrowserVersion(usedBrowser, version) {
    setTimeout(() => {
        console.log("Global browser is " + browser);
        console.log("Browser used is " + usedBrowser);
        
    }, 3000);
    browserVersion(version)
}

function browserVersion(version) {
    console.log("version used is " + version);
}

checkBrowserVersion("MSEdge", 78)