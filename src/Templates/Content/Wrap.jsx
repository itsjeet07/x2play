import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.node.isRequired,
};

const Wrap = ({ children }) => {
    return <div className="main__wrap">{children}</div>;
};

Wrap.propTypes = propTypes;

export default Wrap;
