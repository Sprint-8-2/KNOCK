import React, { useEffect, useState } from 'react';
import Textarea from '../../core/ui/Textarea/Textarea';
import styles from './AnswerModification.module.scss';

interface AnswerModificationProps {
  isDisable?: boolean;
  content: string;
  handleSubmit?: (answerId: number | string, content: string) => void;
  answerId: number | string;
}

const AnswerModification = ({
  content,
  handleSubmit = () => {},
  answerId,
}: AnswerModificationProps) => {
  const [answerModificationContent, setAnswerModificationContent] =
    useState(content);
  const [isDisable, setIsDisable] = useState(true);
  const handleClick = () => {
    handleSubmit(answerId, answerModificationContent);
  };
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = (e.target as HTMLTextAreaElement).value;
    setAnswerModificationContent(value);
  };
  const isButtonValid = () => {
    if (answerModificationContent) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  };
  useEffect(() => {
    isButtonValid();
  }, []);
  return (
    <div className={styles['answer__modification']}>
      <Textarea
        placeholder="답변을 입력해주세요"
        name="answerModificationTextarea"
        id=""
        value={answerModificationContent}
        onChange={handleChange}
      />
      <button
        className={`${styles['answer__modification-btn--submit']} ${isDisable ? styles['answer__modification-btn--submit--disabled'] : ''}`}
        disabled={isDisable}
        onClick={handleClick}
      >
        수정 완료
      </button>
    </div>
  );
};

export default AnswerModification;
