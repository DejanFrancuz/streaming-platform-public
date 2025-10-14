import { NgModule } from '@angular/core';
import { MoviePaymentComponent } from './payment/movie-payment/movie-payment.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonSharedUiModule } from '@stream-platform/common-shared-ui';
import { appRoutes } from './app.routes';
import { ShoppingCartComponent } from './payment/shopping-cart/shopping-cart.component';
import { MovieCardComponent } from './payment/movie-payment/movie-card/movie-card.component';

@NgModule({
  declarations: [
    MoviePaymentComponent,
    ShoppingCartComponent,
    MovieCardComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCheckboxModule,
    CommonSharedUiModule,
    RouterModule.forChild(appRoutes),
  ],
  providers: [],
  exports: [MoviePaymentComponent, ShoppingCartComponent],
})
export class PaymentModule {}
