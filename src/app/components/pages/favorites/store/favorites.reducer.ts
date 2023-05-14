import { IRepository } from 'src/app/components/models/repository';
import { IUserListItem } from 'src/app/components/models/user';
import * as fromFavoritesListActions from './favorites.actions';
import { LocalstorageUtils } from 'src/app/utils/localstorage.utils';

export interface State {
    users: IUserListItem[];
    // repositories: IRepository[];
}

const initialState: State = {
    users: [],
    // repositories: [],
};

const localStorageKey = 'favoritesState';

export function favoritesListReducer(
    state: State = LocalstorageUtils.getDataByKey<State>(localStorageKey) || initialState,
    action: fromFavoritesListActions.FavoritesListActions
) {
    switch (action.type) {
        case fromFavoritesListActions.ADD_USER:
            const isUserExist = state.users.some((item: IUserListItem) => item.id === action.payload.id);

            if (isUserExist) return LocalstorageUtils.saveAndReturnData<State>(localStorageKey, state);

            return LocalstorageUtils.saveAndReturnData<State>(localStorageKey, {
                ...state,
                users: [...state.users, action.payload],
            });

        case fromFavoritesListActions.REMOVE_USER:
            const userIndex = state.users.map((item: IUserListItem) => item.id).indexOf(action.payload);
            const copyUsersArray = state.users.slice(0);

            copyUsersArray.splice(userIndex, 1);

            return LocalstorageUtils.saveAndReturnData<State>(localStorageKey, {
                ...state,
                users: [...copyUsersArray],
            });

        // case fromFavoritesListActions.ADD_REPO:
        //     const isRepoExist = state.repositories.some((item: IRepository) => item.id === action.payload.id);

        //     if (isRepoExist) return LocalstorageUtils.saveAndReturnData<State>(localStorageKey, state);

        //     return LocalstorageUtils.saveAndReturnData<State>(localStorageKey, {
        //         ...state,
        //         repositories: [...state.repositories, action.payload],
        //     });

        // case fromFavoritesListActions.REMOVE_REPO:
        //     const repoIndex = state.repositories.map((item: IRepository) => item.id).indexOf(action.payload);
        //     const copyReposArray = state.repositories.slice(0);

        //     copyReposArray.splice(repoIndex, 1);

        //     return LocalstorageUtils.saveAndReturnData<State>(localStorageKey, {
        //         ...state,
        //         repositories: [...copyReposArray],
        //     });

        default:
            return LocalstorageUtils.saveAndReturnData<State>(localStorageKey, state);
    }
}
