import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
    isWhite: PropTypes.bool,
};

const defaultProps = {
    children: null,
    isWhite: false,
};

const SeatsRow = ({ subtitle, title, children, isWhite }) => {
    return (
        <div className="seats-row">
            {children}
            <div className="seats-row__subject">{subtitle}</div>
            <div className={`seats-row__result ${isWhite ? 'seats-row__result_white' : ''}`}>{title}</div>
        </div>
    );
};

SeatsRow.propTypes = propTypes;
SeatsRow.defaultProps = defaultProps;

export default SeatsRow;
