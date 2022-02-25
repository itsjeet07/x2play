import Constants from '../Constants';

export const pageLoaded = (dispatch) => async () => {
    dispatch({ type: Constants.PAGE_SUCCESSED, data: {} });
};

export const pageLoading = (dispatch) => () => {
    dispatch({ type: Constants.PAGE_LOADING, data: {} });
};

export const pageFailed = (dispatch) => () => dispatch({ type: Constants.PAGE_FAILED });
