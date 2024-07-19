import Icon from '../../../CommonIcon/icon';
import UButton from '../../UButton/UButton';

import linkLightIcon from '../../../../assets/icon/Link-light.svg';

import styles from './LinkShareButton.module.scss';

interface LinkShareButtonProps {
  sharedUrl: string;
  onSuccess: () => void;
  onError: () => void;
}

const LinkShareButton = ({
  sharedUrl,
  onSuccess,
  onError,
}: LinkShareButtonProps) => {
  const handleLinkShare = () => {
    navigator.clipboard
      .writeText(sharedUrl)
      .then(() => {
        onSuccess();
      })
      .catch(() => {
        onError();
      });
  };
  return (
    <>
      <UButton
        type="round"
        className={styles['button--custom-color']}
        handleClick={handleLinkShare}
      >
        <Icon className="" src={linkLightIcon} alt="링크 공유하기" />
      </UButton>
    </>
  );
};

export default LinkShareButton;
