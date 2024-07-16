import styles from './Profile.module.scss';
import defaultImage from '../../core/assets/image/Profilephoto.svg';
import ShareButtons from '../../core/ui/buttons/ShareButtons/ShareButtons';

interface ProfileProps {
  profileImage: string;
  name: string;
}

const Profile = ({
  profileImage,
  name = '',
}: ProfileProps) => {
  return (
    <div className={`${styles['container']}`}>
      <img
        src={profileImage || defaultImage}
        alt="profileImage"
        className={`${styles['profileImage']}`}
      />
      <div className={`${styles['text']}`}>{name}</div>
      <ShareButtons />
    </div>
  );
};

export default Profile;
