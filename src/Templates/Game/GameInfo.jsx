import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withTagDefaultProps } from 'hoc';
import { withServiceConsumer } from 'services/Context';
import { Img } from 'templates/Img';

const propTypes = {};

const GameInfo = ({ rate, users, t }) => {
	return (
		<div className='game-info'>
			<div className='game-info__subject'>
				<div className='game-info__item'>
					<Img src='/assets/images/icons/lightning.svg' alt='lightning' />
					<span className='game-info__count'>{rate}</span>
					<span className='game-info__label'>{t('ставок')}</span>
				</div>
				<div className='game-info__item'>
					<Img src='/assets/images/icons/user.svg' alt='lightning' />
					<span className='game-info__count'>{users}</span>
					<span className='game-info__label'>{t('участников')}</span>
				</div>
			</div>
		</div>
	);
};

GameInfo.propTypes = propTypes;

export default compose(
	withServiceConsumer,
	withTagDefaultProps(null, null)
)(GameInfo);
