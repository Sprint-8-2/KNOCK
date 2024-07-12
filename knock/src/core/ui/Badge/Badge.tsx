import styles from '../../styles/badge.module.scss';

interface BadgeProps {
  status: string;
}

const Badge: React.FC<BadgeProps> = ({ status }) => {
  return (
    <div
      className={`${styles['Badge']} ${status === 'answered' ? styles['answered'] : styles['unanswered']}`}
    >
      {status === 'answered' ? '답변완료' : '미답변'}
    </div>
  );
};

export default Badge;

