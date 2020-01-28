import { IUserState } from './user.state';

export interface IAppState {
  user: IUserState;
}

export const initialState: IAppState = {
  user: null
};

export const getInitialState = (): IAppState => initialState;
