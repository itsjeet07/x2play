import React from 'react';
import PropTypes from 'prop-types';
// import { Avatar } from 'templates/Avatar';

const propTypes = {
	onClick: PropTypes.func,
	image: PropTypes.string,
	firstName: PropTypes.string,
	lastName: PropTypes.string,
	email: PropTypes.string,
	isActive: PropTypes.bool,
};

const defaultProps = {
	onClick: () => {},
	image: '',
	firstName: '',
	lastName: '',
	email: '',
	isActive: false,
};

const ModalUser = ({
	onClick,
	image,
	firstName,
	lastName,
	email,
	isActive,
}) => {
	return (
		<div className={`modal-user ${isActive ? 'active' : ''}`} onClick={onClick}>
			{/* <div className="modal-user__img">
                <Avatar avatar={image} firstName={firstName} lastName={lastName} />
            </div> */}
			<div className='modal-user__content'>
				<div className='modal-user__title'>{`${firstName} ${lastName}`}</div>
				<a className='modal-user__email' href={`mailto:${email}`}>
					{email}
				</a>
			</div>
		</div>
	);
};

ModalUser.propTypes = propTypes;
ModalUser.defaultProps = defaultProps;

export default ModalUser;
