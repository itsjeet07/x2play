import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.node.isRequired,
};

const Content = ({ children }) => {
    return (
        <div id="content" className="content">
            {children}
        </div>
    );
};

Content.propTypes = propTypes;

export default Content;
