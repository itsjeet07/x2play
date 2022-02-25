import React from 'react';
import PropTypes from 'prop-types';
import { withServiceConsumer } from 'services/Context';
import { Avatar } from 'templates/Avatar';

const propTypes = {
	avatar: PropTypes.string,
	name: PropTypes.string,
	date: PropTypes.string,
};

const defaultProps = {
	avatar: '',
	name: '',
	date: '',
};

const TableFirmRow = ({ avatar, name, date, service: { pref } }) => {
	return (
		<div className={`main-table__firm main-table__firm_${pref}`}>
			<div className='main-table__firm-avatar'>
				<Avatar avatar={avatar} firstName={name} />
			</div>
			<div className='main-table__firm-content'>
				<div className='main-table__firm-head'>{name}</div>
				<div title={date} className='main-table__firm-body'>
					{date}
				</div>
			</div>
		</div>
	);
};

TableFirmRow.propTypes = propTypes;
TableFirmRow.defaultProps = defaultProps;

export default withServiceConsumer(TableFirmRow);
