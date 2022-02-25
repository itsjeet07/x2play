import React from 'react';
import PropTypes from 'prop-types';
import { withServiceConsumer } from 'services/Context';

const propTypes = {
	service: PropTypes.shape({
		pref: PropTypes.string.isRequired,
	}).isRequired,
	children: PropTypes.node.isRequired,
};

const Form = ({ onSubmit, service: { pref }, children }) => {
	const _onSubmit = (e) => {
		e.preventDefault();
		onSubmit();
	};
	return (
		<form className={`form form_${pref}`} onSubmit={_onSubmit} noValidate>
			{children}
		</form>
	);
};

Form.propTypes = propTypes;

export default withServiceConsumer(Form);
