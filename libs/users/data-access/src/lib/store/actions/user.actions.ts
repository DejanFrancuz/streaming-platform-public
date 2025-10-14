import { createAction, props } from '@ngrx/store';
import { User } from '../../models/User';

export const getUsers = createAction('[User] Get Users');

export const getUserById = createAction('[User] Get User by Id', props<{ userId: number }>());

export const getUserByEmail = createAction('[User] Get User by Email',  props<{ userEmail: string }>())

export const updateUser = createAction('[User] Update User',  props<{ user: User }>());

export const createUser = createAction('[User] Create User',  props<{ user: User }>());

export const deleteUser = createAction('[User] Delete User',  props<{ userId: number }>());
