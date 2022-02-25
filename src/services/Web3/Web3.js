import Web3 from 'web3';
import Constants from 'app/Constants';
import { toast } from 'react-toastify';
import axios from 'axios';

let web3js = '';

let accounts = '';

let ethereum = '';

const connectWallet = async ({
	saveAddress,
	setCCOBalance,
	setReferrerAddress,
	setWithdrawble,
	setAllowed,
	setBalanceOf,
	setGameInfo,
	setMyGame,
	setReferalInfo,
}) => {
	ethereum = window.ethereum;
	if (!ethereum || !ethereum.isMetaMask) {
		alert(`METAMASK NOT INSTALLED!!\nYOU WON'T BE ABLE TO MAKE TRANSACTIONS`);
		connectWallet({
			saveAddress,
			setCCOBalance,
			setReferrerAddress,
			setWithdrawble,
			setAllowed,
			setBalanceOf,
			setGameInfo,
			setMyGame,
			setReferalInfo,
		});
	} else {
		await ethereum.enable();
		web3js = new Web3(window.web3.currentProvider);
		accounts = await web3js.eth.getAccounts();
		saveAddress(accounts[0]);

		getCCOBalance(accounts[0], setCCOBalance);
		getReferrerAddress(accounts[0], setReferrerAddress);
		getWithdrawable(accounts[0], setWithdrawble);
		getAllowed(accounts[0], setAllowed);
		getBalanceOf(accounts[0], setBalanceOf);
		getGameInfo(setGameInfo);
		getUserGames(accounts[0], setMyGame);
		getUserReferrals(accounts[0], setReferalInfo);
	}
};

const getCCOBalance = async (address, setCCOBalance) => {
	let contract = new web3js.eth.Contract(
		Constants.TEST_TOKEN_ABI,
		Constants.TEST_TOKEN
	);

	try {
		let balance = await contract.methods.balanceOf(address).call();

		setCCOBalance(balance);
	} catch (err) {}
};

const getReferrerAddress = async (address, setReferrerAddress) => {
	let contract = new web3js.eth.Contract(
		Constants.EXCHANGE_ABI,
		Constants.EXCHANGE
	);

	try {
		let info = await contract.methods.getReferrerInfo(address).call();

		setReferrerAddress(info.referrer);
	} catch (err) {}
};

const getWithdrawable = async (address, setWithdrawble) => {
	let contract = new web3js.eth.Contract(
		Constants.TEST_GAME_ABI,
		Constants.TEST_GAME
	);

	try {
		let info = await contract.methods.getWithdrawable(address).call();

		setWithdrawble(info / 1_000_000);
	} catch (err) {}
};

const getAllowed = async (address, setAllowed) => {
	let contract = new web3js.eth.Contract(
		Constants.TETHER_TOKEN_ABI,
		Constants.TETHER_TOKEN
	);

	try {
		let info = await contract.methods
			.allowed(address, Constants.EXCHANGE)
			.call();

		setAllowed(info);
	} catch (err) {}
};

const getBalanceOf = async (address, setBalanceOf) => {
	let contract = new web3js.eth.Contract(
		Constants.TEST_TOKEN_ABI,
		Constants.TEST_TOKEN
	);

	try {
		let info = await contract.methods.balanceOf(address).call();

		setBalanceOf(info);
	} catch (err) {}
};

const getUsdtBalance = async (address, setMaximum) => {
	let contract = new web3js.eth.Contract(
		Constants.TETHER_TOKEN_ABI,
		Constants.TETHER_TOKEN
	);

	try {
		let info = await contract.methods.balances(address).call();

		setMaximum(info);
	} catch (err) {}
};

const getCcoBalance = async (address, setMaximum) => {
	let contract = new web3js.eth.Contract(
		Constants.TEST_TOKEN_ABI,
		Constants.TEST_TOKEN
	);

	try {
		let info = await contract.methods.balanceOf(address).call();

		setMaximum(info);
	} catch (err) {}
};

const topUpCCO = async (
	address,
	amount,
	referrer,
	closeModal,
	updatedBal,
	refId
) => {
	let contract = new web3js.eth.Contract(
		Constants.EXCHANGE_ABI,
		Constants.EXCHANGE
	);
	let tetherContract = new web3js.eth.Contract(
		Constants.TETHER_TOKEN_ABI,
		Constants.TETHER_TOKEN
	);

	try {
		const allowedAmnt = await tetherContract.methods
			.allowed(address, Constants.EXCHANGE)
			.call();
		if (amount * 1_000_000 > parseFloat(allowedAmnt)) {
			await tetherContract.methods
				.approve(Constants.EXCHANGE, amount * 1_000_000 - allowedAmnt)
				.send({ from: address }, (a, s) => {})
				.on('error', (err) => {
					closeModal();
					toast.error('Approval Failed');
				});
		}
		let ref = '0x0000000000000000000000000000000000000000';
		if (refId.length == 42 && refId.includes('0x')) {
			ref = refId;
		}
		await contract.methods
			.exchangeUSDTtoCCO(address, amount * 1_000_000, ref)
			.send({ from: address })
			.on('transactionHash', (hash) => {
				closeModal();
			})
			.on('receipt', async () => {
				getCCOBalance(address, updatedBal);
				toast.success('Транзакция успешна');
			})
			.on('error', (err) => {
				closeModal();
				toast.error(err.message);
			});
	} catch (err) {}
};

const withdrawCCO = async (
	address,
	amount,
	referrer,
	closeModal,
	updatedBal
) => {
	console.log('==================')
	let contract = new web3js.eth.Contract(
		Constants.EXCHANGE_ABI,
		Constants.EXCHANGE
	);
	let testContract = new web3js.eth.Contract(
		Constants.TEST_TOKEN_ABI,
		Constants.TEST_TOKEN
	);

	try {
		await testContract.methods
			.approve(Constants.EXCHANGE, amount * 1_000_000)
			.send({ from: address }, () => {})
			.on('receipt', async () => {
				await contract.methods
					.exchangeCCOtoUSDT(address, amount * 1_000_000, referrer)
					.send({ from: address })
					.on('transactionHash', (hash) => {
						closeModal();
					})
					.on('receipt', () => {
						getCCOBalance(address, updatedBal);
						toast.success('Транзакция успешна');
					})
					.on('error', (err) => {
						closeModal();
						toast.error(err.message);
					});
			})
			.on('error', (err) => {
				closeModal();
				toast.error(err.message);
			});
	} catch (err) {}
};

const approveUSDT = async (address, amount, closeModal, setAllowed) => {
	let contract = new web3js.eth.Contract(
		Constants.TETHER_TOKEN_ABI,
		Constants.TETHER_TOKEN
	);

	try {
		let exchange = await contract.methods
			.approve(Constants.EXCHANGE, amount * 1_000_000)
			.send({ from: address })
			.on('transactionHash', (hash) => {
				closeModal();
			})
			.on('receipt', () => {
				getAllowed(address, setAllowed);
				toast.success('Транзакция успешна');
			})
			.on('error', (err) => {
				closeModal();
				toast.error(err.message);
			});
	} catch (err) {}
};

const placeBet = async ({
	sum,
	walAddress,
	setCCOBalance,
	setGameInfo,
	setMyGame,
	setWithdrawble,
}) => {
	let contract = new web3js.eth.Contract(
		Constants.TEST_TOKEN_ABI,
		Constants.TEST_TOKEN
	);

	try {
		await contract.methods
			.transfer(Constants.TEST_GAME, parseInt(sum) * 1_000_000)
			.send({ from: walAddress })
			.on('transactionHash', (hash) => {
				console.log('hash ==>>', hash);
			})
			.on('receipt', () => {
				getCCOBalance(walAddress, setCCOBalance);
				getUserGames(walAddress, setMyGame);
				getWithdrawable(walAddress, setWithdrawble);
				getGameInfo(setGameInfo);
				toast.success('Ставка успешна');
			})
			.on('error', (err) => {
				toast.error(err.message);
			});
	} catch (err) {
		console.log('error', err);
	}
};

const getGameInfo = async (setGameInfo) => {
	let contract = new web3js.eth.Contract(
		Constants.TEST_GAME_ABI,
		Constants.TEST_GAME
	);

	const gameInfo = await contract.methods.getCurrentGameInfo().call();

	let { _cycle, filled, volume, round, players, bets, available } = gameInfo;
	const items = [];

	let width = 30;
	for (let obj = 0; obj <= parseInt(round); obj++) {
		let valueStr = '';
		if (obj < parseInt(round)) {
			valueStr = await getGameCurrentInfo(contract, _cycle, obj, round);
		}
		width += 5;
		items.push({
			type: obj == parseInt(round) ? 2 : 1,
			total: `${width}%`,
			filled:
				obj < parseInt(round)
					? width + '%'
					: (filled / 1000000 / (volume / 1000000)) * 100 * (width / 100) + '%',
			value:
				obj < parseInt(round)
					? valueStr
					: parseInt(filled / 1000000) + '/' + parseInt(volume / 1000000),
		});
	}
	setGameInfo({ filled, volume, round, players, bets, available, items });
};

const getGameCurrentInfo = async (contract, cycle, from, to) => {
	const gameInfo = await contract.methods.getGamesInfo(cycle, 0, to).call();
	const output =
		gameInfo.filled[from] / 1_000_000 + '/' + gameInfo.volume[from] / 1_000_000;
	return output;
};

const getUserGames = async (address, setMyGame) => {
	const contract = new web3js.eth.Contract(
		Constants.TEST_GAME_ABI,
		Constants.TEST_GAME
	);
	try {
		const gameInfo = await contract.methods.getCurrentGameInfo().call();
		const { round } = gameInfo;
		const userGames = await contract.methods
			.getUserGames(address, 0, round + 10)
			.call();

		setMyGame(userGames);
	} catch (err) {}
};

const getUserReferrals = async (address, setReferalInfo) => {
	const gameContract = new web3js.eth.Contract(
		Constants.TEST_GAME_ABI,
		Constants.TEST_GAME
	);
	const contract = new web3js.eth.Contract(
		Constants.EXCHANGE_ABI,
		Constants.EXCHANGE
	);
	try {
		const gameInfo = await gameContract.methods.getCurrentGameInfo().call();
		const { round } = gameInfo;

		const referrals = await contract.methods
			.getReferralInfo(address, 0, round + 10)
			.call();
		setReferalInfo(referrals);
	} catch (err) {}
};

const getTransactions = async (add, setTxnHistory) => {
	const txnHistory = [];

	axios({
		method: 'GET',
		url: Constants.TXN_HISTORY_URL.replace('{ADDRESS}', add),
		dataType: 'json',
	})
		.then((res) => {
			for (const ele of res.data.result) {
				if (res.data.result.indexOf(ele) == 50) break;
				txnHistory.push({ to: ele.to, from: ele.from });
			}
			setTxnHistory(txnHistory);
		})
		.catch((error) => {});
};

export {
	connectWallet,
	topUpCCO,
	withdrawCCO,
	approveUSDT,
	getUsdtBalance,
	getCcoBalance,
	placeBet,
	getGameInfo,
	getTransactions,
};
