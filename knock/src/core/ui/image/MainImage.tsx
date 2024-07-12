import React from 'react';
import mainimage from '../../assets/image/mainimage.png';
import './MainImage.module.scss';

const MainImage: React.FC = () => {
  return (
    <div className="main-image">
      <img
        className="main-image__img"
        src={mainimage}
        alt="메인페이지 이미지"
      />
    </div>
  );
};

export default MainImage;
