import { ActionReducerMap, createSelector } from '@ngrx/store';

import * as fromFavorites from '../components/pages/favorites/store/favorites.reducer';
import { FavoritesListActions } from '../components/pages/favorites/store/favorites.actions';

export interface AppState {
  favorites: fromFavorites.State;
}

export type AppActions = FavoritesListActions; // | AnotherType ...

export const appReducer: ActionReducerMap<AppState, AppActions> = {
    favorites: fromFavorites.favoritesListReducer,
};

export const selectFavorites = (state: AppState) => state.favorites;

export const favoriteUsers = createSelector(selectFavorites, (favorites: fromFavorites.State) => favorites.users);
// export const favoriteRepositories = createSelector(selectFavorites, (favorites: fromFavorites.State) => favorites.repositories);
