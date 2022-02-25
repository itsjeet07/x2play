import Constants from '../Constants';
import { requestRegister } from '../Services';

const fetchRequested = (dispatch) => {
	dispatch({ type: Constants.FETCH_ITEMS_REQUESTED });
};

export const pageLoad = (dispatch) => async () => {
	const data = {};

	dispatch({
		type: Constants.PAGE_LOADED,
		data,
	});
};

export const onChange = (dispatch) => (key, value) => {
	dispatch({ type: Constants.CHANGE_FORM, data: { key, value } });
};

export const submitRegisterForm = (dispatch) => async (register) => {
	fetchRequested(dispatch);

	register(dispatch);

	// const res = await requestRegister(data);

	// dispatch({
	//     type: Constants.FETCH_ITEMS_SUCCESSED,
	//     data: { status: 'success' },
	// });
};
