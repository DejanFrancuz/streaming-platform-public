import { createAction, props } from '@ngrx/store';

export const createIntentSuccess = createAction(
  '[Payment] Create Intent Success',
  props<{ clientSecret: string }>()
);

export const createIntentFail = createAction(
  '[Payment] Create Intent Fail',
  props<{ error: any }>()
);

export const confirmPaymentSuccess = createAction(
  '[Payment] Confirm Payment Success',
  props<{ paymentIntentId: string }>()
);

export const confirmPaymentFail = createAction(
  '[Payment] Confirm Payment Fail',
  props<{ error: string }>()
);
