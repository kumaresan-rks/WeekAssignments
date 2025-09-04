class Browser {
  browserName: string;
  browserVersion: string;

  constructor(browserName: string, browserVersion: string) {
    this.browserName = browserName;
    this.browserVersion = browserVersion;
  }

  openURL(url: string): void {
    console.log(` Opening ${url} in ${this.browserName} v${this.browserVersion}`);
  }

  closeBrowser(): void {
    console.log(` Closing ${this.browserName} browser`);
  }

  navigateBack(): void {
    console.log(` Navigating back in ${this.browserName}`);
  }
}

class Chrome extends Browser {
  constructor(version: string) {
    super("Chrome", version);
  }

  openIncognito() {
    console.log(" Opening Chrome in Incognito Mode");
  }

  clearCache() {
    console.log(" Clearing Chrome Cache");
  }
}

class Edge extends Browser {
  constructor(version: string) {
    super("Edge", version);
  }

  takeSnap() {
    console.log(" Taking screenshot in Edge");
  }

  clearCookies() {
    console.log(" Clearing cookies in Edge");
  }
}

class Safari extends Browser {
  constructor(version: string) {
    super("Safari", version);
  }

  readerMode() {
    console.log(" Safari Reader Mode Activated");
  }

  fullScreenMode() {
    console.log(" Safari Full Screen Mode Enabled");
  }
}

// ---------- Demo ----------
const chrome = new Chrome("118.0");
chrome.openURL("https://google.com");
chrome.openIncognito();
chrome.clearCache();
chrome.closeBrowser();

console.log("\n---------------------\n");

const edge = new Edge("115.0");
edge.openURL("https://microsoft.com");
edge.takeSnap();
edge.clearCookies();
edge.closeBrowser();

console.log("\n---------------------\n");

const safari = new Safari("16.4");
safari.openURL("https://apple.com");
safari.readerMode();
safari.fullScreenMode();
safari.closeBrowser();