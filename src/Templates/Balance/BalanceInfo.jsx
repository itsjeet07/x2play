import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withTagDefaultProps } from 'hoc';
import { withServiceConsumer } from 'services/Context';
import { Clipboard } from 'templates/Button';

const propTypes = {
	address: PropTypes.string.isRequired,
	onClick: PropTypes.func,
};

const defaultProps = {
	onClick: () => {},
};

const BalanceInfo = ({ address, onClick, t }) => {
	return (
		<div className='balance-info'>
			<div className='balance-info__title'>{t('Адрес вашего кошелька:')}</div>
			{!!address ? (
				<div className='balance-info__number'>
					<span>{address}</span>
					<Clipboard name='wallet-address' value={address} />
				</div>
			) : (
				<button onClick={onClick} type='button' className='balance-info__link'>
					{t('Мой кошелек')}
				</button>
			)}
		</div>
	);
};

BalanceInfo.propTypes = propTypes;
BalanceInfo.defaultProps = defaultProps;

export default compose(
	withServiceConsumer,
	withTagDefaultProps(null, null)
)(BalanceInfo);
