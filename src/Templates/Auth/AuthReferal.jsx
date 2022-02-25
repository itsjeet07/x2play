import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withTagDefaultProps } from 'hoc';

const propTypes = {
	code: PropTypes.string.isRequired,
};

const AuthReferal = ({ code, t }) => {
	return (
		<div className='auth__referal'>
			<span>{t('Реферальный код:')}</span>
			<span className='color_yellow'>{` ${code}`}</span>
		</div>
	);
};

AuthReferal.propTypes = propTypes;

export default compose(withTagDefaultProps(null, null))(AuthReferal);
