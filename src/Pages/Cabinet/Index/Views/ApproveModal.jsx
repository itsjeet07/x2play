import React from 'react';
import { useEffect } from 'react';
import { approveUSDT, getAllowed } from 'services/Web3';
import { Button } from 'templates/Button';
import { ReactModal } from 'templates/ReactModal';

const ApproveModal = ({
	value,
	setValue,
	openApprove,
	closeModal,
	t,
	address,
	allowed,
	setAllowed,
}) => {
	useEffect(() => {
		setValue(allowed);
	}, []);

	return (
		<ReactModal isOpen={openApprove} onRequestClose={closeModal} title='Top up'>
			<div
				className='balance-card transaction-card'
				style={{
					backgroundImage: 'url("/assets/images/content/balance-card-bg.svg")',
					width: 420,
				}}
			>
				<div className='balance-card__row'>
					<div className='balance-card__title'>{t('Утвердить')}</div>
				</div>
				<div className='balance-card__row'>
					<div className='balance-card__col'>
						<input
							className={
								!!!allowed || allowed !== '0'
									? 'disabled__input rate__input'
									: 'rate__input'
							}
							type='number'
							placeholder={t('Вывести')}
							value={
								!!!allowed || allowed !== '0' ? allowed / 1_000_000 : value
							}
							// disabled={!(!!allowed) || allowed !== '0'}
							onChange={(e) => setValue(e.target.value)}
						/>
						{!!!allowed || allowed !== '0' ? (
							<button
								type='button'
								className='game__head-btn transaction__btn input__btn'
								onClick={() => {
									approveUSDT(address, 0, closeModal, setAllowed);
								}}
							>
								{t('Сброс настроек')}
							</button>
						) : null}
					</div>
				</div>
				{/* <div className="balance-card__row" style={{ padding: '0 10px', justifyContent: 'space-between', marginRight: 0 }}>
                    <div >
                    </div>
                    {
                        openTopUp
                            ? <div >
                                <button type="button" className="game__head-btn transaction__btn" onClick={() => setValue((parseInt(maximum) / 1_000_000))}>
                                    {t('Утвердить')}
                                </button>
                            </div>
                            : null
                    }
                </div> */}
				<div className='balance-card__row'>
					<div className='balance-card__col'>
						<Button
							// disabled={!(!!allowed) || allowed !== '0'}
							name='replenish'
							onClick={() => {
								approveUSDT(address, value, closeModal, setAllowed);
							}}
							fullWidth
						>
							{t('Вывести')}
						</Button>
					</div>
				</div>
			</div>
		</ReactModal>
	);
};

export default ApproveModal;
