import styles from '../../styles/badge.module.scss';

interface BadgeProps {
  isAnswered: boolean;
}

const Badge: React.FC<BadgeProps> = ({ isAnswered }) => {
  return (
    <div
      className={`${styles['Badge']} ${isAnswered ? styles['Badge__answered'] : styles['Badge__unanswered']}`}
    >
      {isAnswered ? '답변완료' : '미답변'}
    </div>
  );
};

export default Badge;
