import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withServiceConsumer } from 'services/Context';
import { Img } from 'templates/Img';

const propTypes = {
	service: PropTypes.shape({
		pref: PropTypes.string.isRequired,
	}).isRequired,
};

const Logo = ({ service: { pref } }) => {
	return (
		<div className={`logo logo_${pref}`}>
			<NavLink to='/' className={`logo__link logo__link_${pref}`}>
				<Img src='/assets/images/icons/logo.svg' alt='logo' />
			</NavLink>
		</div>
	);
};

Logo.propTypes = propTypes;

export default withServiceConsumer(Logo);
