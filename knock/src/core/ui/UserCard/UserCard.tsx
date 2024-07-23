import Image from '../CommonImage/Image';
import Icon from '../CommonIcon/icon';
import { BiMessageRoundedDetail } from 'react-icons/bi';

import messages from '../../assets/icon/Messages.svg';
import styles from '../../styles/usercard/UserCard.module.scss';

interface UserCardProps {
  imgClassName?: string;
  imgWrapClassName?: string;
  count?: number;
  name: string;
  src: string;
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const UserCard: React.FC<UserCardProps> = ({
  imgClassName = '',
  imgWrapClassName = '',
  count = 0,
  name,
  src,
  onClick = () => {},
}) => {
  return (
    <div onClick={onClick} className={styles['user-card']}>
      <div className={styles['user-card__content']}>
        <Image
          containerClassName={imgWrapClassName}
          imageClassName={
            imgClassName ? imgClassName : styles['user-card__content--img']
          }
          src={src}
          alt="프로필 이미지"
        />
        <h3 className={styles['user-card__name']}>{name}</h3>
      </div>
      <div className={styles['user-card__received-container']}>
        <div className={styles['user-card__icon-questions']}>
          <BiMessageRoundedDetail className={styles['user-card__messages']} />
          <span className={styles['user-card__received-questions']}>
            받은 질문
          </span>
        </div>
        <span className={styles['user-card__count']}>{count}개</span>
      </div>
    </div>
  );
};

export default UserCard;
