import React from 'react';
import PropTypes from 'prop-types';
import { withServiceConsumer } from 'services/Context';

const propTypes = {
	children: PropTypes.node,
	service: PropTypes.shape({
		pref: PropTypes.string.isRequired,
	}).isRequired,
	autoWidth: PropTypes.bool,
};

const defaultProps = {
	children: null,
	autoWidth: false,
};

const FormBlock = ({ children, service: { pref }, autoWidth }) => {
	return (
		<div
			className={`form__block form__block_${pref} ${
				autoWidth ? 'auto-width' : ''
			}`}
		>
			{children}
		</div>
	);
};

FormBlock.propTypes = propTypes;
FormBlock.defaultProps = defaultProps;

export default withServiceConsumer(FormBlock);
