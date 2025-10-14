import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, mergeMap, concatMap, withLatestFrom, filter } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { loadStripe } from '@stripe/stripe-js';
import * as PaymentActions from '../actions/payment-index.actions';
import { PaymentService } from '../../services/payment.service';
import { Store } from '@ngrx/store';
import { PaymentFacade } from '../facade/payment.facade';
import { Router } from '@angular/router';


@Injectable()
export class PaymentEffects {
  private stripePromise = loadStripe('pk_test_51S7dt7PHHbkxw0kucm8D5MBLMXzt0PXf1PQMJGfF4zSq1zEp9irq8LbcCRC1llav1Jq1dFDYfePGVR4zR3YnJnvy00FukXUTEy');

  createIntent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PaymentActions.PaymentActions.createIntent),
      mergeMap(({ paymentIntentRequests }) =>
        this.paymentService.createPaymentIntent(paymentIntentRequests).pipe(
          mergeMap(response => [
            PaymentActions.PaymentActionsApi.createIntentSuccess({ clientSecret: response.clientSecret }),
            // PaymentActions.PaymentActions.confirmPayment({ paymentIntentId: response.clientSecret, card: response.card })
          ]),
          catchError(error => of(PaymentActions.PaymentActionsApi.createIntentFail({ error })))
          )
      )
    )
  );

//   autoConfirm$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(PaymentActions.PaymentActionsApi.createIntentSuccess),
//       // ovde možeš da dodaš dodatni operator da sačeka dok ne bude spreman card
//       withLatestFrom(this.paymentService.getCardElement$()),
//     filter(([_, card]) => !!card), // osigurava da card postoji
//     mergeMap(([{ clientSecret }, card]) =>
//       this.paymentService.confirmPayment(clientSecret, card).pipe(
//         map(( response ) => PaymentActions.PaymentActionsApi.confirmPaymentSuccess(response)),
//         catchError((error) => of(PaymentActions.PaymentActionsApi.confirmPaymentFail(error)))
//       )
//     )
//   )
// );

  confirmPayment$ = createEffect(() =>
  this.actions$.pipe(
    ofType(PaymentActions.PaymentActions.confirmPayment),
    concatMap(({ clientSecret, card }) =>
      from(this.stripePromise).pipe(
        concatMap(stripe => {
          if (!stripe) {
            return of(PaymentActions.PaymentActionsApi.confirmPaymentFail({
              error: 'Stripe not loaded',
            }));
          }

          return from(stripe.confirmCardPayment(clientSecret, { payment_method: { card } })).pipe(
            map(({ error, paymentIntent }) => {
              if (error) {
                return PaymentActions.PaymentActionsApi.confirmPaymentFail({
                  error: error.message ?? 'Unknown error',
                });
              } else {
                this.router.navigateByUrl('movies/list');
                return PaymentActions.PaymentActionsApi.confirmPaymentSuccess({
                  paymentIntentId: paymentIntent.id,
                });
              }
            }),
            catchError(err => of(PaymentActions.PaymentActionsApi.confirmPaymentFail({ error: err.message })))
          );
        })
      )
    )
  )
);




  constructor(private actions$: Actions, private paymentService: PaymentService, private router: Router) {}
}
