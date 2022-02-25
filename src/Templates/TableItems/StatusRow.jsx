import React from 'react';
import PropTypes from 'prop-types';
import { withServiceConsumer } from 'services/Context';

const propTypes = {
	children: PropTypes.node,
	list: PropTypes.arrayOf(PropTypes.object).isRequired,
	status: PropTypes.number.isRequired,
};

const StatusRow = ({ list, status, service: { pref } }) => {
	const { label, color } = list.find((item) => item.value === status);
	return (
		<span className={`status-row color_${color} status-row_${pref}`}>
			{label}
		</span>
	);
};

StatusRow.propTypes = propTypes;

export default withServiceConsumer(StatusRow);
