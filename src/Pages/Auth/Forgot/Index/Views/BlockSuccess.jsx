import React from 'react';
import { compose } from 'redux';
import { withTagDefaultProps } from 'hoc';
import { NavLink } from 'react-router-dom';
import { withServiceConsumer } from 'services/Context';
import { Img } from 'templates/Img';

const BlockSuccess = ({ t }) => {
	return (
		<div className='auth__body-single'>
			<div className='auth-info'>
				<div className='auth-info__wrap'>
					<div className='auth-info__title'>
						{t('Ваш новый пароль ')}
						<br />
						{t('отправлен вам на почту')}
					</div>
					<div className='auth-info__icon'>
						<Img src='/assets/images/icons/mail.svg' alt='mail' />
					</div>
					<div className='auth-info__link'>
						<NavLink to='/'>{t('Не получили письмо?')}</NavLink>
					</div>
				</div>
				<div className='auth-info-after'>
					<NavLink to='/login' className='auth__link'>
						{t('Войти')}
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default compose(
	withServiceConsumer,
	withTagDefaultProps(null, null)
)(BlockSuccess);
