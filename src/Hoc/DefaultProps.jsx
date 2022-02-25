// import { withTranslation } from "services/i18n";
import { connect } from 'react-redux';
import { compose } from 'redux';

const isFunction = (functionToCheck) =>
	functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';

export default (props, actions) => (Views) => {
	props = props || (() => {});
	actions = isFunction(actions) ? actions : () => {};
	return compose(
		connect(
			(state, ownProps) => ({
				...props(state, ownProps),
			}),
			(dispatch, ownProps) => {
				return {
					...actions(dispatch, ownProps),
					t: (str) => str,
					// t: withTranslation,
				};
			}
		)
	)(Views);
};
