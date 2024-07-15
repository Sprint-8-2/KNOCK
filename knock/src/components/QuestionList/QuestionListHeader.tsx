import BoxButton from '../../core/ui/buttons/BoxButton/BoxButton';

import LogoImage from '../../core/assets/image/logo.svg';
import ArrowRightIcon from '../../core/assets/icon/arrow-right-1.svg';

import styles from './QuestionListHeader.module.scss';
import Icon from '../../core/ui/Icon/Icon';
// import MainLogo from '../../core/ui/CommonImage/MainLogo';

const QuestionListHeader = () => {
  return (
    <section className={styles['question-list-header']}>
      <img
        className={styles['question-list-header__img']}
        src={LogoImage}
        alt="메인 로고"
      />

      <BoxButton handleClick={() => {}} isLightTheme={true}>
        <p className={styles['question-list-header__button-content']}>
          <span>답변하러 가기</span>
          <Icon
            className={styles['question-list-header__button-icon']}
            src={ArrowRightIcon}
            alt="오른쪽 화살표"
          />
        </p>
      </BoxButton>
    </section>
  );
};

export default QuestionListHeader;
