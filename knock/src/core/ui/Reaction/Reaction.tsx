import BeforeLikeIcon from '../../assets/icon/like/Before-like.svg';
import BeforeUnLikeIcon from '../../assets/icon/unlike/Before-unLike.svg';
import AfterLikeIcon from '../../assets/icon/like/After-like.svg';
import AfterUnLikeIcon from '../../assets/icon/unlike/After-unLike.svg';
import styles from '../../styles/Reaction.module.scss';
import { useState, useEffect } from 'react';

const Reaction = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [unLiked, setUnLiked] = useState(false);

  useEffect(() => {
    fetch('your_api_endpoint')
      .then((response) => response.json())
      .then((data) => {
        setLikeCount(data.likeCount);
        setLiked(data.liked);
        setUnLiked(data.unLiked);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleLikeClick = () => {
    setLikeCount((prev) => prev + 1);
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
      <div className={`${styles['label']}`} onClick={handleLikeClick}>
        <img src={liked ? AfterLikeIcon : BeforeLikeIcon} alt="좋아요" />
        <button
          className={`
          ${styles['text']}
          ${liked ? styles['like'] : ''}
          `}
        >
          좋아요 {liked ? likeCount : ''}
        </button>
      </div>
      <div className={`${styles['label']}`} onClick={handleUnLikeClick}>
        <img src={unLiked ? AfterUnLikeIcon : BeforeUnLikeIcon} alt="싫어요" />
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
  );
};
export default Reaction;
