import BeforeLike from '../../assets/icon/Before-like.svg';
import BeforeHate from '../../assets/icon/Before-hate.svg';
import AfterLike from '../../assets/icon/After-like.svg';
import AfterHate from '../../assets/icon/After-hate.svg';
import styles from '../../styles/Reaction.module.scss';
import { useState } from 'react';

interface ReactionProps {}

const Reaction = ({}: ReactionProps) => {
  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [unLiked, setUnLiked] = useState(false);

  const handleLikeClick = () => {
    const count = likeCount + 1;
    setLikeCount(count);
    setLiked(true);
    setUnLiked(false);
  };

  const handleUnLikeClick = () => {
    setUnLiked(!unLiked);
    setLiked(false);
    setLikeCount(0);
  };

  return (
    <div className={`${styles['container']}`}>
      <label className={`${styles['label']}`} onClick={handleLikeClick}>
        <img src={liked ? AfterLike : BeforeLike} alt="좋아요" />
        <button
          className={`
          ${styles['text']}
          ${liked ? styles['like'] : ''}
          `}
        >
          좋아요 {liked ? likeCount : ''}
        </button>
      </label>
      <label className={`${styles['label']}`} onClick={handleUnLikeClick}>
        <img src={unLiked ? AfterHate : BeforeHate} alt="싫어요" />
        <button
          className={`
          ${styles['text']} 
          ${unLiked ? styles['hate'] : ''}
          `}
        >
          싫어요
        </button>
      </label>
    </div>
  );
};
export default Reaction;
