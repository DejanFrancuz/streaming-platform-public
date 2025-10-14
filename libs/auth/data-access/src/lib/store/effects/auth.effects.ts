import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from '../actions/auth.actions';
import { AuthService } from '../../services/auth.service';
import { map, exhaustMap, catchError, switchMap, tap, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthActionsApi } from '../actions/auth-index.actions';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(action =>
        this.authService.login({ email: action.loginForm.email, password: action.loginForm.password }).pipe(
          map(personData => {
            this.router.navigate(['/dashboard']);
            this.toastrService.success("You are logged in!\n \tWelcome!");
            return AuthActionsApi.loginSuccess({ personData })
        }),
          catchError(error => {
            // this.router.navigate(['/auth']);
            this.toastrService.error("Something went wrong :/ \n Please try again");
            return of(AuthActionsApi.loginFailure({ error }))
        })
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      exhaustMap(() =>
        this.authService.logout().pipe(
          map(() => AuthActionsApi.logoutSuccess()),
          catchError( error => of(AuthActionsApi.logoutFailure( error )))
        )
      )
    )
  );

  loadPerson$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loadPerson),
      mergeMap(() =>
        this.authService.getPersonData().pipe(
          map((personData) => {
            return AuthActionsApi.loadPersonSuccess({ personData })
          }
          ),
          catchError((error) =>
            of(AuthActionsApi.loadPersonFail({ error: error.message }))
          )
        )
      )
    )
  );

  authError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionsApi.loadPersonFail),
      tap(() => this.router.navigate(['/auth/login']))
    )
  , { dispatch: false });

  constructor(private actions$: Actions, private toastrService: ToastrService, private authService: AuthService, private router: Router) {}
}
