import { IUserState, userAdapter, initialUserState } from '../states/user.state';
import { UserActions, EUserActions } from '../actions/user.actions';

export function userReducer(
  state = userAdapter.getInitialState(initialUserState),
  action: UserActions
): IUserState {
  switch (action.type) {
    case EUserActions.GetUsers:
      return userAdapter.addAll([], state);
    case EUserActions.GetUsersSuccess:
      return userAdapter.addAll(action.payload, state);
    case EUserActions.GetUsersFailed:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}
