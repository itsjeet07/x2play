import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withTagDefaultProps } from 'hoc';
import { withServiceConsumer } from 'services/Context';
import { Button } from 'templates/Button';
import { Img } from 'templates/Img';
import { useState } from 'react';
import { ReactModal } from 'templates/ReactModal';
import { useSelector } from 'react-redux';
import { getTransactions } from 'services/Web3';

const propTypes = {
	total: PropTypes.string.isRequired,
	onClickReplenish: PropTypes.func.isRequired,
	onClickWithdraw: PropTypes.func.isRequired,
};

const BalanceCard = ({ total, onClickReplenish, onClickWithdraw, t }) => {
	const [txnHistory, setTxnHistory] = useState([]);
	const [open, setOpen] = useState(false);
	const closeModal = () => {
		setOpen(false);
	};

	const openModal = () => {
		setOpen(true);
	};

	const getAdd = useSelector((state) => state.web3.address);
	const GetHistory = async () => {
		await getTransactions(getAdd, setTxnHistory);
	};

	return (
		<div
			className='balance-card'
			style={{
				backgroundImage: 'url("/assets/images/content/balance-card-bg.svg")',
			}}
		>
			<div className='balance-card__title'>{t('Баланс')}</div>
			<div className='balance-card__row'>
				<div className='balance-card__col'>
					<span className='balance-card__total'>
						{parseFloat((total / 1_000_000).toFixed(3))}
					</span>
					<span className='balance-card__icon'>
						<Img
							src='/assets/images/icons/balance-icon.svg'
							alt='balance-icon'
						/>
					</span>
					<span className='balance-card__name'>CCO Token</span>
				</div>
				{/* <div className="balance-card__col">
                    <button type="button" className="game__head-btn transaction__btn" onClick={() => { openModal(); GetHistory(); }}>
                        {t('История транзакций')}
                    </button>
                </div> */}
			</div>
			<div className='balance-card__row'>
				<div className='balance-card__col'>
					<Button name='replenish' onClick={onClickReplenish} fullWidth>
						{t('Пополнить')}
					</Button>
				</div>
				<div className='balance-card__col'>
					<Button
						name='withdraw'
						isBordered
						onClick={onClickWithdraw}
						fullWidth
					>
						{t('Вывести')}
					</Button>
				</div>
			</div>
			<ReactModal
				isOpen={open}
				onRequestClose={closeModal}
				title='Top up'
				body={txnHistory}
			>
				<div
					style={{ width: 360 }}
					className='balance-card'
					style={{
						backgroundImage:
							'url("/assets/images/content/balance-card-bg.svg")',
					}}
				>
					<div className='balance-card__title'>{t('История транзакций')}</div>
				</div>
			</ReactModal>
		</div>
	);
};

BalanceCard.propTypes = propTypes;

export default compose(
	withServiceConsumer,
	withTagDefaultProps(null, null)
)(BalanceCard);
