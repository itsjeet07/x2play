import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    loading: PropTypes.bool.isRequired,
};

const Preloader = ({ loading }) => (
    <div className={`preloader ${loading ? 'preloader_show' : ''}`}>
        <div className="preloader__spinner" />
    </div>
);

Preloader.propTypes = propTypes;

export default Preloader;
