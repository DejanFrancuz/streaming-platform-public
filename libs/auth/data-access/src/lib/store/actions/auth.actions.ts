import { createAction, props } from '@ngrx/store';
import { LoginForm } from '../../models/Login';

export const initAuth = createAction('[Auth] Init');

export const login = createAction('[Auth] Login', props<{ loginForm: LoginForm }>());

export const logout = createAction('[Auth] Logout');

export const loadPerson = createAction('[Auth] Load Person');
