import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.node,
};

const defaultProps = {
    children: null,
};

const ModalBodyTitle = ({ children }) => {
    return <div className="modal__body-title">{children}</div>;
};

ModalBodyTitle.propTypes = propTypes;
ModalBodyTitle.defaultProps = defaultProps;

export default ModalBodyTitle;
