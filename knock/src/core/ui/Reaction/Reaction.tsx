import BeforeLikeIcon from '../../assets/icon/like/Before-like.svg';
import BeforeUnLikeIcon from '../../assets/icon/unlike/Before-unLike.svg';
import AfterLikeIcon from '../../assets/icon/like/After-like.svg';
import AfterUnLikeIcon from '../../assets/icon/unlike/After-unLike.svg';
import styles from '../../styles/Reaction.module.scss';
import { useState } from 'react';

interface ReactionProps {
  likeCount: number;
  onLikeClick: () => void;
  onLikeDoubleClick: () => void;
}

const Reaction: React.FC<ReactionProps> = ({
  likeCount,
  onLikeClick,
  onLikeDoubleClick,
}) => {
  const [liked, setLiked] = useState(false);
  const [unLiked, setUnLiked] = useState(false);

  const handleLikeClick = () => {
    if (!liked) {
      onLikeClick();
      setLiked(true);
      setUnLiked(false);
    } else {
      onLikeClick();
      setLiked(false);
      setUnLiked(true);
    }
  };

  const handleLikeDoubleClick = () => {
    setLiked(false);
    setUnLiked(false);
    onLikeDoubleClick();
  };

  return (
    <div
      className={`${styles['container']}`}
      onDoubleClick={handleLikeDoubleClick}
    >
      <div className={`${styles['label']}`} onClick={handleLikeClick}>
        <div>
          <img src={liked ? AfterLikeIcon : BeforeLikeIcon} alt="좋아요" />
          <button
            className={`
            ${styles['text']}
            ${liked ? styles['like'] : ''}
            `}
          >
            좋아요 {liked ? likeCount : ''}
          </button>
          <img
            src={unLiked ? AfterUnLikeIcon : BeforeUnLikeIcon}
            alt="싫어요"
          />
          <button
            className={`
            ${styles['text']} 
            ${unLiked ? styles['hate'] : ''}
            `}
          >
            싫어요
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reaction;
