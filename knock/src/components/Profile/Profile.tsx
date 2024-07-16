import styles from './Profile.module.scss';
import profileImage from '../../core/assets/image/Profilephoto.svg';
import ShareButtons from '../../core/ui/buttons/ShareButtons/ShareButtons';

interface ProfileProps {}

const Profile = ({}: ProfileProps) => {
  return (
    <div className={`${styles['container']}`}>
      <img
        src={profileImage}
        alt="profileImage"
        className={`${styles['profileImage']}`}
      />
      <div className={`${styles['text']}`}>아초는고양이</div>
      <ShareButtons />
    </div>
  );
};

export default Profile;
