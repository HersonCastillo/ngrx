import { IUser } from 'src/app/modules/redux/interfaces/user';

export interface IUserState {
  users: IUser[];
  error: string;
}

export const initialUserState: IUserState = {
  users: [],
  error: null
}

