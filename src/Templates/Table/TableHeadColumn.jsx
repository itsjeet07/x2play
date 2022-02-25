import React from 'react';
import PropTypes from 'prop-types';
import { withServiceConsumer } from 'services/Context';

const propTypes = {
	column: PropTypes.string.isRequired,
	service: PropTypes.shape({
		getTableLabel: PropTypes.func.isRequired,
		pref: PropTypes.string.isRequired,
	}).isRequired,
};

const TableHeadColumn = ({ column, service: { getTableLabel, pref } }) => {
	return (
		<>
			{column === '-1' ? (
				<th className={`main-table__col main-table__col_${pref}`} />
			) : (
				<th className={`main-table__col main-table__col_${pref}`}>
					{getTableLabel(column)}
				</th>
			)}
		</>
	);
};

TableHeadColumn.propTypes = propTypes;

export default withServiceConsumer(TableHeadColumn);
