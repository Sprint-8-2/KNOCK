import BeforeLikeIcon from '../../assets/icon/like/Before-like.svg';
import BeforeUnLikeIcon from '../../assets/icon/unlike/Before-unLike.svg';
import AfterLikeIcon from '../../assets/icon/like/After-like.svg';
import AfterUnLikeIcon from '../../assets/icon/unlike/After-unLike.svg';
import styles from '../../styles/Reaction.module.scss';
import { useState } from 'react';

interface ReactionProps {
  likeCount: number;
  onClickLike: () => void;
  onClickDislike: () => void;
  isLiked?: boolean;
  isDisliked?: boolean;
}

const Reaction: React.FC<ReactionProps> = ({
  likeCount,
  onClickLike,
  onClickDislike,
  isLiked,
  isDisliked,
}) => {
  const handleLikeClick = () => {
    if (!isLiked) {
      onClickLike();
    } else {
      onClickLike();
    }
  };

  const handleLikeDoubleClick = () => {
    onClickDislike();
  };

  return (
    <div className={`${styles['container']}`}>
      <div className={`${styles['label']}`}>
        <div>
          <img src={isLiked ? AfterLikeIcon : BeforeLikeIcon} alt="좋아요" />
          <button
            className={`
            ${styles['text']}
            ${isLiked ? styles['like'] : ''}
            `}
            onClick={handleLikeClick}
          >
            좋아요 {likeCount}
          </button>
          <img
            src={isDisliked ? AfterUnLikeIcon : BeforeUnLikeIcon}
            alt="싫어요"
          />
          <button
            className={`
            ${styles['text']} 
            ${isDisliked ? styles['hate'] : ''}
            `}
            onClick={handleLikeDoubleClick}
          >
            싫어요
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reaction;
