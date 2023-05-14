import { Action } from '@ngrx/store';
import { IUserListItem } from 'src/app/components/models/user';
// import { IRepository } from 'src/app/components/models/repository';


export const ADD_USER = '[Favorites List - Users] Add User';
export const REMOVE_USER = '[Favorites List - Users] Remove User';
// export const ADD_REPO = '[Favorites List - Repositories] Add Repository';
// export const REMOVE_REPO = '[Favorites List - Repositories] Remove Repository';

export class AddUser implements Action {
  readonly type = ADD_USER;

  constructor(public payload: IUserListItem) {}
}

export class RemoveUser implements Action {
  readonly type = REMOVE_USER;

  constructor(public payload: number) {}
}

// export class AddRepository implements Action {
//   readonly type = ADD_REPO;

//   constructor(public payload: IRepository) {}
// }

// export class RemoveRepository implements Action {
//   readonly type = REMOVE_REPO;

//   constructor(public payload: number) {}
// }

export type FavoritesListActions =
  AddUser
  | RemoveUser;
  // | AddRepository
  // | RemoveRepository;
