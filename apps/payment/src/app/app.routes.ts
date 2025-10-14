import { Route } from '@angular/router';
import { MoviePaymentComponent } from './payment/movie-payment/movie-payment.component';
import { ShoppingCartComponent } from './payment/shopping-cart/shopping-cart.component';

export const appRoutes: Route[] = [
  {
          path: '',
          redirectTo: 'movie-payment/cart',
          pathMatch: 'full'
        },
  {
        path: 'movie-payment/:movieId',
        component: MoviePaymentComponent
    },
    {
        path: 'movie-payment',
        component: MoviePaymentComponent
    },
    {
        path: 'shopping-cart',
        component: ShoppingCartComponent
    }
];
