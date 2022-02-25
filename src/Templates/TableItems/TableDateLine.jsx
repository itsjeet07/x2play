import React from 'react';
import PropTypes from 'prop-types';
import { withServiceConsumer } from 'services/Context';

const propTypes = {
	children: PropTypes.node,
	service: PropTypes.shape({
		pref: PropTypes.string.isRequired,
	}).isRequired,
};

const defaultProps = {
	children: null,
};

const TableDateLine = ({ children, service: { pref } }) => {
	return (
		<span className={`main-table__line_date main-table__line_date${pref}`}>
			{children}
		</span>
	);
};

TableDateLine.propTypes = propTypes;
TableDateLine.defaultProps = defaultProps;

export default withServiceConsumer(TableDateLine);
