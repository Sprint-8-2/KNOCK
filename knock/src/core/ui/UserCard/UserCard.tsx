import { useNavigate } from 'react-router-dom';
import ProfileImage from '../Image/ProfileImage';
import Icon from '../Icon/Icon';
import styles from '../../styles/usercard/UserCard.module.scss';
import messages from '../../assets/icon/Messages.svg';

interface UserCardProps {
  count?: number;
  to: string;
  name: string;
  src: string;
}

const UserCard: React.FC<UserCardProps> = ({ count = 0, to, name, src }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(to);
  };

  return (
    <div onClick={handleClick} className={styles['user-card']}>
      <ProfileImage src={src} alt="프로필 이미지" />
      <h3 className={styles['user-card__name']}>{name}</h3>
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
    </div>
  );
};

export default UserCard;
