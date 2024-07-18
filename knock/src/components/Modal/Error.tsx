import style from './Error.module.scss';
import UButton from '../../core/ui/buttons/UButton/UButton';
import CommonModal from '../../core/ui/Modal/CommonModal';

interface ErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Error: React.FC<ErrorModalProps> = ({ isOpen, onClose }) => {
  return (
    <CommonModal isOpen={isOpen} onClose={onClose}>
      <div className={style['error-modal__container']}>
        <div className={style['error-modal__content']}>
          <div>
            <h2 className={style['error-modal__title']}>전송 실패</h2>
            <h3 className={style['error-modal__subtitle']}>
              재작성 부탁드립니다.
            </h3>
          </div>
          <UButton handleClick={onClose} type="box" isLightTheme={false}>
            닫기
          </UButton>
        </div>
      </div>
    </CommonModal>
  );
};

export default Error;
