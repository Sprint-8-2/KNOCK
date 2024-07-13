import { ReactComponent as Icon } from '../../../../assets/icon/Kakaotalk.svg';
import RoundButton from '../../RoundButton/RoundButton';
import styles from './KakaoShareButton.module.scss';

const KakaoShareButton = () => {
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

export default KakaoShareButton;
