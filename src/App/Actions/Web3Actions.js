import Constants from '../Constants';

export const saveAddress = (dispatch) => async (address) => {
    dispatch({ type: Constants.SET_ADDRESS, data: { address } });
};

export const setCCOBalance = (dispatch) => async (balance) => {
    dispatch({ type: Constants.SET_CCO_BALANCE, data: { balance } });
};

export const setReferrerAddress = (dispatch) => async (address) => {
    dispatch({ type: Constants.SET_REFERRER_ADDRESS, data: { address } });
};
export const setRefUrl = (dispatch) => async (address) => {
    dispatch({ type: Constants.SET_URL_REF, data: { address } });
};


export const setWithdrawable = (dispatch) => async (amount) => {
    dispatch({ type: Constants.SET_WITHDRAWABLE, data: { amount } });
};

export const setAllowed = (dispatch) => async (amount) => {
    dispatch({ type: Constants.SET_ALLOWED, data: { amount } });
};

export const setBalanceOf = (dispatch) => async (amount) => {
    dispatch({ type: Constants.SET_BALANCE_OF, data: { amount } });
};

export const setGameInfo = (dispatch) => async (data) => {
    dispatch({ type: Constants.SET_GAME_INFO, data: { data } });
};

export const setMyGame = (dispatch) => async (data) => {
    dispatch({ type: Constants.SET_MY_GAME, data: { data } });
};

export const setReferalInfo = (dispatch) => async (data) => {
    dispatch({ type: Constants.SET_REFERAL_INFO, data: { data } });
};
