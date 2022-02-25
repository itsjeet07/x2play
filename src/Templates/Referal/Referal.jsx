import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withTagDefaultProps } from 'hoc';
import { withServiceConsumer } from 'services/Context';
import { formatDateToLocal } from 'services';
import { Img } from 'templates/Img';

const propTypes = {
	name: PropTypes.string.isRequired,
	bonus: PropTypes.number.isRequired,
};

const Referal = ({ name, bonus, date, t }) => {
	return (
		<div className='referal'>
			<div className='referal__body'>
				<div className='referal__icon'>{/* <span>{name}</span> */}</div>
				<div className='referal__label'>{t('Ваш бонус')}</div>
				<div className='referal__count'>
					<span>{bonus}</span>
					<Img src='/assets/images/icons/cco-logo.svg' alt='cco-logo' />
				</div>
			</div>
			{/* <div className="referal__foot">
                <div className="referal__label">{t('Приглашен')}</div>
                <div className="referal__date">{formatDateToLocal(date)}</div>
            </div> */}
		</div>
	);
};

Referal.propTypes = propTypes;

export default compose(
	withServiceConsumer,
	withTagDefaultProps(null, null)
)(Referal);
