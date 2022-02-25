import React from 'react';
import PropTypes from 'prop-types';
import { withServiceConsumer } from 'services/Context';
import { Icon } from 'templates/Icon';

const propTypes = {
	name: PropTypes.string.isRequired,
	type: PropTypes.string,
	disabled: PropTypes.bool,
	onClick: PropTypes.func.isRequired,
	children: PropTypes.node,
	service: PropTypes.shape({
		pref: PropTypes.string.isRequired,
	}).isRequired,
	isWarn: PropTypes.bool,
	isPrimary: PropTypes.bool,
	iconLeft: PropTypes.string,
};

const defaultProps = {
	type: 'button',
	disabled: false,
	children: null,
	isWarn: false,
	isPrimary: false,
	iconLeft: '',
};

const SimpleButton = ({
	name,
	type,
	disabled,
	onClick,
	children,
	service: { pref },
	isWarn,
	isPrimary,
	iconLeft,
}) => {
	return (
		<button
			aria-label={name}
			type={type}
			disabled={disabled}
			onClick={onClick}
			className={`button button_${pref} button_simple ${
				isWarn ? 'warning' : ''
			} ${isPrimary ? 'primary' : ''}`}
		>
			{iconLeft && <Icon name={iconLeft} />}
			<span className='button__text'>{children}</span>
		</button>
	);
};

SimpleButton.propTypes = propTypes;
SimpleButton.defaultProps = defaultProps;

export default withServiceConsumer(SimpleButton);
