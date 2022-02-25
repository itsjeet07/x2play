import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withTagDefaultProps } from 'hoc';
import { NavLink, useHistory } from 'react-router-dom';
import { withServiceConsumer } from 'services/Context';
import { auth } from 'services';
import { FormRow, FormBlock, Input } from 'templates/Form';
import { Button } from 'templates/Button';
import { AuthReferal } from 'templates/Auth';
import firebase from 'config';

import Constants from '../Constants';
import { toast } from 'react-toastify';

const propTypes = {
	email: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	submitSignInForm: PropTypes.func.isRequired,
};

const BlockForm = ({ email, password, onChange, submitSignInForm, t }) => {
	const history = useHistory();
	const checkForm = () => {
		return !(email && password);
	};

	const submit = async (e) => {
		e.preventDefault();
		const data = { email, password };

		submitSignInForm((dispatch) => {
			firebase
				.auth()
				.signInWithEmailAndPassword(email, password)
				.then((abc) => {
					auth.signIn({ token: abc.user.uid });

					history.push('/');

					dispatch({
						type: Constants.FETCH_ITEMS_SUCCESSED,
						data: abc,
					});
				})
				.catch((err) => {
					toast.error('Неверный логин или пароль.');
					dispatch({
						type: Constants.FETCH_ITEMS_FAILED,
						data: {},
					});
				});
		}).then(() => {
			// auth.signIn({ token: 't-o-k-e-n' });
			// history.push('/');
		});
	};

	return (
		<div className='auth__body'>
			<div className='auth__empty' />
			<form className='auth__form' onSubmit={submit}>
				<FormRow>
					<div className='auth__title'>{t('ВХОД')}</div>
				</FormRow>
				<FormRow>
					<FormBlock>
						<Input
							type='email'
							placeholder={t('Ваш Email')}
							name='email'
							value={email}
							onChange={(value) => onChange('email', value)}
						/>
					</FormBlock>
					<FormBlock>
						<Input
							type='password'
							placeholder={t('Пароль')}
							name='password'
							value={password}
							onChange={(value) => onChange('password', value)}
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
							{t('Войти')}
						</Button>
					</FormBlock>
				</FormRow>
				<FormRow>
					<NavLink to='/forgot' className='auth__link'>
						{t('Забыли пароль?')}
					</NavLink>
				</FormRow>
				<FormRow>
					<NavLink to='/registration' className='auth__link'>
						{t('Зарегистрироваться')}
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
		password: getStoreItem(state, 'password', ''),
	};
};

const mapDispatchToProps = (dispatch, { service: { getActionStore } }) => ({
	onChange: getActionStore('onChange')(dispatch),
	submitSignInForm: getActionStore('submitSignInForm')(dispatch),
});

export default compose(
	withServiceConsumer,
	withTagDefaultProps(mapStateToProps, mapDispatchToProps)
)(BlockForm);
