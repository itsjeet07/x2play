import Constants from '../Constants';

export const initialState = {
    address: "",
    ccoBalance: '0',
    referrerAddress: "",
    availableToWithdraw: '0',
    allowed: '0',
    balanceOf: '0',
    gameInfo: {},
    myGame: {},
    refId: "",
    referalInfo: {}
};

const web3Reducer = (state = initialState, action) => {
    const data = action.data;
    switch (action.type) {
        case Constants.SET_ADDRESS:
        case Constants.SET_CCO_BALANCE:
        case Constants.SET_REFERRER_ADDRESS:
        case Constants.SET_WITHDRAWABLE:
        case Constants.SET_ALLOWED:
        case Constants.SET_BALANCE_OF:
        case Constants.SET_GAME_INFO:
        case Constants.SET_MY_GAME:
        case Constants.SET_URL_REF:
        case Constants.SET_REFERAL_INFO:
            state = {
                ...state,
                ...data,
            };
            return {
                ...state
            };


        default:
            return state;
    }
};

export default web3Reducer;
