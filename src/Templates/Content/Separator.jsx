import React from 'react';
import PropTypes from 'prop-types';
import { withServiceConsumer } from 'services/Context';

const propTypes = {
	service: PropTypes.shape({
		pref: PropTypes.string.isRequired,
	}).isRequired,
	isVertical: PropTypes.bool,
};

const defaultProps = {
	isVertical: false,
};

const Separator = ({ isVertical, service: { pref } }) => {
	return (
		<div
			className={`separator-${
				isVertical ? 'vertical' : 'horizontal'
			} separator_${pref}`}
		/>
	);
};

Separator.propTypes = propTypes;
Separator.defaultProps = defaultProps;

export default withServiceConsumer(Separator);
