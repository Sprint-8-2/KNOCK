import { ReactComponent as Icon } from '../../../../assets/icon/Link-light.svg';
import RoundButton from '../../RoundButton/RoundButton';
import useCopyCurrentUrl from '../../../../../lib/hooks/useCopyCurrentUrl';
import styles from './LinkShareButton.module.scss';

const LinkShareButton = () => {
  const [isCopied, copyCurrentUrl] = useCopyCurrentUrl();

  return (
    <>
      <RoundButton
        className={styles['button--custom-color']}
        handleClick={copyCurrentUrl}
      >
        <Icon />
      </RoundButton>
    </>
  );
};

export default LinkShareButton;
