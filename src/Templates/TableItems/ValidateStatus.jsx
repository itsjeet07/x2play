import React from 'react';
import PropTypes from 'prop-types';
import { withServiceConsumer } from 'services/Context';
import { formatDateToLocal } from 'services';

const propTypes = {
	validation: PropTypes.shape({
		status: PropTypes.number.isRequired,
		dateUpdate: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.instanceOf(null),
		]),
	}).isRequired,
	list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const getLabel = (validation, label) => {
	switch (validation.status) {
		case 10:
			return `${label} ${formatDateToLocal(validation.dateUpdate)}`;
		default:
			return label;
	}
};

const ValidateStatus = ({ validation, list, service: { pref } }) => {
	const { label, color } = list.find(
		(item) => item.value === validation.status
	);

	return (
		<span
			className={`validation-status color_${color} validation-status_${pref}`}
		>
			{getLabel(validation, label)}
		</span>
	);
};

ValidateStatus.propTypes = propTypes;

export default withServiceConsumer(ValidateStatus);
