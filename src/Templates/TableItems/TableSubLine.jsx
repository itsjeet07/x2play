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

const TableSubLine = ({ children, service: { pref } }) => {
	return (
		<span className={`main-table__subline main-table__subline_${pref}`}>
			{children}
		</span>
	);
};

TableSubLine.propTypes = propTypes;
TableSubLine.defaultProps = defaultProps;

export default withServiceConsumer(TableSubLine);
