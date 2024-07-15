import { ReactComponent as Icon } from '../../../../assets/icon/Kakaotalk.svg';
import UButton from '../../UButton/UButton';
import styles from './KakaoShareButton.module.scss';

const KakaoShareButton = () => {
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

export default KakaoShareButton;
