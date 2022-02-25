import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withTagDefaultProps } from 'hoc';
import { withServiceConsumer } from 'services/Context';

const propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	subject: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

const SliderWrap = ({ title, subtitle, subject, children }) => {
	return (
		<div className='game-slider'>
			<div className='game-slider__head'>
				<div className='game-slider__title'>{title}</div>
				<div className='game-slider__subject'>
					<span>{subtitle}</span>
					<span className='color_yellow'>{` ${subject}`}</span>
				</div>
			</div>
			<div className='game-slider__body'>{children}</div>
		</div>
	);
};

SliderWrap.propTypes = propTypes;

export default compose(
	withServiceConsumer,
	withTagDefaultProps(null, null)
)(SliderWrap);
