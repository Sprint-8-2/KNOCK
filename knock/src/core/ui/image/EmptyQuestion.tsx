import styles from '../../styles/image/emptyquestion.module.scss';

type EmptyQuestionProps = {
  src: string;
  alt: string;
};

const EmptyQuestion: React.FC<EmptyQuestionProps> = ({ src, alt }) => {
  return (
    <div>
      <img className={styles['Empty-Question__img']} src={src} alt={alt} />
    </div>
  );
};

export default EmptyQuestion;
