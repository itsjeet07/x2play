import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withTagDefaultProps } from 'hoc';
import { withServiceConsumer } from 'services/Context';
import { Clipboard } from 'templates/Button';

const propTypes = {
	link: PropTypes.string.isRequired,
	status: PropTypes.bool.isRequired,
};

const ReferalCard = ({ link, status, t }) => {
	return (
		<div id='ref-block' className='referal-card'>
			<div className='referal-card__head'>
				<div className='referal-card__title'>{t('Реферальная программа')}</div>
				<div
					className={`referal-card__indicator ${
						status ? 'active' : 'inactive'
					}`}
				>
					<span className='status' />
					<span className='status-text'>{`${t('статус:')} ${
						status ? 'активно' : 'неактивно'
					}`}</span>
				</div>
			</div>
			<div className='referal-card__label'>{t('Ваша реферальная ссылка')}</div>
			<div className='referal-card__copy'>
				<div className='fake-input'>{link}</div>
				<div className='referal-card__copy-button'>
					<Clipboard name='referal-link' value={link} />
					<span>{t('Скопировать')}</span>
				</div>
			</div>
			<div className='referal-card__text'>
				Скоприуйте и передайте рефералу ссылку
				<span className='color_yellow'> → </span>
				Он регистрируется по вашей ссылке
				<span className='color_yellow'> → </span>Когда реферал пополняет баланс
				вы гарантировано{' '}
				<span className='color_yellow'>
					получаете 1% от всех сумм его пополнений
				</span>
			</div>
		</div>
	);
};

ReferalCard.propTypes = propTypes;

export default compose(
	withServiceConsumer,
	withTagDefaultProps(null, null)
)(ReferalCard);
