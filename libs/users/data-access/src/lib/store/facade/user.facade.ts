import { Injectable, inject } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as UserActions from '../actions/user.actions';
import * as UserSelectors from '../selectors/user.selectors';
import { User } from '../../models/User';

@Injectable({ providedIn: 'root' })
export class UserFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  selectLoaded$ = this.store.pipe(select(UserSelectors.selectUsersLoaded));
  selectUsers$ = this.store.pipe(select(UserSelectors.selectGetUsers));
  selectSelectedUser$ = this.store.pipe(select(UserSelectors.selectSelectedUser));

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  getUsers(){
    this.store.dispatch(UserActions.getUsers());
  }

  getUserById(userId: number){
    this.store.dispatch(UserActions.getUserById({ userId }));
  }

  createUser(user: User){
    this.store.dispatch(UserActions.createUser({ user }));
  }

  updateUser(user: User){
    this.store.dispatch(UserActions.updateUser({ user }));
  }

  deleteUser(userId: number){
    this.store.dispatch(UserActions.deleteUser({ userId }));
  }
}
