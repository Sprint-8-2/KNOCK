import { useParams } from 'react-router-dom';

import LinkShareButton from './LinkShareButton/LinkShareButton';
import KakaoShareButton from './KakaoShareButton/KakaoShareButton';
import FacebookShareButton from './FacebookShareButton/FacebookShareButton';

import styles from './ShareButtons.module.scss';

interface ShareButtonsProps {
  copySuccess: () => void;
  copyError: () => void;
}

const ShareButtons = ({ copySuccess, copyError }: ShareButtonsProps) => {
  const { id: path } = useParams();
  const sharedUrl = `${window.location.origin}/${path ? 'post/' + path : 'list'}`;

  return (
    <>
      <div className={styles['buttons__wrapper']}>
        <LinkShareButton
          sharedUrl={sharedUrl}
          onSuccess={copySuccess}
          onError={copyError}
        />
        <KakaoShareButton sharedUrl={sharedUrl} />
        <FacebookShareButton sharedUrl={sharedUrl} />
      </div>
    </>
  );
};

export default ShareButtons;
