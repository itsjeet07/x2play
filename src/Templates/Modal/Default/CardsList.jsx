import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'templates/Form';
import { Img } from 'templates/Img';

const propTypes = {
	label: PropTypes.string.isRequired,
	cards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const getIcon = (name) => {
	switch (name) {
		case 'amex':
			return 'amex';
		case 'cartes_bancarires':
			return 'cartes';
		case 'discover':
			return 'discover';
		case 'jcb':
			return 'jcb';
		case 'mastercard':
			return 'master';
		case 'visa':
			return 'visa';
		case 'unionpay':
			return 'union';
		default:
			return 'default';
	}
};

const CardsList = ({ label, cards }) => {
	return (
		<div className='modal-cards'>
			<Label name=''>{label}</Label>
			<ul className='modal-cards__list'>
				{cards.map((item) => (
					<li key={item.id} className='modal-cards__item'>
						<button
							type='button'
							className={`modal-cards__btn ${item.isDefault ? 'active' : ''}`}
						>
							<div className='modal-cards__icon'>
								<Img
									src={`/assets/images/cards/${getIcon(item.data.brand)}.png`}
									alt='card-icon'
								/>
							</div>
							<div className='modal-cards__desc'>
								<span className='modal-cards__num'>{`**** **** **** ${item.data.last4}`}</span>
								<span className='modal-cards__label'>{item.data.brand}</span>
							</div>
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

CardsList.propTypes = propTypes;

export default CardsList;
