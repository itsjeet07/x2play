import React from 'react';
import { compose } from 'redux';
import { withTagDefaultProps } from 'hoc';
import { TextLogo } from 'templates/Logo';

const AuthSidebar = ({ t }) => {
	return (
		<div className='auth__sidebar'>
			<div
				className='auth__overlay'
				style={{ backgroundImage: 'url("/assets/images/content/card-bg.png")' }}
			/>
			<TextLogo />
			<div className='slogan'>
				<div>{t('Выигрывайте')}</div>
				<div className='color_yellow'>{t('сегодня')}</div>
			</div>
		</div>
	);
};

export default compose(withTagDefaultProps())(AuthSidebar);
