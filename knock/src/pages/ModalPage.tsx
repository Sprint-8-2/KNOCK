import { useRef, useState } from 'react';
import './modalPage.scss';
import UButton from '../core/ui/buttons/UButton/UButton';
import Image from '../core/ui/CommonImage/Image';
import Textarea from '../core/ui/Textarea/Textarea';
import Icon from '../core/ui/CommonIcon/icon';
import messageicon from '../core/assets/icon/Messages.svg';
import closeicon from '../core/assets/icon/Close.svg';
import { createQuestionAnswer } from '../lib/api/Questions';

interface ModalPageProps {
  name: string;
  src: string;
  alt: string;
  questionId: string;
}

const ModalPage: React.FC<ModalPageProps> = ({
  name,
  src,
  alt,
  questionId,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [textareaValue, setTextareaValue] = useState('');
  const [isActivated, setIsActivated] = useState(true);
  const modalBackground = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleModalOpen = () => {
    setTextareaValue('');
    setIsActivated(true);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setTextareaValue(event.target.value);
    if (event.target.value) {
      setIsActivated(false);
    } else {
      setIsActivated(true);
    }
  };

  const handleClickOutsideModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === modalBackground.current) {
      setModalOpen(false);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      if (!textareaValue.trim()) {
        throw new Error('질문을 입력해주세요.');
      }
      const response = await createQuestionAnswer({
        questionId,
        content: textareaValue,
        isRejected: false,
        options: {},
      });
      console.log('질문제출 성공', response);
      handleModalClose();
    } catch (error) {
      console.error('질문제출 실패', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="btn-wrapper">
        <UButton
          handleClick={handleModalOpen}
          type="floating"
          isLightTheme={true}
        >
          질문 작성하기
        </UButton>
      </div>
      {modalOpen && (
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
                <img
                  onClick={handleModalClose}
                  src={closeicon}
                  alt="닫기 아이콘"
                />
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

            <div className="modal-content__continer">
              <div className="modal-content__textarea">
                <Textarea
                  placeholder="질문을 입력하세요"
                  id="textareaContent"
                  name={name}
                  value={textareaValue}
                  onChange={handleTextareaChange}
                />
              </div>
              <div className="modal-content__question-button">
                <UButton
                  handleClick={handleSubmit}
                  type="box"
                  isLightTheme={false}
                  isDisalbed={isActivated || isLoading}
                  isSmallButton={false}
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

export default ModalPage;
