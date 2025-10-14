import { createReducer, on, Store } from '@ngrx/store';
import {UserActions, UserActionsApi} from '../actions/user-index.actions';
import { User } from '../../models/User';

export const USER_FEATURE_KEY = 'user';

export interface UserState {
  usersList: User[] | null;
  selectedUser: User | null;
  loading: boolean;
  error: string | null;
}

export const initialState: UserState = {
  usersList: [],
  selectedUser: null,
  loading: false,
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.getUsers,       state => ({ ...state, loading: true, error: null })),
  on(UserActionsApi.getUsersSuccess, (state, action) =>
    ({ ...state, usersList: action.usersList, loading: false })),
  on(UserActionsApi.getUserByIdSuccess, (state, action) =>
    ({ ...state, selectedUser: action.user, loading: false })),
  on(UserActions.deleteUser, (state, action) => {
    const newList = state.usersList?.filter((user) => user.userId !== action.userId) || state.usersList;
    return { ...state, usersList: newList, loading: false }
  }),
  on(UserActionsApi.getUsersFail, (state, action) => ({ ...state, error: action.error, loading: false })),
);

