import Image from '../CommonImage/Image';
import Icon from '../icon/Icon';
import styles from '../../styles/usercard/UserCard.module.scss';
import messages from '../../assets/icon/Messages.svg';

interface UserCardProps {
  count?: number;
  name: string;
  src: string;
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const UserCard: React.FC<UserCardProps> = ({
  count = 0,
  name,
  src,
  onClick = () => {},
}) => {
  return (
    <div onClick={onClick} className={styles['user-card']}>
      <Image src={src} alt="프로필 이미지" />
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
