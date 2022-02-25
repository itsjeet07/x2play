import React from 'react';
import PropTypes from 'prop-types';
import { withServiceConsumer } from 'services/Context';
import { Icon } from 'templates/Icon';

const propTypes = {
	name: PropTypes.string.isRequired,
	type: PropTypes.string,
	disabled: PropTypes.bool,
	onClick: PropTypes.func.isRequired,
	isBordered: PropTypes.bool,
	fullWidth: PropTypes.bool,
	children: PropTypes.node,
	service: PropTypes.shape({
		pref: PropTypes.string.isRequired,
	}).isRequired,
};

const defaultProps = {
	type: 'button',
	disabled: false,
	isBordered: false,
	fullWidth: false,
	children: null,
};

const Button = ({
	name,
	type,
	disabled,
	onClick,
	isBordered,
	children,
	service: { pref },
	fullWidth,
}) => {
	return (
		<button
			aria-label={name}
			type={type}
			disabled={disabled}
			onClick={onClick}
			className={`button button_${pref} button_${
				isBordered ? 'bordered' : 'default'
			} button_${fullWidth ? 'fullwidth' : ''} `}
		>
			<span className='button__text'>{children}</span>
		</button>
	);
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default withServiceConsumer(Button);
