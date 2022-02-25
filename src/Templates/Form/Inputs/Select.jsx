import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const propTypes = {
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
};

const defaultProps = {
    disabled: false,
    placeholder: '',
    value: '',
};

const SearchSelect = ({ disabled, value, placeholder, options, onChange, name }) => (
    <Select
        isSearchable={false}
        isDisabled={disabled}
        className="custom-select"
        classNamePrefix="custom-select"
        menuPosition="fixed"
        // closeMenuOnScroll={() => true}
        value={options.reduce((acc, option) => {
            if (option.value) {
                if (option.value === value) {
                    return [...acc, option];
                }
                return acc;
            }
            if (option.options && Array.isArray(option.options)) {
                const result = option.options.find((item) => item.value === value);
                if (typeof result !== 'undefined') {
                    return [...acc, result];
                }
            }
            return acc;
        }, [])}
        onChange={(value) => onChange(value.value)}
        options={options}
        placeholder={placeholder}
        name={name}
        id={name}
    />
);

SearchSelect.propTypes = propTypes;
SearchSelect.defaultProps = defaultProps;

export default SearchSelect;
