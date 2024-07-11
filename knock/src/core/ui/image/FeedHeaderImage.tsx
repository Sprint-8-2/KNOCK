import React from 'react';
import feedimage from '../../assets/image/feedHeaderImage.png';
import './FeedHeaderImage.module.scss';

const FeedHeaderImage: React.FC = () => {
  return (
    <div className="feedheader-image">
      <img
        className="feedheader-image__img"
        src={feedimage}
        alt="메인페이지 이미지"
      />
    </div>
  );
};

export default FeedHeaderImage;
