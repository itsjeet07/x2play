import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

const propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    className: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
};

const defaultProps = {};

const DateInput = ({ value, className, onChange, placeholder }) => {
    const val = Date.parse(value);
    const _onChange = (value) => onChange(moment(value).format('MM/DD/YYYY'));

    return (
        <DatePicker
            selected={val ? val : ''}
            onChange={_onChange}
            className={className}
            placeholderText={placeholder}
        />
    );
};

DateInput.propTypes = propTypes;
DateInput.defaultProps = defaultProps;

export default DateInput;
