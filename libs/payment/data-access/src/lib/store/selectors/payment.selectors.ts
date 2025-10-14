import { createFeatureSelector, createSelector } from '@ngrx/store';
import {  PAYMENT_FEATURE_KEY, PaymentState } from '../reducers/payment.reducer';

// Lookup the 'Payment' feature state managed by NgRx
export const selectPaymentState =
  createFeatureSelector<PaymentState>(PAYMENT_FEATURE_KEY);

export const selectClientSecret = createSelector(
  selectPaymentState,
  state => state.clientSecret
);

export const selectPaymentIntentId = createSelector(
  selectPaymentState,
  state => state.paymentIntentId
);

export const selectIsProcessing = createSelector(
  selectPaymentState,
  state => state.isProcessing
);

export const selectPaymentSuccess = createSelector(
  selectPaymentState,
  state => state.success
);

export const selectPaymentError = createSelector(
  selectPaymentState,
  state => state.error
);

