import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

const ModalDir = ({ title, onClick }) => {
    return (
        <div className="modal-dir" onClick={onClick}>
            <div className="modal-dir__icon">
                <i className="icon-folder" />
            </div>
            <div className="modal-dir__title">{title}</div>
        </div>
    );
};

ModalDir.propTypes = propTypes;

export default ModalDir;
