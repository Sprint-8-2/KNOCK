import React from 'react';
import emptyimage from '../../assets/image/Image3.svg';
import './EmptyQuestion.module.scss';

const EmptyQuestion: React.FC = () => {
  return (
    <div>
      <img
        className="Empty-Question__img"
        src={emptyimage}
        alt="개별피드 빈질문 이미지"
      />
    </div>
  );
};

export default EmptyQuestion;
