import React from 'react';
import PropTypes from 'prop-types';
import { withServiceConsumer } from 'services/Context';
import { TableLine } from 'templates/TableItems';

const propTypes = {
	version: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
};

const TableVersionRow = ({ version, date, service: { pref } }) => {
	return (
		<div className={`main-table__version main-table__version_${pref}`}>
			<span className='main-table__version-title'>Version {version}</span>
			<TableLine>from {date}</TableLine>
		</div>
	);
};

TableVersionRow.propTypes = propTypes;

export default withServiceConsumer(TableVersionRow);
