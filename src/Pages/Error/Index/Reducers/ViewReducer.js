import Constants from '../Constants';

const initState = {
    loading: false,
    columns: [''],
    items: [],
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

        default:
            return state;
    }
};
