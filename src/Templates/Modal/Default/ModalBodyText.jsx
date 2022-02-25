import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.node,
    alignLeft: PropTypes.bool,
};

const defaultProps = {
    children: null,
    alignLeft: false,
};

const ModalBodyText = ({ children, alignLeft }) => {
    return <div className={`modal__body-text ${alignLeft ? 'align_left' : ''}`}>{children}</div>;
};

ModalBodyText.propTypes = propTypes;
ModalBodyText.defaultProps = defaultProps;

export default ModalBodyText;
