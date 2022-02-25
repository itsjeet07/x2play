import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withTagDefaultProps } from 'hoc';
import { withServiceConsumer } from 'services/Context';
import { Img } from 'templates/Img';
import { formatDateToLocal } from 'services';

const propTypes = {
	playNumber: PropTypes.string.isRequired,
	playId: PropTypes.number.isRequired,
	dateStart: PropTypes.string.isRequired,
	dateEnd: PropTypes.string.isRequired,
	players: PropTypes.string.isRequired,
	result: PropTypes.string.isRequired,
};

const GameCard = ({
	playNumber,
	playId,
	dateStart,
	dateEnd,
	rate,
	players,
	result,
	t,
}) => {
	return (
		<div className='game-card'>
			<div className='game-card__row'>
				<div className='game-card__col'>
					<div className='game-card__label'>
						<div className='game-card__title'>
							x2 <span className='color_yellow'>play </span>
							{/* {`№${playNumber}`} */}
						</div>
					</div>
					<div className='game-card__content'>{`ID${playId}`}</div>
				</div>
				{/* <div className='game-card__col'>
					<div className='game-card__label'>{t('Даты проведения')}</div>
					<div className='game-card__content'>
						<div className='game-card__date'>
							<span>{formatDateToLocal(dateStart)}</span> →{' '}
							<span>{formatDateToLocal(dateEnd)}</span>
						</div>
					</div>
				</div> */}
			</div>
			<div className='game-card__row'>
				<div className='game-card__col'>
					<div className='game-card__label'>{t('Всего ставок')}</div>
					<div className='game-card__content'>
						<div className='game-card__content-row'>
							<div className='game-card__content-icon'>
								<Img src='/assets/images/icons/lightning.svg' alt='lightning' />
							</div>
							<div className='game-card__content-count'>{rate}</div>
							<div className='game-card__content-desc'>{t('ставок')}</div>
						</div>
					</div>
				</div>
				<div className='game-card__col'>
					<div className='game-card__label'>{t('Участников')}</div>
					<div className='game-card__content'>
						<div className='game-card__content-row'>
							<div className='game-card__content-icon'>
								<Img src='/assets/images/icons/user.svg' alt='user' />
							</div>
							<div className='game-card__content-count'>{players}</div>
							<div className='game-card__content-desc'>{t('игроков')}</div>
						</div>
					</div>
				</div>
			</div>
			<div className='game-card__row'>
				<div className='game-card__col'>
					<div className='game-card__label'>{t('Результат игры')}</div>
					<div className='game-card__content'>
						<div className='game-card__content-row'>
							<div className='game-card__content-icon'>
								<span className='game-card__content-fake-icon'>+</span>
							</div>
							<div className='game-card__content-count'>
								<span>{result / 1000000}</span>
								<Img src='/assets/images/icons/cco-logo.svg' alt='cco-logo' />
							</div>
						</div>
					</div>
				</div>
				{/* <div className="game-card__col">
                    <div className="game-card__code">
                        Вы поставили 120 → Выиграли 240 → Вы поставили 240 → Выиграли 80 → Выиграли 400
                    </div>
                </div> */}
			</div>
		</div>
	);
};

GameCard.propTypes = propTypes;

export default compose(
	withServiceConsumer,
	withTagDefaultProps(null, null)
)(GameCard);
