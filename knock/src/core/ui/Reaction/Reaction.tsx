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
  const handleClickLike = () => {
    if (!isLiked) {
      onClickLike();
    } else {
      onClickLike();
    }
  };

  const handleClickDislike = () => {
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
						${styles['like']} 
            ${isLiked ? styles['like--active'] : ''}
            `}
            onClick={handleClickLike}
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
						${styles['dislike']} 
            ${isDisliked ? styles['dislike--active'] : ''}
            `}
            onClick={handleClickDislike}
          >
            싫어요
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reaction;
