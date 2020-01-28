import { createSelector } from '@ngrx/store';
import { IAppState } from '../states/app.state';
import { IUserState } from '../states/user.state';

export const getUserState = (state: IAppState) => state.user;

export const getUsers = createSelector(
  getUserState,
  (state: IUserState) => state.users
);
