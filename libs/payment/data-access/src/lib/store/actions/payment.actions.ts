import { createAction, props } from '@ngrx/store';
import { ConfirmPaymentParams, PaymentIntentRequest } from '../../models/Payment';
import { StripeCardElement, StripeElements } from '@stripe/stripe-js';


export const createIntent = createAction(
  '[Payment] Create Intent',
  props<{ paymentIntentRequests: PaymentIntentRequest[] }>()
);

export const confirmPayment = createAction(
  '[Payment] Confirm Payment',
  props<{ clientSecret: string, card: StripeCardElement }>()
);
