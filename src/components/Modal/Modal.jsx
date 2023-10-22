import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop } from './Modal.styled.js';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'visible';
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      if (typeof onClose === 'function') {
        onClose();
      }
    }
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      if (typeof onClose === 'function') {
        onClose();
      }
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>{children}</Backdrop>,
    modalRoot
  );
};
