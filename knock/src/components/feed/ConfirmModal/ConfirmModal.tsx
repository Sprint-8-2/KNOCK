import UButton from '../../../core/ui/buttons/UButton/UButton';
import CommonModal from '../../../core/ui/Modal/CommonModal';
import style from './ConfirmModal.module.scss';

interface ConfirmModalProps {
  message?: string;
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  message,
  isOpen,
  onConfirm,
  onCancel,
}) => {
  return (
    <CommonModal isOpen={isOpen} onClose={onCancel}>
      <div className={style['confirm-modal__container']}>
        <div className={style['confirm-modal__content']}>
          <div>
            <h3 className={style['confirm-modal__message']}>{message}</h3>
          </div>
          <div className={style['confirm-modal__buttons-wrapper']}>
            <UButton handleClick={onConfirm} type="box" isLightTheme={false}>
              확인
            </UButton>
            <UButton handleClick={onCancel} type="box" isLightTheme={false}>
              취소
            </UButton>
          </div>
        </div>
      </div>
    </CommonModal>
  );
};

export default ConfirmModal;
