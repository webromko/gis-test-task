import { Action } from '@ngrx/store';
import { IUserListItem } from 'src/app/components/models/user';


export const ADD_USER = '[Favorites List - Users] Add User';
export const REMOVE_USER = '[Favorites List - Users] Remove User';

export class AddUser implements Action {
  readonly type = ADD_USER;

  constructor(public payload: IUserListItem) {}
}

export class RemoveUser implements Action {
  readonly type = REMOVE_USER;

  constructor(public payload: number) {}
}

export type FavoritesListActions =
  AddUser
  | RemoveUser;
