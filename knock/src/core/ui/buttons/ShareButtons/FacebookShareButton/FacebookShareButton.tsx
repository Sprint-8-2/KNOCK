import Icon from '../../../CommonIcon/icon';
import UButton from '../../UButton/UButton';

import facebookIcon from '../../../../assets/icon/Facebook-light.svg';

import styles from './FacebookShareButton.module.scss';

interface FaceBookShareButtonProps {
  sharedUrl: string;
}

const FacebookShareButton = ({ sharedUrl }: FaceBookShareButtonProps) => {
  const handleFacebookShare = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${sharedUrl}`,
      '페이스북 공유하기',
      'width=600,height=800,location=no,status=no,scrollbars=yes',
    );
  };
  return (
    <>
      <UButton
        type="round"
        className={styles['button--custom-color']}
        handleClick={handleFacebookShare}
      >
        <Icon src={facebookIcon} alt="facebook 공유하기" className="" />
      </UButton>
    </>
  );
};

export default FacebookShareButton;
