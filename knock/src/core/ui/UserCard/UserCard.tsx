import { Link } from 'react-router-dom';
import ProfileImage from '../Image/ProfileImage';
import Icon from '../Icon/Icon';
import styles from './UserCard.module.scss';
import messages from '../../assets/icon/Messages.svg';
import profileimage from '../../assets/image/Profilephoto.svg';

interface UserCardProps {
  count?: number;
  to: string;
}

const UserCard: React.FC<UserCardProps> = ({ count = 0, to }) => {
  return (
    <Link to={to} className={styles['user-card']}>
      <ProfileImage src={profileimage} alt="프로필 이미지" />
      <h3 className={styles['user-card__name']}>아초는 고양이</h3>
      <div className={styles['user-card__received-container']}>
        <div className={styles['user-card__icon-questions']}>
          <Icon
            src={messages}
            alt="메시지 이미지"
            className={styles['user-card__messages']}
          />
          <span className={styles['user-card__received-questions']}>
            받은질문
          </span>
        </div>
        <span className={styles['user-card__count']}>{count}개</span>
      </div>
    </Link>
  );
};

export default UserCard;
