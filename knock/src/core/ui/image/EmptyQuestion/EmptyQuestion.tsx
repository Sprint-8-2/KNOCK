import React from 'react';
import styles from './EmptyQuestion.module.scss';

type EmptyQuestionProps = {
  src: string;
};

const EmptyQuestion: React.FC<EmptyQuestionProps> = ({ src }) => {
  return (
    <div>
      <img
        className={styles['Empty-Question__img']}
        src={src}
        alt="개별피드 빈질문 이미지"
      />
    </div>
  );
};

export default EmptyQuestion;
