import React from 'react';
import PropTypes from 'prop-types';
import { documentType } from 'services/enum';
import { withServiceConsumer } from 'services/Context';
import { Icon } from 'templates/Icon';

const propTypes = {
	type: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

const checkType = (type) => {
	switch (type) {
		case documentType.RUFADA_ACCOUNT:
			return <Icon name='account' />;

		case documentType.FILE:
		case documentType.LEGAL_ESTATE_FILE:
			return <Icon name='document' />;

		default:
			return <Icon name='folder' />;
	}
};

const TableDocumentRow = ({ type, title, service: { pref } }) => {
	return (
		<div title={title} className={`main-table__item main-table__item_${pref}`}>
			<div className='main-table__item-icon'>{checkType(type)}</div>
			<div className='main-table__item-content'>
				<span className='main-table__line'>{title}</span>
			</div>
		</div>
	);
};

TableDocumentRow.propTypes = propTypes;

export default withServiceConsumer(TableDocumentRow);
