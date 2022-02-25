import React from 'react';
import PropTypes from 'prop-types';
import { withServiceConsumer } from 'services/Context';
import { Icon } from 'templates/Icon';
import Input from './Input';

const propTypes = {
	placeholder: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	service: PropTypes.shape({
		pref: PropTypes.string.isRequired,
	}).isRequired,
};

const defaultProps = {
	placeholder: '',
	name: '',
};

const SearchWrap = ({
	placeholder,
	name,
	value,
	onChange,
	service: { pref },
}) => {
	return (
		<div className={`search-wrap search-wrap_${pref}`}>
			<Icon name='search' />
			<Input
				type='search'
				placeholder={placeholder}
				name={name}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

SearchWrap.propTypes = propTypes;
SearchWrap.defaultProps = defaultProps;

export default withServiceConsumer(SearchWrap);
