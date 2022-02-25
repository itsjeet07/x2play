import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { ServiceProvider } from 'services/Context';
import { withTagDefaultProps } from 'hoc';
import { Container } from 'templates/Content';
import { AuthHeader, UnAuthHeader } from './Views';
import { Hamburger } from './Items';
import * as service from './Services';

const propTypes = {
	isAuth: PropTypes.bool.isRequired,
};

const Header = ({ isAuth }) => {
	const [show, setShow] = useState(false);
	const handleSetShow = () => setShow(!show);

	return (
		<ServiceProvider value={service}>
			<header className='header'>
				<Container>
					<div className='header__wrap'>
						{isAuth ? <UnAuthHeader /> : <AuthHeader />}
						<Hamburger onClick={handleSetShow} show={show} />
					</div>
				</Container>
			</header>
			{show && (
				<div
					className='fixed-bg'
					onClick={handleSetShow}
					onKeyDown={handleSetShow}
				/>
			)}
		</ServiceProvider>
	);
};

Header.propTypes = propTypes;

export default compose(withTagDefaultProps(null, null))(Header);
