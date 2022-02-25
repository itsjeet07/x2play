import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    children: PropTypes.node,
};

const defaultProps = {
    children: null,
};

const ModalFoot = ({ children }) => {
    return <div className="modal__foot">{children}</div>;
};

ModalFoot.propTypes = propTypes;
ModalFoot.defaultProps = defaultProps;

export default ModalFoot;
