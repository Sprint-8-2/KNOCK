import ShareButtons from '../../core/ui/buttons/ShareButtons/ShareButtons';

import styles from './Profile.module.scss';
import defaultImage from '../../core/assets/image/Profilephoto.svg';
import Image from '../../core/ui/CommonImage/Image';

interface ProfileProps {
  profileWrapClassName?: string;
  profileImage: string;
  name: string;
  copySuccess: () => void;
  copyError: () => void;
}

const Profile = ({
  profileWrapClassName,
  profileImage,
  name,
  copySuccess,
  copyError,
}: ProfileProps) => {
  return (
    <div className={profileWrapClassName ?? `${styles['feed-profile']}`}>
      <Image
        src={profileImage || defaultImage}
        alt="피드 프로필"
        imageClassName={styles['feed-profile--img']}
      />
      <div className={`${styles['feed-profile__name']}`}>{name}</div>
      <ShareButtons copySuccess={copySuccess} copyError={copyError} />
    </div>
  );
};

export default Profile;
