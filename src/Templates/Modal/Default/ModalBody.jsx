import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    children: PropTypes.node,
};

const defaultProps = {
    children: null,
};

const ModalBody = ({ children }) => {
    return <div className="modal__body">{children}</div>;
};

ModalBody.propTypes = propTypes;
ModalBody.defaultProps = defaultProps;

export default ModalBody;
