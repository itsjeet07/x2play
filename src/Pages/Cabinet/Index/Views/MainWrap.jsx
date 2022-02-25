import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withTagDefaultProps } from 'hoc';
import { withServiceConsumer } from 'services/Context';
import { Wrap } from 'templates/Content';
import { ReferalCard } from 'templates/Referal';
import BalanceBlock from './BalanceBlock';
import GamesSlider from './GamesSlider';
import GameBlock from './GameBlock';
import ReferalSlider from './ReferalSlider';
import { Web3Actions } from 'app/Actions';
import Constants from 'app/Constants';
import { connectWallet } from 'services/Web3';
import WithdrawModal from './WithdrawModal';
import ApproveModal from './ApproveModal';
import { withRouter } from 'react-router';
import { useSelector } from 'react-redux';

const propTypes = {
	referalLink: PropTypes.string.isRequired,
};

const MainWrap = ({
	referalLink,
	saveAddress,
	setCCOBalance,
	setReferrerAddress,
	setWithdrawable,
	setAllowed,
	setBalanceOf,
	referrer,
	address,
	t,
	allowed,
	balanceOf,
	setGameInfo,
	setMyGame,
	setReferalInfo,
}) => {
	const [value, setValue] = useState(0);
	const [openTopUp, setOpenTopUp] = useState(false);
	const [openReinvest, setOpenReinvest] = useState(false);
	const [openWithdraw, setOpenWithdraw] = useState(false);
	const [openApprove, setOpenApprove] = useState(false);
	const [referalStatus, setReferalStatus] = useState(false);

	const connectWalletParams = {
		saveAddress: (address) => {
			saveAddress(address);
		},
		setCCOBalance: (balance) => {
			setCCOBalance(balance);
		},
		setReferrerAddress: (address) => {
			setReferrerAddress(address);
		},
		setWithdrawble: (address) => {
			setWithdrawable(address);
		},
		setAllowed: (address) => {
			setAllowed(address);
		},
		setBalanceOf: (address) => {
			setBalanceOf(address);
		},
		setGameInfo: (rate) => {
			setGameInfo(rate);
		},
		setMyGame: (game) => {
			setMyGame(game);
		},
		setReferalInfo: (data) => {
			setReferalInfo(data);
		},
	};
	const isRef = useSelector((state) => state.web3.refId);
	useEffect(() => {
		connectWallet(connectWalletParams);
		isRef.length > 0 ? setReferalStatus(true) : setReferalStatus(false);
	}, []);

	const closeModal = () => {
		setOpenTopUp(false);
		setOpenWithdraw(false);
		setOpenApprove(false);
		setOpenReinvest(false);
		setValue(0);
	};

	const modalProps = {
		openTopUp,
		value,
		openWithdraw,
		referrer,
		address,
		t,
		allowed,
		balanceOf,
		openApprove,
		openReinvest,
		setOpenApprove,
		setValue,
		closeModal,
		setAllowed: (address) => {
			setAllowed(address);
		},
	};

	const modalParentProps = {
		setOpenTopUp,
		setOpenWithdraw,
		setOpenReinvest
	};

	return (
		<Wrap>
			<div className='cabinet'>
				<div className='cabinet__row row'>
					<div className='cabinet__col col-5'>
						<BalanceBlock {...modalParentProps} />
					</div>
					<div className='cabinet__col col-7 cabinet__col_games'>
						<GamesSlider />
					</div>
				</div>
				<div className='cabinet__row'>
					<div className='cabinet__col col-12'>
						<GameBlock {...modalParentProps} />
					</div>
				</div>
				<div className='cabinet__row row'>
					<div className='cabinet__col col-7 cabinet__col_referals'>
						<ReferalSlider />
					</div>
					<div className='cabinet__col col-5'>
						<ReferalCard link={referalLink} status={referalStatus} />
					</div>
				</div>
			</div>
			<WithdrawModal {...modalProps} />
			<ApproveModal {...modalProps} />
		</Wrap>
	);
};

MainWrap.propTypes = propTypes;

const mapStateToProps = (state, ownProps) => {
	const { getStoreItem } = ownProps.service;
	return {
		referalLink: `${window.location.hostname}?ref=${state.web3.address}`,
		referrer: state.web3.referrerAddress,
		address: state.web3.address,
		allowed: state.web3.allowed,
		balanceOf: state.web3.balanceOf,
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
	setReferrerAddress: (balance) =>
		Web3Actions.setReferrerAddress(
			dispatch({
				type: Constants.SET_REFERRER_ADDRESS,
				data: { referrerAddress: balance },
			})
		),
	setWithdrawable: (balance) =>
		Web3Actions.setWithdrawable(
			dispatch({
				type: Constants.SET_WITHDRAWABLE,
				data: { availableToWithdraw: balance },
			})
		),
	setAllowed: (balance) =>
		Web3Actions.setAllowed(
			dispatch({ type: Constants.SET_ALLOWED, data: { allowed: balance } })
		),
	setBalanceOf: (balance) =>
		Web3Actions.setBalanceOf(
			dispatch({ type: Constants.SET_BALANCE_OF, data: { balanceOf: balance } })
		),
	setGameInfo: (data) =>
		Web3Actions.setGameInfo(
			dispatch({ type: Constants.SET_GAME_INFO, data: { gameInfo: data } })
		),
	setMyGame: (data) =>
		Web3Actions.setMyGame(
			dispatch({ type: Constants.SET_MY_GAME, data: { myGame: data } })
		),
	setReferalInfo: (data) =>
		Web3Actions.setReferalInfo(
			dispatch({
				type: Constants.SET_REFERAL_INFO,
				data: { referalInfo: data },
			})
		),
});

export default compose(
	withRouter,
	withServiceConsumer,
	withTagDefaultProps(mapStateToProps, mapDispatchToProps)
)(MainWrap);
