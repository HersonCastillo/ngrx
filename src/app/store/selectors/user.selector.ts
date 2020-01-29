import { userAdapter, IUserState } from '../states/user.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';

const {
  selectAll,
  selectIds
} = userAdapter.getSelectors();

export const getUsersFactory = createFeatureSelector<IUserState>('user');

export const getUsers = createSelector(
  getUsersFactory,
  selectAll
);
