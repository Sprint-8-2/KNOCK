import React, { useEffect, useState } from 'react';
import Textarea from '../../core/ui/Textarea/Textarea';
import styles from './AnswerForm.module.scss';

interface AnswerProps {
  content: string;
  handleSubmit?: (questionId: number | undefined, content: string) => void;
  questionId: number | undefined;
}

const AnswerForm = ({
  questionId,
  content,
  handleSubmit = () => {},
}: AnswerProps) => {
  const [answerContent, setAnswerContent] = useState(content);
  const [isDisable, setIsDisable] = useState(true);
  const handleClick = () => {
    handleSubmit(questionId, answerContent);
  };
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = (e.target as HTMLTextAreaElement).value;
    setAnswerContent(value);
  };
  const isButtonValid = () => {
    if (answerContent) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  };
  useEffect(() => {
    isButtonValid();
  }, []);
  return (
    <div className={styles['answer__form']}>
      <Textarea
        placeholder="답변을 입력해주세요"
        name="answerTextarea"
        id=""
        value={answerContent}
        onChange={handleChange}
      />
      <button
        className={`${styles['answer__form-btn--submit']} ${isDisable ? styles['answer__form-btn--submit--disabled'] : ''}`}
        onClick={handleClick}
      >
        답변 완료
      </button>
    </div>
  );
};

export default AnswerForm;
