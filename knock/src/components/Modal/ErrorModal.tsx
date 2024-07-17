import './ErrorModal.scss';
import UButton from '../../core/ui/buttons/UButton/UButton';

interface ErrorModalProps {
  isOpen: boolean;
  isClose: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({
  isOpen,
  isClose: onClose,
}) => {
  return (
    <>
      {isOpen && (
        <div className="error-modal__container">
          <div className="error-modal__content">
            <div>
              <h2 className="error-modal__title">전송 실패</h2>
              <h3 className="error-modal__subtitle">재작성 부탁드립니다.</h3>
            </div>
            <UButton handleClick={onClose} type="box" isLightTheme={false}>
              닫기
            </UButton>
          </div>
        </div>
      )}
    </>
  );
};

export default ErrorModal;
