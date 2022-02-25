import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withTagDefaultProps } from 'hoc';
import { withServiceConsumer } from 'services/Context';
import { BalanceCard, BalanceInfo } from 'templates/Balance';
import { Web3Actions } from 'app/Actions';
import Constants from 'app/Constants';
import { connectWallet } from 'services/Web3';

const propTypes = {
	total: PropTypes.string.isRequired,
	address: PropTypes.string.isRequired,
};

const BalanceBlock = ({
	total,
	address,
	saveAddress,
	setCCOBalance,
	setOpenTopUp,
	setOpenWithdraw,
}) => {
	return (
		<>
			<BalanceCard
				total={total}
				onClickReplenish={() => setOpenTopUp(true)}
				onClickWithdraw={() => setOpenWithdraw(true)}
			/>
			<BalanceInfo
				address={address}
				onClick={() =>
					connectWallet(
						(address) => {
							saveAddress(address);
						},
						(balance) => {
							setCCOBalance(balance);
						}
					)
				}
			/>
		</>
	);
};

BalanceBlock.propTypes = propTypes;

const mapStateToProps = (state, ownProps) => {
	const { getStoreItem } = ownProps.service;
	return {
		total: state.web3.ccoBalance,
		address: state.web3.address,
	};
};

const mapDispatchToProps = (dispatch) => ({
	// onLoad: service.getActionStore('pageLoad')(dispatch),
	saveAddress: (address) =>
		Web3Actions.saveAddress(
			dispatch({ type: Constants.SET_ADDRESS, data: { address: address } })
		),
	setCCOBalance: (balance) =>
		Web3Actions.setCCOBalance(
			dispatch({
				type: Constants.SET_CCO_BALANCE,
				data: { ccoBalance: balance },
			})
		),
});

export default compose(
	withServiceConsumer,
	withTagDefaultProps(mapStateToProps, mapDispatchToProps)
)(BalanceBlock);
