import { Payments } from "./01-interface";
import { CanaraBank } from "./01-absract";

export class Amazon extends CanaraBank {
  cashOnDelivery(): void {
    console.log("Payment done use ing Cash on Delivery.");
    this.recordPaymentDetails("Cash on Delivery is", 100);
  }

  upiPayments(): void {
    console.log("Payment done using UPI.");
    this.recordPaymentDetails("UPI Payment is", 50);
  }

  cardPayments(): void {
    console.log("Payment done using Card.");
    this.recordPaymentDetails("Card Payment is", 10);
  }

  internetBanking(): void {
    console.log("Payment done using Internet Banking.");
    this.recordPaymentDetails("Internet Banking is ", 5);
  }
}

const order = new Amazon();

order.cashOnDelivery();
order.upiPayments();
order.cardPayments();
order.internetBanking();