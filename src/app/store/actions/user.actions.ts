import { Action } from '@ngrx/store';
import { IUser } from 'src/app/modules/redux/interfaces/user';

export enum EUserActions {
  GetUsers = '[Users] Get Users',
  GetUsersSuccess = '[Users] Get Users Success',
  GetUsersFailed = '[Users] Get Users Failed'
}

export class GetUsers implements Action {
  public readonly type = EUserActions.GetUsers;
}

export class GetUsersSuccess implements Action {
  public readonly type = EUserActions.GetUsersSuccess;
  constructor(public payload: IUser[]) { }
}

export class GetUsersFailed implements Action {
  public readonly type = EUserActions.GetUsersFailed;
  public payload: string;
  constructor(public error: string) {
    this.payload = error;
  }
}

export type UserActions = GetUsers | GetUsersSuccess | GetUsersFailed;
