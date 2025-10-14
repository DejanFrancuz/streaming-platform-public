import { createReducer, on } from '@ngrx/store';
import {AuthActions, AuthActionsApi} from '../actions/auth-index.actions';
import { Person } from '../../models/Person';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthState {
  person: Person | null;
  loading: boolean;
  personLoading: boolean;
  error: string | null;
}

export const initialState: AuthState = {
  person: null,
  loading: false,
  personLoading: false,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login,       state => ({ ...state, loading: true, error: null })),
  on(AuthActionsApi.loginSuccess, (state, action) => 
    ({ ...state, person: action.personData, loading: false })),
  on(AuthActionsApi.loginFailure, (state, action) => ({ ...state, error: action.error, loading: false })),
  on(AuthActionsApi.logoutSuccess, _ => initialState),

  on(AuthActions.loadPerson, state => ({ ... state, personLoading: true, error: null })),
  on(AuthActionsApi.loadPersonSuccess, (state, action) => 
    ({ ...state, person: action.personData, personLoading: false })),
  on(AuthActionsApi.loadPersonFail, (state, action) => ({ ...state, error: action.error, personLoading: false })),
);

