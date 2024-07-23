import { useEffect, useState } from 'react';
import styles from './AnswerContent.module.scss';
import { FiChevronDown } from 'react-icons/fi';

interface AnswerContentProps {
  content: string;
}

const AnswerContent = ({ content = '' }: AnswerContentProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDisplayBtn, setIsDisplayBtn] = useState(true);
  const handleExpendButton = () => {
    setIsExpanded(true);
    setIsDisplayBtn(false);
  };

  useEffect(() => {
    if (content.length > 180) {
      setIsDisplayBtn(true);
      setIsExpanded(false);
    } else {
      setIsDisplayBtn(false);
      setIsExpanded(true);
    }
  }, []);
  return (
    <div className={styles['answer-content-container']}>
      <p
        className={`${styles['answer-content-container__content']} ${isExpanded ? '' : styles['answer-content-container__content--contracted']}`}
      >
        {content}
      </p>
      <button
        className={`${styles['answer-content-container__button']} ${isDisplayBtn ? styles['answer-content-container__button--display'] : ''}`}
        onClick={handleExpendButton}
      >
        더보기
        <FiChevronDown className={styles['answer-content-container__icon']} />
      </button>
    </div>
  );
};

export default AnswerContent;
