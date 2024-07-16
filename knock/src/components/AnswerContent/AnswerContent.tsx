import styles from './AnswerContent.module.scss';

interface AnswerContentProps {
  content: string;
}

const AnswerContent = ({ content = '' }: AnswerContentProps) => {
  return <p className={styles['content']}>{content}</p>;
};

export default AnswerContent;
