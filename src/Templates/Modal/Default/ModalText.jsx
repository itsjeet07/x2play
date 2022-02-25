import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.node,
};

const defaultProps = {
    children: null,
};

const ModalText = ({ children }) => {
    return <div className="modal__text">{children}</div>;
};

ModalText.propTypes = propTypes;
ModalText.defaultProps = defaultProps;

export default ModalText;
