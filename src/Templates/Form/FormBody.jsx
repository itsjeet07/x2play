import React from 'react';
import PropTypes from 'prop-types';
import { withServiceConsumer } from 'services/Context';

const propTypes = {
	children: PropTypes.node.isRequired,
	service: PropTypes.shape({
		pref: PropTypes.string.isRequired,
	}).isRequired,
};

const FormBody = ({ children, service: { pref } }) => {
	return <div className={`form__body form__body_${pref}`}>{children}</div>;
};

FormBody.propTypes = propTypes;

export default withServiceConsumer(FormBody);
