import React from 'react'
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#222222',
        border: 'none',
        padding: 0
    }
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

const ReactModal = ({ children, title, isOpen, onRequestClose, body }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
            contentLabel={title}
        >
            {children}
            {
                body?.length == 0 ?
                    <div>
                        <div style={{ fontSize: '12px', textAlign: 'center' }}>Loading transactions...</div>
                        <br />
                    </div> :
                    body?.map(item =>
                        <div style={{ fontSize: '12px' }}>{`Transaction To ${item.to} From ${item.from}`} </div>
                    )
            }
        </Modal >
    )
}

export default ReactModal
