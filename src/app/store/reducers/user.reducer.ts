import { IUserState, initialUserState } from '../states/user.state';
import { UserActions, EUserActions } from '../actions/user.actions';

export function userReducer(
  state: IUserState = initialUserState,
  action: UserActions
): IUserState {
  switch (action.type) {
    case EUserActions.GetUsers:
      return {
        ...state
      };
    case EUserActions.GetUsersSuccess:
      return {
        ...state,
        users: action.payload,
        error: null
      };
    case EUserActions.GetUsersFailed:
      return {
        ...state,
        users: [],
        error: action.error
      };
    default:
      return state;
  }
}
