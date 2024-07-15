import styles from '../../styles/image/ProfileImage.module.scss';

type ProfileImageProps = {
  src: string;
  alt: string;
};
const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt }) => {
  return (
    <div className={styles['Profile-Photo']}>
      <img className={styles['Profile-Photo__img']} src={src} alt={alt} />
    </div>
  );
};

export default ProfileImage;
