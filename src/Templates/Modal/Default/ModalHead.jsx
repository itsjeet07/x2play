import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'templates/Icon';

const propTypes = {
	icon: PropTypes.string,
	title: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	isWarn: PropTypes.bool,
	isAlert: PropTypes.bool,
};

const defaultProps = {
	icon: '',
	isWarn: false,
	isAlert: false,
};

const ModalHead = ({ icon, title, onClick, isWarn, isAlert }) => {
	return (
		<div
			className={`modal__head ${isWarn ? 'warning' : ''} ${
				isAlert ? 'alert' : ''
			}`}
		>
			<div className='modal__title'>
				<div className='modal__title-icon'>{icon && <Icon name={icon} />}</div>

				<div className='modal__title-line'>{title}</div>
			</div>
			<button type='button' onClick={onClick} className='modal__close'>
				<Icon name='close' />
			</button>
		</div>
	);
};

ModalHead.propTypes = propTypes;
ModalHead.defaultProps = defaultProps;

export default ModalHead;
