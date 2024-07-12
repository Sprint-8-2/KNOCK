import React from 'react';
import styles from './MainImage.module.scss';

type MainImageProps = {
  src: string;
};

const MainImage: React.FC<MainImageProps> = ({ src }) => {
  return (
    <div className={styles['main-image']}>
      <img
        className={styles['main-image__img']}
        src={src}
        alt="메인페이지 이미지"
      />
    </div>
  );
};

export default MainImage;
