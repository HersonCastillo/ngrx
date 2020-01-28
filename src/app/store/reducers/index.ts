import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { IAppState } from '../states/app.state';
import { userReducer } from './user.reducer';

export const reducers: ActionReducerMap<IAppState> = {
  user: userReducer
};


export const metaReducers: MetaReducer<IAppState>[] = !environment.production ? [] : [];
