import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withTagDefaultProps } from 'hoc';
import { withServiceConsumer } from 'services/Context';
import { Wrap } from 'templates/Content';
import SettingsInfoBlock from './SettingsInfoBlock';
import SettingsEditBlock from './SettingsEditBlock';

const propTypes = {
	referalLink: PropTypes.string.isRequired,
};

const MainWrap = ({ referalLink }) => {
	return (
		<Wrap>
			<div className='cabinet'>
				<div className='cabinet__row row'>
					<div className='cabinet__col col-5'>
						<SettingsInfoBlock />
					</div>
					<div className='cabinet__col col-7 cabinet__col_games'>
						{/* <SettingsEditBlock />  */}
					</div>
				</div>
			</div>
		</Wrap>
	);
};

MainWrap.propTypes = propTypes;

const mapStateToProps = (state, ownProps) => {
	// const { getStoreItem } = ownProps.service;
	// return {
	//     referalLink: getStoreItem(state, 'referalLink', ''),
	// };
};

const mapDispatchToProps = (dispatch) => ({
	// onLoad: service.getActionStore('pageLoad')(dispatch),
});

export default compose(
	withServiceConsumer,
	withTagDefaultProps(null, null)
)(MainWrap);
