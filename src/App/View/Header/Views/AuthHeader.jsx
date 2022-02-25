import React from 'react';
import { compose } from 'redux';
import { NavLink, useHistory } from 'react-router-dom';
import { withTagDefaultProps } from 'hoc';
import { Logo, TextLogo } from 'templates/Logo';
import { Img } from 'templates/Img';
import { auth } from 'services';

const AuthHeader = ({ t }) => {
	const history = useHistory();
	const logout = () => {
		auth.logout();
		history.push('/login');
	};

	return (
		<>
			<div className='header__col'>
				<Logo />
			</div>
			<div className='header__col'>
				<TextLogo />
			</div>
			<div className='header__col'>
				<a href='#ref-block' className='header__link'>
					{t('Реферальная программа')}
				</a>
				{/* <button className='profile' type='button'>
					<span>ISA</span>
				</button> */}
				<button type='button' className='logout-btn' onClick={logout}>
					<Img src='/assets/images/icons/logout.svg' alt='logout' />
				</button>
			</div>
		</>
	);
};

export default compose(withTagDefaultProps(null, null))(AuthHeader);
