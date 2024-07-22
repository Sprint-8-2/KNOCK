import React from 'react';
import AnimatedImage from '../../components/Animation/AnimatedImage';
import TalkImage from '../../core/assets/animationImage/ainmation1.png';
import MainImage from '../../core/assets/animationImage/mainPageImage.png';
import './MainPageExplain.scss';
import AnimatedText from '../../components/Animation/AnimatedText';

const MainPageExplain: React.FC = () => {
  return (
    <div className="main-explain">
      <AnimatedImage
        className="main-explain__talk-image"
        src={TalkImage}
        alt="말하는이미지"
        animationStartPoint="Left_slide_StartPoint"
        animationEndPoint="Left_slide_EndPoint"
        triggerPoint={700}
      />

      <AnimatedText
        animationStartPoint="text_message_StartPoint"
        animationEndPoint="text_message_EndPoint"
        triggerPoint={700}
        className="main-explain__message"
      >
        <div className="message-container">
          <span className="main-explain__message-1">
            마음의 문을 두드려 주세요
          </span>
          <span className="main-explain__message-2">이름을 입력후</span>
          <span className="main-explain__message-3">
            질문하기 버튼을 눌러주세요
          </span>
        </div>
      </AnimatedText>

      <AnimatedImage
        className="main-explain__page-image"
        src={MainImage}
        alt="메인페이지설명이미지"
        animationStartPoint="Right_slide_StartPoint"
        animationEndPoint="Right_slide_EndPoint"
        triggerPoint={700}
      />
    </div>
  );
};

export default MainPageExplain;
