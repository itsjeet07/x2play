import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    total: PropTypes.number,
};

const defaultProps = {
    total: null,
};

const SeatsDesc = ({ total }) => {
    return (
        <div className="seats-desc">
            All prices are in USD and all sales are final. Starting today, you will be charged ${total} every 30 days
            while this subscription is active. Cancel any time.
        </div>
    );
};

SeatsDesc.propTypes = propTypes;
SeatsDesc.defaultProps = defaultProps;

export default SeatsDesc;
