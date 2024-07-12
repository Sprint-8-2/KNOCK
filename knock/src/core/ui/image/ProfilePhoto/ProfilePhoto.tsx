import React from 'react';
import styles from './ProfilePhoto.module.scss';

type ProfilePhotoProps = {
  src: string;
};

const ProfilePhoto: React.FC<ProfilePhotoProps> = ({ src }) => {
  return (
    <div className={styles['Profile-Photo']}>
      <img
        className={styles['Profile-Photo__img']}
        src={src}
        alt="프로필 이미지"
      />
    </div>
  );
};

export default ProfilePhoto;
