import useElapsedTime from '../../lib/hooks/useElapsedTime';
import styles from './Question.module.scss';
import { useEffect, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

interface QuestionProps {
  content: string;
  createAt: string;
}

const Question = ({ content = '', createAt = '' }: QuestionProps) => {
  const { elapsedTime } = useElapsedTime();
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
    <div className={styles['question']}>
      <span className={styles['question__timestamp']}>
        질문 · {elapsedTime(createAt)}
      </span>
      <div className={styles['question-content-container']}>
        <p
          className={`${styles['question-content-container__content']} ${isExpanded ? '' : styles['question-content-container__content--contracted']}`}
        >
          {content}
        </p>
        <button
          className={`${styles['question-content-container__button']} ${isDisplayBtn ? styles['question-content-container__button--display'] : ''}`}
          onClick={handleExpendButton}
        >
          더보기
          <FiChevronDown
            className={styles['question-content-container__icon']}
          />
        </button>
      </div>
    </div>
  );
};

export default Question;
