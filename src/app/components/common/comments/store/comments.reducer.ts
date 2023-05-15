import * as fromCommentsListActions from './comments.actions';
import { LocalstorageUtils } from 'src/app/utils/localstorage.utils';
import { IComment } from 'src/app/components/models/comments';

export interface State {
    [key: string]: IComment[];
}

const initialState: State = {};

const localStorageKey = 'commentsState';

export function commentsListReducer(
    state: State = LocalstorageUtils.getDataByKey<State>(localStorageKey) || initialState,
    action: fromCommentsListActions.CommentsListActions
) {
    switch (action.type) {
        case fromCommentsListActions.ADD_COMMENT:
            return LocalstorageUtils.saveAndReturnData<State>(localStorageKey, {
                ...state,
                [action.payload.userId]: [...(state[action.payload.userId] || []), action.payload.comment],
            });

        case fromCommentsListActions.EDIT_COMMENT:
            const commentsCopy = [...state[action.payload.userId]];

            commentsCopy.splice(action.payload.index, 1, action.payload.comment);

            return LocalstorageUtils.saveAndReturnData<State>(localStorageKey, {
                ...state,
                [action.payload.userId]: [...commentsCopy],
            });

        case fromCommentsListActions.REMOVE_COMMENT:
            const stateCopy = JSON.parse(JSON.stringify(state));

            if (state[action.payload.userId].length === 1) {
                delete stateCopy[action.payload.userId];
            } else {
                stateCopy[action.payload.userId].splice(action.payload.index, 1);
            }

            return LocalstorageUtils.saveAndReturnData<State>(localStorageKey, { ...stateCopy });

        case fromCommentsListActions.REMOVE_ALL_COMMENTS:
            const existingStateCopy = {...state};

            delete existingStateCopy[action.payload]; // userId in payload

            return LocalstorageUtils.saveAndReturnData<State>(localStorageKey, { ...existingStateCopy });

        default:
            return LocalstorageUtils.saveAndReturnData<State>(localStorageKey, state);
    }
}
