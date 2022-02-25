import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'templates/Form';
import { Button, SimpleButton } from 'templates/Button';
import { Modal } from 'templates/Modal';
import { ModalDefault } from 'templates/Modal';
const { ModalHead, ModalBody, ModalFoot } = ModalDefault;

const propTypes = {
	handleClose: PropTypes.func.isRequired,
	submit: PropTypes.func.isRequired,
	options: PropTypes.shape({
		icon: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		sendBtn: PropTypes.string.isRequired,
	}).isRequired,
	disabled: PropTypes.bool,
	isWarn: PropTypes.bool,
	isAlert: PropTypes.bool,
};

const defaultProps = {
	disabled: false,
	isWarn: false,
	isAlert: false,
};

const ModalTemplate = ({
	handleClose,
	submit,
	options,
	disabled,
	children,
	isWarn,
	isAlert,
}) => {
	const { icon, title, sendBtn } = options;

	return (
		<Modal onRequestClose={handleClose}>
			<ModalHead
				onClick={handleClose}
				icon={icon}
				title={title}
				isWarn={isWarn}
				isAlert={isAlert}
			/>
			<Form onSubmit={submit}>
				<ModalBody>{children}</ModalBody>
				<ModalFoot>
					<SimpleButton name='cancel' onClick={handleClose}>
						Cancel
					</SimpleButton>
					<Button
						disabled={disabled}
						name={sendBtn}
						onClick={() => {}}
						type='submit'
						isWarn={isWarn}
						isAlert={isAlert}
					>
						{sendBtn}
					</Button>
				</ModalFoot>
			</Form>
		</Modal>
	);
};

ModalTemplate.propTypes = propTypes;
ModalTemplate.defaultProps = defaultProps;

export default ModalTemplate;
