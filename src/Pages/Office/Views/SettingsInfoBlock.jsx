import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withTagDefaultProps } from 'hoc';
import { withServiceConsumer } from 'services/Context';

const propTypes = {
	games: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const SettingsInfo = () => {
	return (
		<div className='settings info'>
			<div className='settings__title'>Настройки</div>
			<div className='settings__row'>
				<div className='settings__col'>
					<div className='info-row'>
						<div className='info-label'>Ваши данные:</div>
						<div className='info-text'>mail213@gmail.com</div>
						<div className='info-text'>ID21042</div>
					</div>
					<div className='info-row'>
						<div className='info-label'>Дата регистрации:</div>
						<div className='info-text'>5.01.21</div>
					</div>
				</div>
			</div>
		</div>
	);
};

SettingsInfo.propTypes = propTypes;

const mapStateToProps = (state, ownProps) => {
	const { getStoreItem } = ownProps.service;
	return {
		games: getStoreItem(state, 'games', []),
	};
};

export default compose(
	withServiceConsumer,
	withTagDefaultProps(null, null)
)(SettingsInfo);
