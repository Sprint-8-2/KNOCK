import { ReactComponent as Icon } from '../../../../assets/icon/Facebook-light.svg';
import UButton from '../../UButton/UButton';
import styles from './FacebookShareButton.module.scss';

const FacebookShareButton = () => {
  return (
    <>
      <UButton
        type="round"
        className={styles['button--custom-color']}
        handleClick={() => {}}
      >
        <Icon />
      </UButton>
    </>
  );
};

export default FacebookShareButton;
