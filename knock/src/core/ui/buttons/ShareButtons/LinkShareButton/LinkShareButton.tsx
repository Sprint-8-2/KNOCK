import { ReactComponent as Icon } from '../../../../assets/icon/Link-light.svg';
import useCopyCurrentUrl from '../../../../../lib/hooks/useCopyCurrentUrl';
import UButton from '../../UButton/UButton';
import styles from './LinkShareButton.module.scss';

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
