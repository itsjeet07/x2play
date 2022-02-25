import Constants from '../Constants';

const fetchRequested = (dispatch) => {
    dispatch({ type: Constants.FETCH_ITEMS_REQUESTED });
};

export const pageLoad = (dispatch) => async () => {
    dispatch({
        type: Constants.PAGE_LOADED,
        data: '',
    });
};
