import React from 'react';
import PropTypes from 'prop-types';
import { withServiceConsumer } from 'services/Context';

const propTypes = {
	children: PropTypes.node,
	service: PropTypes.shape({
		pref: PropTypes.string.isRequired,
	}).isRequired,
};

const defaultProps = {
	children: null,
};

const ModalBorderWrap = ({ children, service: { pref } }) => {
	return (
		<div className={`modal__border-wrap modal__border-wrap_${pref}`}>
			{children}
		</div>
	);
};

ModalBorderWrap.propTypes = propTypes;
ModalBorderWrap.defaultProps = defaultProps;

export default withServiceConsumer(ModalBorderWrap);
