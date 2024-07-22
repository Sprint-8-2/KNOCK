import Icon from '../../core/ui/CommonIcon/icon';
import useElapsedTime from '../../lib/hooks/useElapsedTime';
import styles from './Question.module.scss';
import ArrowDownIcon from '../../core/assets/icon/Arrow-down.svg';
import ArrowUpIcon from '../../core/assets/icon/Arrow-up.svg';
import { useEffect, useRef, useState } from 'react';

interface QuestionProps {
  content: string;
  createAt: string;
}

const Question = ({ content = '', createAt = '' }: QuestionProps) => {
  const { elapsedTime } = useElapsedTime();
  const contentRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDisplayBtn, setIsDisplayBtn] = useState(false);
  const handleExpendButton = () => {
    isExpanded ? setIsExpanded(false) : setIsExpanded(true);
  };
  useEffect(() => {
    if (!contentRef.current) return;
    const contentElement = contentRef.current;
    console.dir(contentElement);
    const lineHeight = parseFloat(
      window.getComputedStyle(contentElement).lineHeight,
    );
    const height = contentElement.clientHeight;
    if (Math.round(height / lineHeight) > 5) {
      setIsDisplayBtn(true);
    } else {
      setIsDisplayBtn(false);
    }
  }, []);

  return (
    <div className={styles['question']}>
      <span className={styles['question__timestamp']}>
        질문 · {elapsedTime(createAt)}
      </span>
      <div className={styles['question-content-container']}>
        <p
          className={`${styles['question-content-container__content']} ${!isExpanded ? styles['question-content-container__content--contracted'] : ''}`}
          ref={contentRef}
        >
          {content}
        </p>
        <button
          className={`${styles['question-content-container__button']} ${isDisplayBtn ? styles['question-content-container__button--display'] : ''}`}
          onClick={handleExpendButton}
        >
          <Icon
            src={isExpanded ? ArrowUpIcon : ArrowDownIcon}
            alt="펼치기"
            className=""
          />
        </button>
      </div>
    </div>
  );
};

export default Question;
