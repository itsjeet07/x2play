import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withTagDefaultProps } from 'hoc';
import { NavLink } from 'react-router-dom';
import { withServiceConsumer } from 'services/Context';
import { FormRow, FormBlock, Input } from 'templates/Form';
import { Button } from 'templates/Button';
import { AuthReferal } from 'templates/Auth';
import firebase from 'config';
import Constants from '../Constants';
import { toast } from 'react-toastify';

const propTypes = {
	email: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	submitForgotForm: PropTypes.func.isRequired,
};

const BlockForm = ({ email, onChange, submitForgotForm, t }) => {
	const checkForm = () => {
		return !email;
	};

	const submit = async (e) => {
		e.preventDefault();
		// const data = { email };
		// await submitForgotForm(data);

		await submitForgotForm((dispatch) => {
			firebase
				.auth()
				.sendPasswordResetEmail(email)
				.then((res) => {
					dispatch({
						type: Constants.FETCH_ITEMS_SUCCESSED,
						data: { status: 'success' },
					});
				})
				.catch((err) => {
					toast.error(err.message);
					dispatch({
						type: Constants.FETCH_ITEMS_FAILED,
						data: {},
					});
				});
		});
	};

	return (
		<div className='auth__body'>
			<div className='auth__empty' />
			<form className='auth__form' onSubmit={submit}>
				<FormRow>
					<div className='auth__title'>{t('Восстановление пароля')}</div>
				</FormRow>
				<FormRow>
					<FormBlock>
						<Input
							type='email'
							placeholder={t('Введите ваш Email')}
							name='email'
							value={email}
							onChange={(value) => onChange('email', value)}
						/>
					</FormBlock>
				</FormRow>
				<FormRow>
					<FormBlock>
						<Button
							name='login'
							type='submit'
							disabled={checkForm()}
							onClick={() => {}}
							fullWidth
						>
							{t('Восстановить')}
						</Button>
					</FormBlock>
				</FormRow>
				<FormRow>
					<NavLink to='/login' className='auth__link'>
						{t('Назад')}
					</NavLink>
				</FormRow>
			</form>
			<AuthReferal code='HQ032' />
		</div>
	);
};

BlockForm.propTypes = propTypes;

const mapStateToProps = (state, ownProps) => {
	const { getStoreItem } = ownProps.service;

	return {
		email: getStoreItem(state, 'email', ''),
	};
};

const mapDispatchToProps = (dispatch, { service: { getActionStore } }) => ({
	onChange: getActionStore('onChange')(dispatch),
	submitForgotForm: getActionStore('submitForgotForm')(dispatch),
});

export default compose(
	withServiceConsumer,
	withTagDefaultProps(mapStateToProps, mapDispatchToProps)
)(BlockForm);
