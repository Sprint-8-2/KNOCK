import styles from '../../styles/usercard/UserCardSkeleton.module.scss';

const SkeletonUserCard = ({}) => {
  return (
    <div className={styles['user-skeleton-card']}>
      <div className={styles['user-skeleton-card__content']}>
        <div className={styles['user-skeleton-card__content--img']}></div>
        <h3 className={styles['user-skeleton-card__name']}></h3>
      </div>
      <div className={styles['user-skeleton-card__received-container']}></div>
    </div>
  );
};

export default SkeletonUserCard;
