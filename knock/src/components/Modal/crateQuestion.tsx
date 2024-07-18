import style from './CrateQuestion.module.scss';
import UButton from '../../core/ui/buttons/UButton/UButton';
import Image from '../../core/ui/CommonImage/Image';
import Textarea from '../../core/ui/Textarea/Textarea';
import Icon from '../../core/ui/CommonIcon/icon';
import messageicon from '../../core/assets/icon/Messages.svg';
import closeicon from '../../core/assets/icon/Close.svg';
import CommonModal from '../../core/ui/Modal/CommonModal';

interface CrateQuestionProps {
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

const CrateQuestion: React.FC<CrateQuestionProps> = ({
  name,
  src,
  alt,
  isOpen,
  onClose,
  onSubmit,
  onChange,
  isActivation,
  isLoading,
  textareaValue,
}) => {
  const handleSendClick = () => {
    onSubmit(textareaValue);
  };

  return (
    <CommonModal isOpen={isOpen} onClose={onClose}>
      <div className="modal-content">
        <div className={style['modal-content__header-question']}>
          <div className={style['modal-content__question']}>
            <Icon
              className={style['modal-content__message-icon']}
              src={messageicon}
              alt="메시지 아이콘"
            />
            <h1 className={style['modal-content__title']}>질문을 작성하세요</h1>
          </div>
          <button className={style['modal-content__close-icon']}>
            <img onClick={onClose} src={closeicon} alt="닫기 아이콘" />
          </button>
        </div>
        <label htmlFor={style['textareaContent']}>
          <div className={style['modal-content__profile-container']}>
            <span className={style['modal-content__to-label']}>To.</span>
            <Image
              imageClassName={style['modal-content__profile-image']}
              src={src}
              alt={alt}
            />
            {name}
          </div>
        </label>

        <div className={style['modal-content__container']}>
          <div className={style['modal-content__textarea']}>
            <Textarea
              placeholder="질문을 입력하세요"
              id="textareaContent"
              name={name}
              value={textareaValue}
              onChange={onChange}
            />
          </div>
          <div className={style['modal-content__question-button-container']}>
            <UButton
              className={style['modal-content__question-button']}
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
    </CommonModal>
  );
};

export default CrateQuestion;
