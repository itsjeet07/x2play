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
	password: PropTypes.string.isRequired,
	confirmPassword: PropTypes.string.isRequired,
	agree: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired,
	submitRegisterForm: PropTypes.func.isRequired,
};

const BlockForm = ({
	email,
	password,
	confirmPassword,
	agree,
	onChange,
	submitRegisterForm,
	t,
}) => {
	const checkForm = () => {
		return !(email &&
			password &&
			confirmPassword &&
			password === confirmPassword,
		agree);
	};

	const submit = async (e) => {
		e.preventDefault();
		const data = { email, password, confirmPassword, agree };
		if (password !== confirmPassword) {
			toast.error('Passwords do not match');
		} else {
			await submitRegisterForm((dispatch) => {
				firebase
					.auth()
					.createUserWithEmailAndPassword(email, password)
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
		}
	};

	return (
		<div className='auth__body'>
			<div className='auth__empty' />
			<form className='auth__form' onSubmit={submit}>
				<FormRow>
					<div className='auth__title'>{t('РЕГИСТРАЦИЯ')}</div>
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
					<FormBlock>
						<Input
							type='password'
							placeholder={t('Повторите пароль')}
							name='repeatPassword'
							value={confirmPassword}
							onChange={(value) => onChange('confirmPassword', value)}
						/>
					</FormBlock>
				</FormRow>
				<FormRow>
					<FormBlock>
						<Input
							type='checkbox'
							name='checkbox'
							value={agree}
							onChange={() => onChange('agree', !agree)}
						>
							Я согласен с <NavLink to='/'>правилами</NavLink> CCO и принимаю{' '}
							<NavLink to='/'>политику обработки данных</NavLink>
						</Input>
					</FormBlock>
				</FormRow>
				<FormRow>
					<FormBlock>
						<Button
							name='login'
							type='submit'
							onClick={() => {}}
							fullWidth
							disabled={checkForm()}
						>
							{t('Зарегистрироваться')}
						</Button>
					</FormBlock>
				</FormRow>
				<FormRow>
					<NavLink to='/forgot' className='auth__link'>
						{t('Забыли пароль?')}
					</NavLink>
				</FormRow>
				<FormRow>
					<NavLink to='/login' className='auth__link'>
						{t('Войти')}
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
		confirmPassword: getStoreItem(state, 'confirmPassword', ''),
		agree: getStoreItem(state, 'agree', false),
	};
};

const mapDispatchToProps = (dispatch, { service: { getActionStore } }) => ({
	onChange: getActionStore('onChange')(dispatch),
	submitRegisterForm: getActionStore('submitRegisterForm')(dispatch),
});

export default compose(
	withServiceConsumer,
	withTagDefaultProps(mapStateToProps, mapDispatchToProps)
)(BlockForm);
