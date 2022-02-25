import React from 'react';
import PropTypes from 'prop-types';
import { withServiceConsumer } from 'services/Context';

const propTypes = {
	children: PropTypes.node,
};

const defaultProps = {
	children: null,
};

const TableDescriptionRow = ({ children, service: { pref } }) => (
	<div className={`main-table__description main-table__description_${pref}`}>
		{children}
	</div>
);

TableDescriptionRow.propTypes = propTypes;
TableDescriptionRow.defaultProps = defaultProps;

export default withServiceConsumer(TableDescriptionRow);
