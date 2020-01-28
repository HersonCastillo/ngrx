import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { GetUsers, EUserActions, GetUsersSuccess, GetUsersFailed } from '../actions/user.actions';
import { switchMap, catchError } from 'rxjs/operators';
import { UsersService } from 'src/app/modules/redux/services/users.service';
import { of } from 'rxjs';

@Injectable()
export class UserEffect {

  constructor(
    private actions: Actions,
    private userService: UsersService
  ) { }

  @Effect()
  getUsers$ = this.actions.pipe(
    ofType<GetUsers>(EUserActions.GetUsers),
    switchMap(() => this.userService.getUsers()),
    switchMap(users => of(new GetUsersSuccess(users))),
    catchError(error => of(new GetUsersFailed(error.message)))
  );
}
