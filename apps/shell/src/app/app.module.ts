import { UsersDataAccessModule } from '@stream-platform/users-data-access';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShellLayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonSharedUiModule } from '@stream-platform/common-shared-ui';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthDataAccessModule } from '@stream-platform/auth-data-access';
import { MoviesDataAccessModule } from '@stream-platform/movies-data-access';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PaymentDataAccessModule } from '@stream-platform/payment-data-access';

@NgModule({
  declarations: [AppComponent, ShellLayoutComponent],
  exports: [ShellLayoutComponent],
  imports: [
    BrowserModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      timeOut: 3000,
      preventDuplicates: true,
      closeButton: true,
    }),
    BrowserAnimationsModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    CommonSharedUiModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    AuthDataAccessModule,
    UsersDataAccessModule,
    MoviesDataAccessModule,
    PaymentDataAccessModule,
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [ShellLayoutComponent],
})
export class AppModule {}
