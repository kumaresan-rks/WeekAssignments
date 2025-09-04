class WebComponent {
  selector: string;

  constructor(selector: string) {
    this.selector = selector;
  }

  click(): void {
    console.log(` Clicking on component with selector: ${this.selector}`);
  }

  focus(): void {
    console.log(` Focusing on component with selector: ${this.selector}`);
  }
}

// Button class extends WebComponent
class Button extends WebComponent {
  constructor(selector: string) {
    super(selector);
  }

  
  click(): void {
        super.click();
         // call base class click()
    console.log(` Button-specific action performed on: ${this.selector}`);
  }
}


class TextInput extends WebComponent {
  value: string;

  constructor(selector: string) {
    super(selector);
    this.value = "";
  }

  enterText(text: string): void {
    this.value = text;
    console.log(` Entering text "${this.value}" into input with selector: ${this.selector}`);
  }
}


function testComponents(): void {
  const loginButton = new Button("#login-btn");
  const usernameInput = new TextInput("#username");

  
  usernameInput.focus();
  usernameInput.enterText("Kumaresan");
  loginButton.click();
}

testComponents(); // call function.



