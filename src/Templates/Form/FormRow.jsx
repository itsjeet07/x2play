import React from 'react';
import PropTypes from 'prop-types';
import { withServiceConsumer } from 'services/Context';

const propTypes = {
	children: PropTypes.node,
	service: PropTypes.shape({
		pref: PropTypes.string.isRequired,
	}).isRequired,
};

const defaulProps = {
	children: null,
};

const FormRow = ({ children, service: { pref } }) => {
	return <div className={`form__row form__row_${pref}`}>{children}</div>;
};

FormRow.propTypes = propTypes;
FormRow.defaulProps = defaulProps;

export default withServiceConsumer(FormRow);
