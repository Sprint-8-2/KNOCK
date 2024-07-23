import React, { useRef, useEffect } from 'react';
import './StartAnimationPage.scss';
import TalkImage from '../../core/assets/animationImage/ainmation1.png';
import ListenImage from '../../core/assets/animationImage/ainmation2.png';

type ImageRef = HTMLImageElement | null;
type DivRef = HTMLDivElement | null;

const StartAnimationPage: React.FC = () => {
  const TalkImageRef = useRef<ImageRef>(null);
  const ListenImageRef = useRef<ImageRef>(null);
  const MessageRef = useRef<DivRef>(null);
  const ScrollRef = useRef<DivRef>(null);

  const handleScroll = () => {
    const value = window.scrollY;

    if (TalkImageRef.current) {
      TalkImageRef.current.style.animation =
        value > 100
          ? 'Talk_slide_EndPoint 1s ease-out forwards'
          : 'Talk_slide_StartPoint 1s ease-out';
    }

    if (ListenImageRef.current) {
      ListenImageRef.current.style.animation =
        value > 100
          ? 'Listen_slide_EndPoint 1s ease-out forwards'
          : 'Listen_slide_StartPoint 1s ease-out';
    }

    if (MessageRef.current) {
      MessageRef.current.style.animation =
        value > 100
          ? 'Message_slide_EndPoint 0.4s ease-out forwards'
          : 'Message_slide_StartPoint 1s ease-out';
    }

    if (ScrollRef.current) {
      ScrollRef.current.style.animation =
        value > 100
          ? 'Scroll_slide_EndPoint 0.4s ease-out forwards'
          : 'Scroll_slide_StartPoint 1s ease-out';
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div className="start-animation__container">
        <div className="start-animation__content">
          <img
            ref={TalkImageRef}
            className="start-animation__talk-image"
            src={TalkImage}
            alt="말하는 이미지"
          />
          <div ref={MessageRef} className="start-animation__knock-message">
            <span className="start-animation__mind">마음의 문을</span>
            <span className="start-animation__knock"> KNOCK하세요</span>
          </div>
          <img
            ref={ListenImageRef}
            className="start-animation__listen-image"
            src={ListenImage}
            alt="듣는 이미지"
          />
          <span ref={ScrollRef} className="start-animation__loader"></span>
        </div>
      </div>
    </div>
  );
};

export default StartAnimationPage;
