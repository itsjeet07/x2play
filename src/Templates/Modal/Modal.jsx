import React from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";

const propTypes = {
    overlayClassName: PropTypes.string,
    className: PropTypes.string,
    shouldCloseOnOverlayClick: PropTypes.bool,
    ariaHideApp: PropTypes.bool,
    isOpen: PropTypes.bool,
    onRequestClose: PropTypes.func.isRequired,
    children: PropTypes.node,
};

const defaultProps = {
    isOpen: true,
    shouldCloseOnOverlayClick: true,
    ariaHideApp: false,
    overlayClassName: "modal",
    className: "modal__content",
    children: null,
};

const Modal = ({
    shouldCloseOnOverlayClick,
    ariaHideApp,
    overlayClassName,
    className,
    isOpen,
    onRequestClose,
    children,
}) => (
    <ReactModal
        isOpen={isOpen}
        shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
        ariaHideApp={ariaHideApp}
        overlayClassName={overlayClassName}
        className={className}
        onRequestClose={onRequestClose}
    >
        {children}
    </ReactModal>
);

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
