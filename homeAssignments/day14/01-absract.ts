import { Payments } from "./01-interface";

export abstract class CanaraBank implements Payments {
  abstract cashOnDelivery(): void;
  abstract upiPayments(): void;
  abstract cardPayments(): void;
  abstract internetBanking(): void;

  recordPaymentDetails(paymentType: string, amount: number): void {
    console.log(`Recording Payment Details => Mode: ${paymentType} | Amount: ₹${amount}`);
  }
}