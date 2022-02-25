import { mergeDeepLeft } from 'ramda';
import Constants from '../Constants';

const initState = {
    loading: false,
    email: '',
    password: '',
};

export const reducer = (state, action) => {
    const { data } = action;

    switch (action.type) {
        case Constants.PAGE_LOADED:
            return {
                ...initState,
                ...data,
            };

        case Constants.FETCH_ITEMS_REQUESTED:
            return {
                ...state,
                loading: true,
            };

        case Constants.FETCH_ITEMS_SUCCESSED:
            return {
                ...state,
                ...data,
                loading: false,
            };

        case Constants.FETCH_ITEMS_FAILED:
            return {
                ...state,
                loading: false,
            };

        case Constants.CHANGE_FORM:
            const set = mergeDeepLeft({
                [data.key]: data.value,
            });
            const newState = set(state);

            return {
                ...state,
                ...newState,
            };

        default:
            return state;
    }
};
