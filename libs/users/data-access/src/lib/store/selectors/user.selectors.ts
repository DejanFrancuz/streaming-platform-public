import { createFeatureSelector, createSelector } from '@ngrx/store';
import {  USER_FEATURE_KEY, UserState } from '../reducers/user.reducer';

export const selectUserState =
  createFeatureSelector<UserState>(USER_FEATURE_KEY);

export const selectGetUsers = createSelector(
  selectUserState,
  (state: UserState) => state.usersList
);
export const selectSelectedUser = createSelector(
  selectUserState,
  (state: UserState) => state.selectedUser
);

export const selectUsersLoaded = createSelector(
  selectUserState,
  (state: UserState) => state.loading
);

export const selectUserError = createSelector(
  selectUserState,
  (state: UserState) => state.error
);
