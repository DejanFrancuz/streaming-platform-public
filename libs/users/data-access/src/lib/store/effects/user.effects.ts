import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as UserActions from '../actions/user.actions';
import { UserService } from '../../services/user.service';
import { map, catchError, switchMap, tap, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserActionsApi } from '../actions/user-index.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class UserEffects {
  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getUsers),
      switchMap(() =>
        this.userService.getUsers().pipe(
          map(users =>
            UserActionsApi.getUsersSuccess({ usersList: users })
        ),
          catchError(error => {
            this.toastrService.success("Users get failed", error);
            return of(UserActionsApi.getUsersFail({ error }))
        })
        )
      )
    )
  );

  getUserById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getUserById),
      switchMap((action) =>
        this.userService.getUserById(action.userId).pipe(
          map(user =>{
            return UserActionsApi.getUserByIdSuccess({ user })
          }
        ),
          catchError(error => {
            return of(UserActionsApi.getUserByIdFail({ error }))
        })
        )
      )
    )
  );

  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.createUser),
      switchMap((action) =>
        this.userService.createUser(action.user).pipe(
          map(() =>
          {
            this.toastrService.success("You have registred successfully!");
            this.router.navigateByUrl('auth/login');
            return UserActionsApi.createUserSuccess()
          }
        ),
          catchError(error => {
            this.toastrService.error("Registration failed", error);
            return of(UserActionsApi.createUserFail({ error }))
        })
        )
      )
    )
  );

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.updateUser),
      switchMap((action) =>
        this.userService.updateUser(action.user).pipe(
          map(() =>{
            this.toastrService.success("User updated successfully");
            return UserActionsApi.updateUserSuccess()
          }
        ),
          catchError(error => {
            this.toastrService.error("User update failed", error);
            return of(UserActionsApi.updateUserFail({ error }))
        })
        )
      )
    )
  );

  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.deleteUser),
      switchMap((action) =>
        this.userService.deleteUser(action.userId).pipe(
          map(() =>{
            this.toastrService.success("User deleted successfully");
            return UserActionsApi.deleteUserSuccess()
          }
        ),
          catchError(error => {
            this.toastrService.error("User delete failed", error);
            return of(UserActionsApi.deleteUserFail({ error }))
        })
        )
      )
    )
  );



  constructor(private actions$: Actions, private userService: UserService, private router: Router, private toastrService: ToastrService) {}
}
