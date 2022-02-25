import React from 'react';
import { compose } from 'redux';
import { NavLink } from 'react-router-dom';
import { ServiceProvider } from 'services/Context';
import { withTagDefaultProps } from 'hoc';
import { Container } from 'templates/Content';
import { Logo } from 'templates/Logo';
import { Img } from 'templates/Img';
import * as service from './Services';

const currentYear = new Date().getFullYear();

const Footer = ({ t }) => {
	return (
		<ServiceProvider value={service}>
			<footer className='footer'>
				<Container>
					<div className='footer__wrap'>
						<div className='footer__row'>
							<div className='footer__col'>
								<Logo />
							</div>
							<div className='footer__col'>
								<div className='support'>
									<button type='button'>
										<Img
											src='/assets/images/icons/telegram.svg'
											alt='telegram'
										/>
									</button>
									<span>{t('Техническая поддержка')}</span>
								</div>
							</div>
							<div className='footer__col'>
								<div className='version'>{`${t('Версия:')} 0.01`}</div>
							</div>
						</div>
						<div className='footer__row'>
							<div className='footer__col'>
								<div className='copyright'>{`CCO Online – ${currentYear}`}</div>
								<NavLink to='/' className='politic-link'>
									{t('Политика обработки данных')}
								</NavLink>
							</div>
							<div className='footer__col footer__col_spacer'>
								<div className='footer-spacer' />
							</div>
							<div className='footer__col'>
								<ul className='footer-nav'>
									<li className='footer-nav__item'>
										<NavLink to='/' className='footer-nav__link'>
											{t('Принцип игры')}
										</NavLink>
									</li>
									{/* <li className='footer-nav__item'>
										<NavLink to='/' className='footer-nav__link'>
											{t('Новости')}
										</NavLink>
									</li>
									<li className='footer-nav__item'>
										<NavLink to='/' className='footer-nav__link'>
											{t('Контакты')}
										</NavLink>
									</li> */}
								</ul>
							</div>
						</div>
					</div>
				</Container>
			</footer>
		</ServiceProvider>
	);
};

export default compose(withTagDefaultProps(null, null))(Footer);
