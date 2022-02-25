import LoginReducer from 'pages/Auth/Login/Index/Reducers';
import RegistrationReducer from 'pages/Auth/Registration/Index/Reducers';
import ForgotReducer from 'pages/Auth/Forgot/Index/Reducers';
import CabinetReducer from 'pages/Cabinet/Index/Reducers';

const reducers = [
	LoginReducer,
	RegistrationReducer,
	ForgotReducer,
	CabinetReducer,
];

const reducer = (state = {}, action) => {
	reducers.forEach((page) =>
		page.forEach((reducer) => (state = reducer(state, action)))
	);
	return state;
};

export default reducer;
