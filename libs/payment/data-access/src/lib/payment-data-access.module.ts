import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromPayment from './store/reducers/payment.reducer';
import { PaymentEffects } from './store/effects/payment.effects';
import { PaymentFacade } from './store/facade/payment.facade';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromPayment.PAYMENT_FEATURE_KEY, fromPayment.paymentReducer),
    ToastrModule,
    EffectsModule.forFeature([PaymentEffects]),
  ],
  providers: [PaymentFacade],
})
export class PaymentDataAccessModule {}
