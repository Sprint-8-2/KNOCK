import React, { useRef, ReactNode } from 'react';
import style from './Modal.module.scss';

interface CommonModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const CommonModal: React.FC<CommonModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  const modalBackground = useRef<HTMLDivElement>(null);

  const handleClickOutsideModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === modalBackground.current) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className={style['modal-container']}
          ref={modalBackground}
          onClick={handleClickOutsideModal}
        >
          <div className={style['modal-content']}>{children}</div>
        </div>
      )}
    </>
  );
};

export default CommonModal;
