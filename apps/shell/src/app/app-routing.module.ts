import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ShellLayoutComponent } from './layout/layout.component';
import { AdminGuard, AuthGuard } from '@stream-platform/auth-data-access';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('auth/Module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('dashboard/Module').then((m) => m.DashboardModule),
  },
  {
    path: 'users',
    canActivate: [AdminGuard],
    loadChildren: () => import('users/Module').then((m) => m.UsersModule),
  },
  {
    path: 'movies',
    canActivate: [AuthGuard],
    loadChildren: () => import('movies/Module').then((m) => m.MoviesModule),
  },
  {
    path: 'payment',
    canActivate: [AuthGuard],
    loadChildren: () => import('payment/Module').then((m) => m.PaymentModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
