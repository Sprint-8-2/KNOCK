import ShareButtons from '../../core/ui/buttons/ShareButtons/ShareButtons';

import styles from './Profile.module.scss';
import defaultImage from '../../core/assets/image/Profilephoto.svg';
import Image from '../../core/ui/CommonImage/Image';

interface ProfileProps {
  profileImage: string;
  name: string;
}

const Profile = ({ profileImage, name }: ProfileProps) => {
  return (
    <div className={`${styles['feed-profile']}`}>
      <Image
        src={profileImage || defaultImage}
        alt="피드 프로필"
        imageClassName={styles['feed-profile--img']}
      />
      <div className={`${styles['feed-profile__name']}`}>{name}</div>
      <ShareButtons />
    </div>
  );
};

export default Profile;
