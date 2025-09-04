

export interface Payments {  //// Payments keyword
  cashOnDelivery(): void;
  upiPayments(): void;
  cardPayments(): void;
  internetBanking(): void;
}