import React, { useRef, ReactNode, useEffect, useState } from 'react';
import style from './CommonModal.module.scss';

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
  const [isvisible, setIsVisible] = useState(isOpen);
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 200);
    }
  }, [isOpen]);

  const modalBackground = useRef<HTMLDivElement>(null);

  const handleClickOutsideModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === modalBackground.current) {
      onClose();
    }
  };

  return (
    <div className={style[`animation${isOpen ? '__is-open' : ''}`]}>
      {isvisible && (
        <div
          className={style['modal-container']}
          ref={modalBackground}
          onClick={handleClickOutsideModal}
        >
          <div className={style['modal-content']}>{children}</div>
        </div>
      )}
    </div>
  );
};

export default CommonModal;
