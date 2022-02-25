import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    children: PropTypes.node,
};

const defaultProps = {
    children: null,
};

const ModalRow = ({ children }) => {
    return <div className="modal__row">{children}</div>;
};

ModalRow.propTypes = propTypes;
ModalRow.defaultProps = defaultProps;

export default ModalRow;
