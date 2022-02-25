import React from 'react';
import PropTypes from 'prop-types';
import { withServiceConsumer } from 'services/Context';
import TableHeadColumn from './TableHeadColumn';
import TableBodyColumn from './TableBodyColumn';

const propTypes = {
	columns: PropTypes.array.isRequired,
	items: PropTypes.array.isRequired,
	buttons: PropTypes.arrayOf(PropTypes.object),
	onClickItem: PropTypes.func,
	service: PropTypes.shape({
		pref: PropTypes.string.isRequired,
	}).isRequired,
	withoutHead: PropTypes.bool,
};

const defaultProps = {
	buttons: [],
	onClickItem: () => {},
	withoutHead: false,
};

const Table = ({
	columns,
	items,
	buttons,
	onClickItem,
	service: { pref },
	withoutHead,
}) => (
	<table className={`main-table main-table_${pref}`}>
		{!withoutHead && (
			<thead className={`main-table__head main-table__head_${pref}`}>
				<tr className={`main-table__row main-table__row_${pref}`}>
					{columns.map((column, k) => (
						<TableHeadColumn key={`${column}-${k}`} column={column} />
					))}
				</tr>
			</thead>
		)}
		<tbody className={`main-table__body main-table__body_${pref}`}>
			{items.map((item) => (
				<tr
					className={`main-table__row main-table__row_${pref}`}
					key={item._id}
					onClick={onClickItem ? () => onClickItem(item) : () => {}}
				>
					{columns.map((key) => (
						<TableBodyColumn
							buttons={buttons}
							key={`${item._id}-${key}`}
							column={key}
							item={item}
						/>
					))}
				</tr>
			))}
		</tbody>
	</table>
);

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default withServiceConsumer(Table);
