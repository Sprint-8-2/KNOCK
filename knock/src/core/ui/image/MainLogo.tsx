import React from 'react';
import mainlogo from '../../assets/image/logo-1.svg';
import './MainLogo.module.scss';

// Prop 타입 정의
interface MainLogoProps {
  width?: string | number;
  height?: string | number;
  margin?: string | number;
}

const MainLogo: React.FC<MainLogoProps> = ({ width, height, margin }) => {
  return (
    <div className="main-logo">
      <img
        className="main-logo__img"
        src={mainlogo}
        alt="메인페이지 로고"
        style={{ width, height, margin }}
      />
    </div>
  );
};

export default MainLogo;
