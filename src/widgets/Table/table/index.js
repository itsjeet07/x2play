import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withTagDefaultProps } from 'hoc';
import { withServiceConsumer } from 'services/Context';
import { Table } from 'templates/Table';

const TableBody = ({ items, columns, buttons, onClickItem, withoutHead }) => {
	const _columns = !!buttons.length ? [...columns, '-1'] : columns;

	return (
		<Table
			buttons={buttons}
			columns={_columns}
			items={items}
			onClickItem={onClickItem}
			withoutHead={withoutHead}
		/>
	);
};

TableBody.propTypes = {
	columns: PropTypes.arrayOf(PropTypes.string).isRequired,
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
	buttons: PropTypes.arrayOf(PropTypes.object),
};

TableBody.defaultProps = {
	buttons: [],
};

const mapStateToProps = (state, { service: { getStoreItem } }) => {
	return {
		items: getStoreItem(state, 'items', []),
		columns: getStoreItem(state, 'columns', []),
	};
};

export default compose(
	withServiceConsumer,
	withTagDefaultProps(mapStateToProps)
)(TableBody);
