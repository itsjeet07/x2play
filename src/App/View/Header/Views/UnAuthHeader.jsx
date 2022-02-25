import React from 'react';
import { compose } from 'redux';
import { NavLink } from 'react-router-dom';
import { withTagDefaultProps } from 'hoc';
import { Logo } from 'templates/Logo';
import { Img } from 'templates/Img';

const UnAuthHeader = ({ t }) => (
	<>
		<div className='header__col'>
			<Logo />
		</div>
		<div className='header__col'>
			<a
				href='https://google.com'
				target='_blank'
				className='header__link header__link_simple'
			>
				{t('Техническая поддержка')}
			</a>
			{/* <button className='add-user' type='button'>
				<Img src='/assets/images/icons/add-user.svg' alt='add-user' />
			</button> */}
		</div>
	</>
);

export default compose(withTagDefaultProps(null, null))(UnAuthHeader);
