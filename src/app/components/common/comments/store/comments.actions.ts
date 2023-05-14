import { Action } from '@ngrx/store';
import { IComment } from 'src/app/components/models/comments';

export const ADD_COMMENT = '[Favorites List - Comments] Add Comment';
export const EDIT_COMMENT = '[Favorites List - Comments] Edit Comment';
export const REMOVE_COMMENT = '[Favorites List - Comments] Remove Comment';
export const REMOVE_ALL_COMMENTS = '[Favorites List - Comments] Remove All Comments';

export class AddComment implements Action {
  readonly type = ADD_COMMENT;

  constructor(public payload: { userId: number; comment: IComment }) {}
}

export class EditCommentByIndex implements Action {
  readonly type = EDIT_COMMENT;

  constructor(public payload: { index: number; userId: number; comment: IComment }) {}
}

export class RemoveCommentByIndex implements Action {
  readonly type = REMOVE_COMMENT;

  constructor(public payload: { index: number; userId: number }) {}
}

export class RemoveAllComments implements Action {
  readonly type = REMOVE_ALL_COMMENTS;

  constructor(public payload: number) {}
}

export type CommentsListActions =
  AddComment
  | EditCommentByIndex
  | RemoveCommentByIndex
  | RemoveAllComments;
