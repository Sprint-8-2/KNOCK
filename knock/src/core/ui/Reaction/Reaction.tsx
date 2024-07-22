import BeforeLikeIcon from '../../assets/icon/like/Before-like.svg';
import BeforeUnLikeIcon from '../../assets/icon/unlike/Before-unLike.svg';
import AfterLikeIcon from '../../assets/icon/like/After-like.svg';
import AfterUnLikeIcon from '../../assets/icon/unlike/After-unLike.svg';
import Icon from '../CommonIcon/icon';
import styles from '../../styles/Reaction.module.scss';

interface ReactionProps {
  likeCount: number;
  handleClickLike: () => void;
  handleClickDislike: () => void;
  isLiked?: boolean;
  isDisliked?: boolean;
}

const Reaction: React.FC<ReactionProps> = ({
  likeCount,
  handleClickLike,
  handleClickDislike,
  isLiked,
  isDisliked,
}) => {
  return (
    <div className={`${styles['container']}`}>
      <div className={styles['button-wrapper']} onClick={handleClickLike}>
        <Icon
          className={styles['icon']}
          src={isLiked ? AfterLikeIcon : BeforeLikeIcon}
          alt="좋아요"
        />
        <div
          className={`
            ${styles['text']}
						${styles['like']} 
            ${isLiked ? styles['like--active'] : ''}
            `}
        >
          좋아요 {likeCount}
        </div>
      </div>
      <div className={styles['button-wrapper']} onClick={handleClickDislike}>
        <Icon
          className={styles['icon']}
          src={isDisliked ? AfterUnLikeIcon : BeforeUnLikeIcon}
          alt="싫어요"
        />
        <div
          className={`
            ${styles['text']} 
						${styles['dislike']} 
            ${isDisliked ? styles['dislike--active'] : ''}
            `}
        >
          싫어요
        </div>
      </div>
    </div>
  );
};

export default Reaction;
