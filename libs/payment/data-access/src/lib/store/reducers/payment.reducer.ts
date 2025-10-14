import { createReducer, on } from '@ngrx/store';
import {PaymentActions, PaymentActionsApi} from '../actions/payment-index.actions';

export const MOVIE_FEATURE_KEY = 'movie';

export const PAYMENT_FEATURE_KEY = 'payment';

export interface PaymentState {
  clientSecret: string | null;
  paymentIntentId: string | null;
  isProcessing: boolean;
  success: boolean;
  error: string | null;
}

export const initialState: PaymentState = {
  clientSecret: null,
  paymentIntentId: null,
  isProcessing: false,
  success: false,
  error: null,
};

export const paymentReducer = createReducer(
  initialState,

  // ✅ Kreiranje PaymentIntenta
  on(PaymentActions.createIntent, state => ({
    ...state,
    isProcessing: true,
    error: null,
    success: false,
  })),

  on(PaymentActionsApi.createIntentSuccess, (state, { clientSecret }) => ({
    ...state,
    clientSecret,
    isProcessing: false,
  })),

  on(PaymentActionsApi.createIntentFail, (state, { error }) => ({
    ...state,
    isProcessing: false,
    error,
  })),

  // ✅ Potvrda plaćanja
  on(PaymentActions.confirmPayment, state => ({
    ...state,
    isProcessing: true,
    error: null,
  })),

  on(PaymentActionsApi.confirmPaymentSuccess, (state, { paymentIntentId }) => ({
    ...state,
    isProcessing: false,
    success: true,
    paymentIntentId,
  })),

  on(PaymentActionsApi.confirmPaymentFail, (state, { error }) => ({
    ...state,
    isProcessing: false,
    success: false,
    error,
  }))
);


