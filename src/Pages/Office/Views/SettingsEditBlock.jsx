import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withTagDefaultProps } from 'hoc';
import { withServiceConsumer } from 'services/Context';

const propTypes = {
	games: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const SettingsEdit = () => {
	return (
		<div className='settings'>
			<div className='settings__title'>Настройки</div>
			<div className='settings__row'>
				<div className='settings__col'>
					<div className=''>
						<div>Ваши данные:</div>
						<div>mail213@gmail.com</div>
						<div>ID21042</div>
					</div>
				</div>
			</div>
		</div>
	);
};

SettingsEdit.propTypes = propTypes;

const mapStateToProps = (state, ownProps) => {
	const { getStoreItem } = ownProps.service;
	return {
		games: getStoreItem(state, 'games', []),
	};
};

export default compose(
	withServiceConsumer,
	withTagDefaultProps(null, null)
)(SettingsEdit);
