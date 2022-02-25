import React from 'react';
import PropTypes from 'prop-types';
import { withServiceConsumer } from 'services/Context';
import { DropDown } from 'templates/DropDown';

const propTypes = {
	column: PropTypes.string.isRequired,
	buttons: PropTypes.arrayOf(PropTypes.object),
	item: PropTypes.object,
	service: PropTypes.shape({
		getViewItem: PropTypes.func.isRequired,
		pref: PropTypes.string.isRequired,
	}).isRequired,
};

const defaultProps = {
	buttons: [],
};

const TableBodyColumn = ({
	column,
	item,
	buttons,
	service: { getViewItem, pref },
}) => {
	return (
		<>
			{column === '-1' ? (
				<td className={`main-table__col main-table__col_${pref}`}>
					<DropDown targetIcon='dots' buttons={buttons} item={item} />
				</td>
			) : (
				<td className={`main-table__col main-table__col_${pref}`}>
					{getViewItem(column, item)}
				</td>
			)}
		</>
	);
};

TableBodyColumn.propTypes = propTypes;
TableBodyColumn.defaultProps = defaultProps;

export default withServiceConsumer(TableBodyColumn);
