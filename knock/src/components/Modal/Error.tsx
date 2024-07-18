import React from 'react';
import style from './Error.module.scss';
import UButton from '../../core/ui/buttons/UButton/UButton';
import CommonModal from '../../core/ui/Modal/Modal';

interface ErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
  errorMessage: string;
}

const ErrorModal: React.FC<ErrorModalProps> = ({
  isOpen,
  onClose,
  errorMessage,
}) => {
  return (
    <CommonModal isOpen={isOpen} onClose={onClose}>
      <div className={style['error-modal__content']}>
        <h2 className={style['error-modal__title']}>전송 실패</h2>
        <p className={style['error-modal__message']}>{errorMessage}</p>
        <UButton handleClick={onClose} type="box" isLightTheme={false}>
          닫기
        </UButton>
      </div>
    </CommonModal>
  );
};

export default ErrorModal;
