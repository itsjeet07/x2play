import React, { useEffect, createRef } from 'react';
import PropTypes from 'prop-types';
import { withServiceConsumer } from 'services/Context';
import { Select, DateInput } from './Inputs';

const propTypes = {
	type: PropTypes.string,
	placeholder: PropTypes.string,
	name: PropTypes.string.isRequired,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.bool,
		PropTypes.instanceOf(Date),
	]),
	onChange: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
	service: PropTypes.shape({
		pref: PropTypes.string.isRequired,
	}).isRequired,
	checked: PropTypes.bool,
	children: PropTypes.node,
	autoFocus: PropTypes.bool,
	isWarn: PropTypes.bool,
	options: PropTypes.arrayOf(PropTypes.object),
};

const defaultProps = {
	type: 'text',
	placeholder: '',
	value: '',
	disabled: false,
	checked: false,
	children: null,
	autoFocus: false,
	isWarn: false,
	options: [],
};

const Input = ({
	type,
	placeholder,
	name,
	value,
	onChange,
	disabled,
	checked,
	children,
	autoFocus,
	isWarn,
	options,
	service: { pref },
}) => {
	const ref = createRef(null);
	useEffect(() => {
		autoFocus && ref.current.focus();
	}, [ref]);

	switch (type) {
		case 'radio':
			return (
				<div className='radio'>
					<label className='radio__label' htmlFor={name}>
						<input
							id={name}
							type='radio'
							className='visuallyhidden'
							checked={value}
							onChange={onChange}
						/>
						<span className='radio__content'>
							<span className='radio__text'>{children}</span>
						</span>
					</label>
				</div>
			);

		case 'date':
			return (
				<DateInput
					value={value}
					placeholder={placeholder}
					onChange={onChange}
					className={`input form__input input_${pref}`}
				/>
			);

		case 'select':
			return (
				<Select
					value={value}
					placeholder={placeholder}
					options={options}
					onChange={onChange}
					name={name}
					id={name}
				/>
			);

		case 'checkbox':
			const _onChange = ({ target }) => onChange(target.checked);
			return (
				<div className={`checkbox checkbox_${pref}`}>
					<label
						className={`checkbox__label checkbox__label_${pref}`}
						htmlFor={name}
					>
						<input
							id={name}
							type='checkbox'
							className='visuallyhidden'
							checked={value}
							onChange={_onChange}
						/>
						<span className={`checkbox__content checkbox__content_${pref}`}>
							<span className={`checkbox__text checkbox__text_${pref}`}>
								{children}
							</span>
						</span>
					</label>
				</div>
			);

		case 'textarea':
			return (
				<textarea
					className={`input input_textarea form__input input_${pref}`}
					placeholder={placeholder}
					value={value}
					onChange={(e) => onChange(e.target.value)}
					name={name}
					id={name}
					disabled={disabled}
				/>
			);

		default:
			return (
				<input
					ref={ref}
					aria-invalid={false}
					type={type}
					className={`input form__input input_${pref} ${isWarn ? 'warn' : ''}`}
					placeholder={placeholder}
					value={value}
					onChange={(e) => onChange(e.target.value)}
					name={name}
					id={name}
					disabled={disabled}
					autoComplete={'off'}
				/>
			);
	}
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default withServiceConsumer(Input);
