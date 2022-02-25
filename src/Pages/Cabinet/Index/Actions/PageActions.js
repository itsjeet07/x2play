import Constants from '../Constants';
import { requestInitPage, requestSubmitForm } from '../Services';
import { placeBet } from 'services/Web3';

const fetchRequested = (dispatch) => {
	dispatch({ type: Constants.FETCH_ITEMS_REQUESTED });
};

export const pageLoad = (dispatch) => async () => {
	fetchRequested(dispatch);

	const data = await requestInitPage();

	dispatch({
		type: Constants.PAGE_LOADED,
		data,
	});
};

export const onChange = (dispatch) => (key, value) => {
	dispatch({ type: Constants.CHANGE_FORM, data: { key, value } });
};

export const submitForm = (dispatch) => async (data) => {
	fetchRequested(dispatch);

	console.log(JSON.stringify(data));

	await placeBet(data);

	await requestSubmitForm(data);

	dispatch({
		type: Constants.FETCH_ITEMS_SUCCESSED,
		data: {},
	});
};
