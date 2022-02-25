import Constants from '../Constants';

export const initialState = {
    loading: true,
};

const appReducer = (state = initialState, action) => {
    const data = action.data;

    switch (action.type) {
        case Constants.PAGE_SUCCESSED:
            state = {
                ...state,
                ...data,
            };
            return {
                ...state,
                loading: false,
            };

        case Constants.PAGE_LOADING:
            return {
                ...state,
                ...data,
                loading: true,
            };

        case Constants.PAGE_FAILED:
            return {
                ...state,
                loading: false,
            };

        default:
            return state;
    }
};

export default appReducer;
