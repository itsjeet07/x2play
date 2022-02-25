import React, { useEffect } from 'react';
import { compose } from 'redux';
import { withTagDefaultProps } from 'hoc';
import { Link, NavLink } from 'react-router-dom';
import { withServiceConsumer } from 'services/Context';
import { Img } from 'templates/Img';
import firebase from 'config';
import { toast } from 'react-toastify';

const BlockSuccess = ({ t }) => {
	const sendEmail = () => {
		const user = firebase.auth().currentUser;
		user
			.sendEmailVerification()
			.then((res) => {})
			.catch((error) => {
				toast.error(error.message);
			});
	};

	useEffect(() => {
		sendEmail();
	}, []);

	return (
		<div className='auth__body-single'>
			<div className='auth-info'>
				<div className='auth-info__wrap'>
					<div className='auth-info__before-icon'>
						<Img src='/assets/images/icons/before-icon.svg' alt='before-icon' />
					</div>
					<div className='auth-info__title'>
						{t('Вы успешно зарегистрировались')}
					</div>
					<div className='auth-info__subtitle'>
						{t('Пожалуйста, подтвердите Email введенный при регистрации')}
					</div>
					<div className='auth-info__text'>
						{t('Нажмите на ссылку в письме')}
					</div>
					<div className='auth-info__icon'>
						<Img src='/assets/images/icons/mail.svg' alt='mail' />
					</div>
					<div className='auth-info__link'>
						<Link onClick={sendEmail}>{t('Не получили письмо?')}</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default compose(
	withServiceConsumer,
	withTagDefaultProps(null, null)
)(BlockSuccess);
