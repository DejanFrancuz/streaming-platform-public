import { Injectable, inject } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as AuthActions from '../actions/auth.actions';
import * as AuthSelectors from '../selectors/auth.selectors';
import { LoginForm } from '../../models/Login';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(AuthSelectors.selectAuthLoaded));
  personLoaded$ = this.store.pipe(select(AuthSelectors.selectAuthPersonLoaded));
  selectedAuthPerson$ = this.store.pipe(select(AuthSelectors.selectAuthPerson));

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init(){
    this.store.dispatch(AuthActions.loadPerson());
  }

  login(loginForm: LoginForm){
    this.store.dispatch(AuthActions.login({loginForm: loginForm}));
  }

  logout(){
    this.store.dispatch(AuthActions.logout());
  }
}
