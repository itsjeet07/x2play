import React from 'react';
import PropTypes from 'prop-types';
import { withServiceConsumer } from 'services/Context';

const propTypes = {
	name: PropTypes.string.isRequired,
	service: PropTypes.shape({
		pref: PropTypes.string.isRequired,
	}).isRequired,
	children: PropTypes.node,
};

const defaultProps = {
	children: null,
};

const Label = ({ children, name, service: { pref } }) => {
	return (
		<label htmlFor={name} className={`content-label content-label_${pref}`}>
			{children}
		</label>
	);
};

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default withServiceConsumer(Label);
