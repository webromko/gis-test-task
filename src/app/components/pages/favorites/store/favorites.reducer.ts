import { IRepository } from 'src/app/components/models/repository';
import { IUserListItem } from 'src/app/components/models/user';
import * as FavoritesListActions from './favorites.actions';

export interface State {
    users: IUserListItem[];
    repositories: IRepository[];
}

const initialState: State = {
    users: [],
    repositories: [],
};

export function favoritesListReducer(
    state: State = initialState,
    action: FavoritesListActions.FavoritesListActions
) {
    switch (action.type) {
        case FavoritesListActions.ADD_USER:
            const isUserExist = !!state.users.find((item: IUserListItem) => item.id = action.payload.id);

            if (isUserExist) return state;

            return {
                ...state,
                users: [...state.users, action.payload]
            };

        case FavoritesListActions.REMOVE_USER:
            const userIndex = state.users.map((item: IUserListItem) => item.id).indexOf(action.payload);
            const copyUsersArray = state.users.slice(0);

            copyUsersArray.splice(userIndex, 1);

            return {
                ...state,
                users: [...copyUsersArray],
            };

        case FavoritesListActions.ADD_REPO:
            const isRepoExist = !!state.repositories.find((item: IRepository) => item.id = action.payload.id);

            if (isRepoExist) return state;

            return {
                ...state,
                repositories: [...state.repositories, action.payload]
            };

        case FavoritesListActions.REMOVE_REPO:
            const repoIndex = state.repositories.map((item: IRepository) => item.id).indexOf(action.payload);
            const copyReposArray = state.repositories.slice(0);

            copyReposArray.splice(repoIndex, 1);

            return {
                ...state,
                repositories: [...copyReposArray],
            };

        default:
            return state;
    }
}
