import React from 'react';
import PropTypes from 'prop-types';

const containerCss = {
    display: 'flex',
    marginLeft: '-1.6rem',
};

const propTypes = {
    children: PropTypes.node.isRequired,
    styles: PropTypes.objectOf(PropTypes.any),
};

const defaultProps = {
    styles: {},
};

const SliderList = ({ children, styles }) => {
    return (
        <div className="embla-slider__list" style={{ ...containerCss, ...styles }}>
            {children}
        </div>
    );
};

SliderList.propTypes = propTypes;
SliderList.defaultProps = defaultProps;

export default SliderList;
