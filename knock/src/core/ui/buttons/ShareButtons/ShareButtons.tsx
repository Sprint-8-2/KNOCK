import LinkShareButton from './LinkShareButton/LinkShareButton';
import KakaoShareButton from './KakaoShareButton/KakaoShareButton';
import FacebookShareButton from './FacebookShareButton/FacebookShareButton';
import styles from './ShareButtons.module.scss';

const ShareButtons = () => {
  return (
    <>
      <div className={styles['buttons__wrapper']}>
        <LinkShareButton handleClick={() => {}} />
        <KakaoShareButton />
        <FacebookShareButton />
      </div>
    </>
  );
};

export default ShareButtons;
