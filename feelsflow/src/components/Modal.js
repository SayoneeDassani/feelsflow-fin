import React from 'react';
import './Modal.css';

function Modal({ children, isOpen, onClose }) {
    if (!isOpen) return null; // If the modal is not open, return null

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                <div className="modal-content">{children}</div>
            </div>
        </div>
    );
}

export default Modal;
