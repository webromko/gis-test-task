import { IUserListItem } from 'src/app/components/models/user';
import { LocalstorageUtils } from 'src/app/utils/localstorage.utils';
import * as fromFavoritesListActions from './favorites.actions';

export interface State {
    users: IUserListItem[];
}

const initialState: State = {
    users: [],
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

        default:
            return LocalstorageUtils.saveAndReturnData<State>(localStorageKey, state);
    }
}
