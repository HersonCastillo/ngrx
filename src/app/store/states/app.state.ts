import { IUserState } from './user.state';

export interface AppState {
  user: IUserState;
}

export const initialState: AppState = {
  user: null
};

export const getInitialState = (): AppState => initialState;
