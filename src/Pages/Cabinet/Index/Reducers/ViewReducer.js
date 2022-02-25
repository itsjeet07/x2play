import { mergeDeepLeft } from 'ramda';
import Constants from '../Constants';

const initState = {
    loading: false,
    balance: {
        total: '',
        address: '',
    },
    games: [],

    referals: [],

    referalLink: '',

    currentGame: {
        rate: '42',
        users: '24',
        id: '24101',
        countToWithdraw: '241',
        items: [
            {
                value: '400/500',
                total: '35%',
                filled: `${(400/500 * 100) * (35/100)}%`,
                type: 1,
            },
            {
                value: '1000/1050',
                total: '40%',
                filled: '40%',
                type: 2,
            },
            {
                value: '972/2205',
                total: '45%',
                filled: '0%',
                type: 3,
            },
            {
                value: '972/4631',
                total: '50%',
                filled: '0%',
                type: 3,
            },
            {
                value: '972/9261',
                total: '60%',
                filled: '0%',
                type: 3,
            },
            {
                value: '972/9261',
                total: '65%',
                filled: '0%',
                type: 3,
            },
        ],
    },

    form: {
        sum: '',
    },
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
                form: {
                    sum: '',
                },
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
            const newState = set(state.form);

            return {
                ...state,
                form: {
                    ...newState,
                },
            };

        default:
            return state;
    }
};
