import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';

import * as PaymentActions from '../actions/payment.actions';
import * as PaymentSelectors from '../selectors/payment.selectors';
import { StripeCardElement, StripeElements } from '@stripe/stripe-js';
import { ConfirmPaymentParams, PaymentIntentRequest } from '../../models/Payment';

@Injectable({ providedIn: 'root' })
export class PaymentFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  paymentSuccess$ = this.store.select(PaymentSelectors.selectPaymentSuccess);
  paymentError$ = this.store.select(PaymentSelectors.selectPaymentError);
  clientSecret$ = this.store.select(PaymentSelectors.selectClientSecret);
  isProcessing$ = this.store.select(PaymentSelectors.selectIsProcessing);

  // constructor(private store: Store, private stripeService: StripeService) {}

  createPaymentIntent(paymentIntentRequests: PaymentIntentRequest[]): void {
      this.store.dispatch(PaymentActions.createIntent({ paymentIntentRequests }));
  }

  confirmPayment(clientSecret: string, card: StripeCardElement): void {
    this.store.dispatch(PaymentActions.confirmPayment({ clientSecret, card }));
  }
}
