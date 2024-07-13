import { ReactComponent as Icon } from '../../../../assets/icon/Facebook-light.svg';
import RoundButton from '../../RoundButton/RoundButton';
import styles from './FacebookShareButton.module.scss';

const FacebookShareButton = () => {
  return (
    <>
      <RoundButton
        className={styles['button--custom-color']}
        handleClick={() => {}}
      >
        <Icon />
      </RoundButton>
    </>
  );
};

export default FacebookShareButton;
