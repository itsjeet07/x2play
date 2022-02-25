import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.node.isRequired,
};

const Main = ({ children }) => {
    return <main className="main">{children}</main>;
};

Main.propTypes = propTypes;

export default Main;
