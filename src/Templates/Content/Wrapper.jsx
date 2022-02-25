import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    children: PropTypes.node.isRequired,
};

const Wrapper = ({ children }) => {
    return <div className="wrapper">{children}</div>;
};

Wrapper.propTypes = propTypes;

export default Wrapper;
