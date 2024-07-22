import { useEffect, useRef, useState } from 'react';
import styles from './AnswerContent.module.scss';
import Icon from '../../../core/ui/CommonIcon/icon';
import ArrowDownIcon from '../../../core/assets/icon/Arrow-down.svg';
import ArrowUpIcon from '../../../core/assets/icon/Arrow-up.svg';

interface AnswerContentProps {
  content: string;
}

const AnswerContent = ({ content = '' }: AnswerContentProps) => {
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
    <div className={styles['answer-content-container']}>
      <p
        className={`${styles['answer-content-container__content']} ${!isExpanded ? styles['answer-content-container__content--contracted'] : ''}`}
        ref={contentRef}
      >
        {content}
      </p>
      <button
        className={`${styles['answer-content-container__button']} ${isDisplayBtn ? styles['answer-content-container__button--display'] : ''}`}
        onClick={handleExpendButton}
      >
        <Icon
          src={isExpanded ? ArrowUpIcon : ArrowDownIcon}
          alt="펼치기"
          className=""
        />
      </button>
    </div>
  );
};

export default AnswerContent;
