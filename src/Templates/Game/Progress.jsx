import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withTagDefaultProps } from 'hoc';
import { withServiceConsumer } from 'services/Context';

const propTypes = {
	number: PropTypes.number.isRequired,
	value: PropTypes.string.isRequired,
	total: PropTypes.string.isRequired,
	filled: PropTypes.string.isRequired,
	type: PropTypes.number.isRequired,
};

const checkType = (num) => {
	switch (num) {
		case 1:
			return 'filled';

		case 2:
			return 'in-progress';

		default:
			return 'default';
	}
};

const Progress = ({ number, value, total, filled, type }) => {
	return (
		<div className={`progress ${checkType(type)}`}>
			<div className='progress__number'>{number}</div>
			<div className='progress__body'>
				<span className='progress__line' style={{ width: total }}>
					<span className='progress__count'>{value}</span>
				</span>
				<span
					className='progress__line progress__line--filled'
					style={{ width: filled }}
				/>
			</div>
		</div>
	);
};

Progress.propTypes = propTypes;

export default compose(
	withServiceConsumer,
	withTagDefaultProps(null, null)
)(Progress);
