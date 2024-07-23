import React, { useRef, useEffect } from 'react';
import './AnimationPage.scss';
import StartAnimationPage from './StartAnimationPage';
import MainPgaeExplain from './MainPageExplain';
import Logo from '../../core/assets/animationImage/Animation-Logo.png';
import FeedExplain from './FeedExplain';
import ListPageExplain from './ListPageExplain';
import AnswerExplain from './AnswerExplain';

type ImageRef = HTMLImageElement | null;

const AnimationPage: React.FC = () => {
  const LogoRef = useRef<ImageRef>(null);

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;
      console.log('scrollY는', value);

      if (LogoRef.current) {
        LogoRef.current.style.animation =
          value > 4000
            ? 'Scroll_slide_EndPoint 0.4s ease-out forwards'
            : 'Scroll_slide_StartPoint 1s ease-out';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="merge-container">
      <div className="section-logo-container">
        <img
          ref={LogoRef}
          className="section-logo-image"
          src={Logo}
          alt="로고 이미지"
        />
      </div>
      <StartAnimationPage />
      <MainPgaeExplain />
      <ListPageExplain />
      <FeedExplain />
      <AnswerExplain />
    </div>
  );
};

export default AnimationPage;
