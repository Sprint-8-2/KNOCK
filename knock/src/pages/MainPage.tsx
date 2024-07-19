import MainPageInput from '../components/MainPageInput/MainPageInput';
import Image from '../core/ui/CommonImage/Image';
import MetaTags from '../core/ui/MetaTags/MetaTags';
import MainPageLogo from '../core/assets/image/MainPgaeLogo.svg';
import backgroundImg from '../core/assets/image/mainimage.png';
import rightArrow from '../core/assets/icon/Hyphen-Arrow-right.svg';
import styles from './MainPage.module.scss';
import UButton from '../core/ui/buttons/UButton/UButton';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createSubject } from '../lib/api/Subject';
import useUserInfo from '../lib/hooks/useUserInfo';

const MainPage = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const { handleUserInfo } = useUserInfo();

  const handleNameSet = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (name && e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      const { id, name: subName, imageSource } = await createSubject({ name });
      navigate(`/post/${id}/answer`);
      handleUserInfo({ id, name: subName, imageSource });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={`${styles['mainPage']}`}>
      <MetaTags />
      <UButton
        type="box"
        handleClick={handleSubmit}
        isLightTheme={true}
        className={`${styles['mainPage__answer']}`}
      >
        답변하러 가기
        <Image
          src={rightArrow}
          alt="rightArrow"
          imageClassName={styles['mainPage__answer__rightArrowImg']}
        />
      </UButton>
      <Image
        src={MainPageLogo}
        alt="메인페이지로고"
        imageClassName={styles['mainPage__logo']}
      />
      <div className={`${styles['mainPage__mainInput']}`}>
        <MainPageInput
          name={name}
          handleNameSet={handleNameSet}
          handleSubmit={handleSubmit}
          handleKeyDown={handleKeyDown}
        />
      </div>
      <Image
        src={backgroundImg}
        alt="배경이미지"
        imageClassName={styles['mainPage__bg-img']}
      />
    </div>
  );
};

export default MainPage;
