import { ReactComponent as Icon } from '../../../../assets/icon/Link-light.svg';
import RoundButton from '../../RoundButton/RoundButton';
import useCopyCurrentUrl from '../../../../../lib/hooks/useCopyCurrentUrl';
import styles from './LinkShareButton.module.scss';
import UButton from '../../UButton/UButton';

const LinkShareButton = () => {
  const [isCopied, copyCurrentUrl] = useCopyCurrentUrl();

  return (
    <>
      <UButton
        type="round"
        className={styles['button--custom-color']}
        handleClick={copyCurrentUrl}
      >
        <Icon />
      </UButton>
    </>
  );
};

export default LinkShareButton;
