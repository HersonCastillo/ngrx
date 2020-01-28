import { IUser } from 'src/app/modules/redux/interfaces/user';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';


export interface IUserState extends EntityState<IUser> {
  error: string;
}

export const initialUserState: IUserState = {
  ids: [],
  entities: null,
  error: null
};

export const userAdapter: EntityAdapter<IUser> = createEntityAdapter<IUser>();
