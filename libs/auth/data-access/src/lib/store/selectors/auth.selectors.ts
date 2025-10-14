import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AUTH_FEATURE_KEY, AuthState } from '../reducers/auth.reducer';

// Lookup the 'Auth' feature state managed by NgRx
export const selectAuthState =
  createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);

export const selectAuthLoaded = createSelector(
  selectAuthState,
  (state: AuthState) => state.loading
);

export const selectAuthPersonLoaded = createSelector(
  selectAuthState,
  (state: AuthState) => state.personLoading
);

export const selectAuthError = createSelector(
  selectAuthState,
  (state: AuthState) => state.error
);

export const selectAuthPerson = createSelector(
  selectAuthState,
  (state: AuthState) => state.person
);
