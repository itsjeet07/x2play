import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { withTagDefaultProps } from 'hoc';
import { auth } from 'services';

const propTypes = {
	onClick: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired,
};

const Hamburger = ({ t, onClick, show }) => {
	const history = useHistory();
	const logout = (e) => {
		e.preventDefault();
		onClick();
		auth.logout();
		history.push('/login');
	};

	return (
		<div className={`hamburger-wrap ${show ? 'active' : ''}`}>
			<button type='button' className='hamburger' onClick={onClick}>
				<span className='hamburger__menu' />
			</button>
			<ul className='menu'>
				<li className='menu__item'>
					<a className='menu__link' href='/'>
						{t('Реферальная программа')}
					</a>
				</li>
				{/* <li className="menu__item">
                    <a className="menu__link" href="/">
                        {t('Профиль')}
                    </a>
                </li> */}
				<li className='menu__item'>
					<a className='menu__link' href='/' onClick={logout}>
						{t('Выход')}
					</a>
				</li>
			</ul>
		</div>
	);
};

Hamburger.propTypes = propTypes;

export default compose(withTagDefaultProps(null, null))(Hamburger);
