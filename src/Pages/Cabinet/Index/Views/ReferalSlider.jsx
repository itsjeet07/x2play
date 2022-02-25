import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { isEmpty } from 'ramda';
import { withTagDefaultProps } from 'hoc';
import { withServiceConsumer } from 'services/Context';
import { SliderWrap, Slider, SliderList, SliderItem } from 'templates/Slider';
import { Referal } from 'templates/Referal';

const propTypes = {
	referals: PropTypes.objectOf(PropTypes.any).isRequired,
};

const ReferalSlider = ({ referals, t, totalRefs }) => {
	return (
		<SliderWrap
			title={t('Ваши рефералы')}
			subtitle={t('Вы пригласили')}
			subject={`${totalRefs} ${t('участников')}`}
		>
			{!isEmpty(referals) && (
				<Slider controls>
					<SliderList>
						{referals?.referrals.map((item, index) => (
							<SliderItem key={index}>
								<Referal
									name={''}
									bonus={referals?.bonuses[index] / 1_000_000}
								/>
							</SliderItem>
						))}
					</SliderList>
				</Slider>
			)}
		</SliderWrap>
	);
};

ReferalSlider.propTypes = propTypes;

const mapStateToProps = (state, ownProps) => {
	const { getStoreItem } = ownProps.service;
	return {
		totalRefs: state?.web3?.referalInfo?.referrals?.length,
		referals: state.web3.referalInfo,
	};
};

export default compose(
	withServiceConsumer,
	withTagDefaultProps(mapStateToProps, null)
)(ReferalSlider);
