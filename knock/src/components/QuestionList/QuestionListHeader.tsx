import { Link } from 'react-router-dom';
import UButton from '../../core/ui/buttons/UButton/UButton';

import LogoImage from '../../core/assets/image/SubPageLogo.svg';
import ArrowRightIcon from '../../core/assets/icon/Hyphen-Arrow-right.svg';

import styles from './QuestionListHeader.module.scss';
import Icon from '../../core/ui/CommonIcon/icon';
import Image from '../../core/ui/CommonImage/Image';

const QuestionListHeader = () => {
  return (
    <section className={styles['question-list-header']}>
      <Link to="/">
        <Image
          imageClassName={styles['question-list-header__img']}
          src={LogoImage}
          alt="메인 로고"
        />
      </Link>
      <Link to="/post">
        <UButton type="box" handleClick={() => {}} isLightTheme={true}>
          <p className={styles['question-list-header__button-content']}>
            <span>답변하러 가기</span>
            <Icon
              className={styles['question-list-header__button-icon']}
              src={ArrowRightIcon}
              alt="오른쪽 화살표"
            />
          </p>
        </UButton>
      </Link>
    </section>
  );
};

export default QuestionListHeader;
