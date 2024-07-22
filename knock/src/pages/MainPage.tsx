import React, { useState, useEffect } from 'react';
import MainPageInput from '../components/MainPageInput/MainPageInput';
import Image from '../core/ui/CommonImage/Image';
import MetaTags from '../core/ui/MetaTags/MetaTags';
import MainPageLogo from '../core/assets/image/MainPgaeLogo.svg';
import backgroundImg from '../core/assets/image/MainBgImg.svg';
import rightArrow from '../core/assets/icon/Hyphen-Arrow-right.svg';
import styles from './MainPage.module.scss';
import UButton from '../core/ui/buttons/UButton/UButton';
import { useNavigate } from 'react-router-dom';
import Icon from '../core/ui/CommonIcon/icon';
import AnimationPage from './AnimationPage/AnimationPage';

const MainPage = () => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 768);

  const navigate = useNavigate();

  const goToAnswerPage = () => {
    navigate(`/list`);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isWideScreen && <AnimationPage />}
      <div className={`${styles['mainPage']}`}>
        <MetaTags />
        <Image
          src={MainPageLogo}
          alt="메인페이지로고"
          imageClassName={styles['mainPage__logo']}
        />
        <UButton
          type="box"
          handleClick={goToAnswerPage}
          isLightTheme={true}
          className={`${styles['mainPage__answer']}`}
        >
          답변하러 가기
          <Icon
            src={rightArrow}
            alt="rightArrow"
            className={styles['mainPage__answer__rightArrowImg']}
          />
        </UButton>
        <MainPageInput mainPageInputClassName={styles['mainPage__mainInput']} />
        <Image
          src={backgroundImg}
          alt="배경이미지"
          imageClassName={styles['mainPage__bg-img']}
        />
      </div>
    </>
  );
};

export default MainPage;
