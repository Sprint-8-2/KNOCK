import React from 'react';
import styles from './MainLogo.module.scss';

type MainLogoProps = {
  src: string;
};

const MainLogo: React.FC<MainLogoProps> = ({ src }) => {
  return (
    <div className={styles['main-logo']}>
      <img
        className={styles['main-logo__img']}
        src={src}
        alt="메인페이지 로고"
      />
    </div>
  );
};

export default MainLogo;
