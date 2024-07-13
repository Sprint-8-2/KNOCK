import styles from '../../styles/badge.module.scss';

interface BadgeProps {
  status: boolean;
}

const Badge: React.FC<BadgeProps> = ({ status }) => {
  return (
    <div
      className={`${styles['Badge']} ${status ? styles['Badge__answered'] : styles['Badge__unanswered']}`}
    >
      {status ? '답변완료' : '미답변'}
    </div>
  );
};

export default Badge;

