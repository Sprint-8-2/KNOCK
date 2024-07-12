import React from 'react';
import styles from './FeedHeaderImage.module.scss';

type FeedHeaderImageProps = {
  src: string;
};

const FeedHeaderImage: React.FC<FeedHeaderImageProps> = ({ src }) => {
  return (
    <div className={styles['feedheader-image']}>
      <img
        className={styles['feedheader-image__img']}
        src={src}
        alt="메인페이지 이미지"
      />
    </div>
  );
};

export default FeedHeaderImage;
