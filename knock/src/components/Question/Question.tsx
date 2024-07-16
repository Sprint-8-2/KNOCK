import useElapsedTime from '../../lib/hooks/useElapsedTime';
import styles from './Question.module.scss';

interface QuestionProps {
  content: string;
  createAt: string;
}

const Question = ({ content = '', createAt = '' }: QuestionProps) => {
  const { elapsedTime } = useElapsedTime();

  return (
    <div className={styles['question']}>
      <span className={styles['question__timestamp']}>
        질문 · {elapsedTime(createAt)}
      </span>
      <p className={styles['question__content']}>{content}</p>
    </div>
  );
};

export default Question;
