import { createAction, props } from '@ngrx/store';
import { User } from '../../models/User';

export const getUsersSuccess = createAction('[User/API] Get Users Success', props<{ usersList: User[]}>());
export const getUsersFail = createAction('[User/API] Get Users Fail', props<{ error: string}>());

export const getUserByIdSuccess = createAction('[User/API] Get User by Id Success', props<{ user: User }>());
export const getUserByIdFail = createAction('[User/API] Get User by Id Fail', props<{ error: string}>());

export const getUserByEmailSuccess = createAction('[User/API] Get User by Email Success',  props<{ user: User }>)
export const getUserByEmailFail = createAction('[User/API] Get User by Email Fail', props<{ error: string}>())

export const updateUserSuccess = createAction('[User/API] Update User Success');
export const updateUserFail = createAction('[User/API] Update User Fail', props<{ error: string}>());

export const createUserSuccess = createAction('[User/API] Create User Success');
export const createUserFail = createAction('[User/API] Create User Fail', props<{ error: string}>());

export const deleteUserSuccess = createAction('[User/API] Delete User Success');
export const deleteUserFail = createAction('[User/API] Delete User Fail', props<{ error: string}>());
