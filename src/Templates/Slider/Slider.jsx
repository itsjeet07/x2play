import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useEmblaCarousel } from 'embla-carousel/react';

const viewportCss = {
    overflow: 'hidden',
};

const propTypes = {
    children: PropTypes.node.isRequired,
    options: PropTypes.objectOf(PropTypes.any),
    controls: PropTypes.bool,
    dots: PropTypes.bool,
    styles: PropTypes.objectOf(PropTypes.any),
};

const defaultProps = {
    options: {},
    controls: false,
    dots: false,
    styles: {},
};

const Slider = ({ children, options, controls, dots, styles }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', ...options });
    const [scrollSnaps, setScrollSnaps] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi, setSelectedIndex]);

    useEffect(() => {
        if (emblaApi) {
            onSelect();
            setScrollSnaps(emblaApi.scrollSnapList());
            setSelectedIndex(emblaApi.selectedScrollSnap());
            emblaApi.on('select', onSelect);
        }
    }, [emblaApi, setScrollSnaps, onSelect]);

    const convertDotNum = (num) => num.toString().padStart(2, '0');

    return (
        <div className="embla-slider" style={{ ...viewportCss, ...styles }} ref={emblaRef}>
            {children}
            {controls && (
                <div className="embla-slider__buttons-container">
                    <button
                        aria-label="button-prev-slide"
                        onClick={scrollPrev}
                        className="embla-slider__btn embla-slider__btn_prev"
                    />
                    {dots && (
                        <div className="embla-slider__dots">
                            <span className="embla-slider__selected-dot">{convertDotNum(selectedIndex + 1)}</span>
                            <span> / {convertDotNum(scrollSnaps.length)}</span>
                        </div>
                    )}
                    <button
                        aria-label="button-next-slide"
                        onClick={scrollNext}
                        className="embla-slider__btn embla-slider__btn_next"
                    />
                </div>
            )}
        </div>
    );
};

Slider.propTypes = propTypes;
Slider.defaultProps = defaultProps;

export default Slider;
