import React from 'react';
import PropTypes from 'prop-types';
import { withServiceConsumer } from 'services/Context';

const propTypes = {
	children: PropTypes.node,
	title: PropTypes.string,
	type: PropTypes.string,
};

const defaultProps = {
	children: null,
	title: '',
	type: '',
};

const checkType = ({ type, title, children, pref }) => {
	switch (type) {
		case 'email':
			return (
				<a
					title={title}
					// href={`mailto:${children}`}
					className={`main-table__line main-table__line_link main-table__line_${pref}`}
				>
					{children}
				</a>
			);

		default:
			return (
				<span
					title={title}
					className={`main-table__line main-table__line_${pref}`}
				>
					{children}
				</span>
			);
	}
};

const TableLine = ({ type, title, children, service: { pref } }) =>
	checkType({ type, title, children, pref });

TableLine.propTypes = propTypes;
TableLine.defaultProps = defaultProps;

export default withServiceConsumer(TableLine);
