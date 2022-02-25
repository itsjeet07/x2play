import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'ramda';
import { compose } from 'redux';
import { withTagDefaultProps } from 'hoc';
import { withServiceConsumer } from 'services/Context';
import { SliderWrap, Slider, SliderList, SliderItem } from 'templates/Slider';
import { GameCard } from 'templates/Game';

const propTypes = {
	games: PropTypes.objectOf(PropTypes.any).isRequired,
};

const GamesSlider = ({ games, t, totalGames }) => {
	return (
		<SliderWrap
			title={t('Мои игры')}
			subtitle={t('Вы участвовали в')}
			subject={`${totalGames} ${t('играх')}`}
		>
			{!isEmpty(games) && (
				<Slider controls>
					<SliderList>
						{games?.profit?.length ? (
							games?.profit?.map((item, index) => (
								<SliderItem key={index}>
									<GameCard
										playNumber={games?._cycle[index]}
										playId={index}
										dateStart={games?.start[index]}
										dateEnd={games?.finish[index]}
										rate={games?.totalBets[index]}
										players={games?.totalPlayers[index]}
										result={item}
									/>
								</SliderItem>
							))
						) : (
							<div style={{ fontSize: '12px', textAlign: 'center' }}>
								you don't have any games!
							</div>
						)}
					</SliderList>
				</Slider>
			)}
		</SliderWrap>
	);
};

GamesSlider.propTypes = propTypes;

const mapStateToProps = (state, ownProps) => {
	const { getStoreItem } = ownProps.service;

	return {
		totalGames: state?.web3?.myGame?.totalPlayers?.length,
		games: state.web3.myGame,
	};
};

export default compose(
	withServiceConsumer,
	withTagDefaultProps(mapStateToProps, null)
)(GamesSlider);
