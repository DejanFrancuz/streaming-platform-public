export interface PaymentIntentRequest {
  amount: number;
  id: string;
  currency: string;
}

export interface PaymentRequest {
  items: PaymentIntentRequest[];
}

export interface ConfirmPaymentParams {
  return_url: string;
}
