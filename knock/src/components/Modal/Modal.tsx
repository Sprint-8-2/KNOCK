import React, { useRef } from 'react';
import './Modal.scss';
import UButton from '../../core/ui/buttons/UButton/UButton';
import Image from '../../core/ui/CommonImage/Image';
import Textarea from '../../core/ui/Textarea/Textarea';
import Icon from '../../core/ui/CommonIcon/icon';
import messageicon from '../../core/assets/icon/Messages.svg';
import closeicon from '../../core/assets/icon/Close.svg';

interface ModalProps {
  name: string;
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (value: string) => void;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isActivation: boolean;
  isLoading: boolean;
  textareaValue: string;
}

const Modal: React.FC<ModalProps> = ({
  name,
  src,
  alt,
  isOpen,
  onClose: isClose,
  onSubmit,
  onChange,
  isActivation,
  isLoading,
  textareaValue,
}) => {
  const modalBackground = useRef<HTMLDivElement>(null);

  const handleClickOutsideModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === modalBackground.current) {
      isClose();
    }
  };

  const handleSendClick = () => {
    onSubmit(textareaValue);
  };

  return (
    <>
      {isOpen && (
        <div
          className="modal-container"
          ref={modalBackground}
          onClick={handleClickOutsideModal}
        >
          <div className="modal-content">
            <div className="modal-content__header-question">
              <div className="modal-content__question">
                <Icon
                  className="modal-content__message-icon"
                  src={messageicon}
                  alt="메시지 아이콘"
                />
                <h1 className="modal-content__title">질문을 작성하세요</h1>
              </div>
              <button className="modal-content__close-icon">
                <img onClick={isClose} src={closeicon} alt="닫기 아이콘" />
              </button>
            </div>
            <label htmlFor="textareaContent">
              <div className="modal-content__profile-container">
                <span className="modal-content__to-label">To.</span>
                <Image
                  imageClassName="modal-content__profile-image"
                  src={src}
                  alt={alt}
                />
                {name}
              </div>
            </label>

            <div className="modal-content__container">
              <div className="modal-content__textarea">
                <Textarea
                  placeholder="질문을 입력하세요"
                  id="textareaContent"
                  name={name}
                  value={textareaValue}
                  onChange={onChange}
                />
              </div>
              <div className="modal-content__question-button">
                <UButton
                  handleClick={handleSendClick}
                  type="box"
                  isLightTheme={false}
                  isDisalbed={isActivation || isLoading}
                >
                  질문 보내기
                </UButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
