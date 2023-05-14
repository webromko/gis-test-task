import { ActionReducerMap, createSelector } from '@ngrx/store';

import * as fromFavorites from '../components/pages/favorites/store/favorites.reducer';
import * as fromComments from '../components/common/comments/store/comments.reducer';

export interface AppState {
  favorites: fromFavorites.State;
  comments: fromComments.State;
}

export const appReducer: ActionReducerMap<AppState, any> = {
    favorites: fromFavorites.favoritesListReducer,
    comments: fromComments.commentsListReducer,
};

export const selectFavorites = (state: AppState) => state.favorites;
export const selectComments = (state: AppState) => state.comments;

export const favoriteUsers = createSelector(selectFavorites, (favorites: fromFavorites.State) => favorites.users);
export const comments = createSelector(selectFavorites, (favorites: fromFavorites.State) => favorites.users);
