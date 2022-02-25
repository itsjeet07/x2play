import React from 'react';
import PropTypes from 'prop-types';

const slideCss = {
    position: 'relative',
};

const propTypes = {
    children: PropTypes.node.isRequired,
    styles: PropTypes.objectOf(PropTypes.any),
};

const defaultProps = {
    styles: {},
};

const SliderItem = ({ children, styles }) => {
    return (
        <div className="embla-slider__item" style={{ ...slideCss, ...styles }}>
            {children}
        </div>
    );
};

SliderItem.propTypes = propTypes;
SliderItem.defaultProps = defaultProps;

export default SliderItem;
