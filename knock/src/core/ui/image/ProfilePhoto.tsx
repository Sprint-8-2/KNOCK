import React from 'react';
import profileimage from './assets/image/Profilephoto.svg';
import './ProfilePhoto.module.scss';

interface ProfilePhotoProps {
  width?: string | number;
  height?: string | number;
}

const ProfilePhoto: React.FC<ProfilePhotoProps> = ({ width, height }) => {
  return (
    <div className="Profile-Photo">
      <img
        className="Profile-Photo__img"
        src={profileimage}
        alt="프로필 이미지"
        style={{ width, height }}
      />
    </div>
  );
};

export default ProfilePhoto;
