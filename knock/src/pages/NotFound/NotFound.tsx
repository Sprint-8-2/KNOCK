import { Link } from 'react-router-dom';

import UButton from '../../core/ui/buttons/UButton/UButton';
import Image from '../../core/ui/CommonImage/Image';
import Icon from '../../core/ui/CommonIcon/icon';

import styles from './notFound.module.scss';
import backgroundImg from '../../core/assets/image/mainimage.png';
import arrowRight from '../../core/assets/icon/Hyphen-Arrow-right.svg';

const NotFound = () => {
  return (
    <section className={styles['not-found']}>
      <h1 className={styles['not-found__title']}>페이지를 찾을 수 없습니다</h1>
      <h2 className={styles['not-found__sub-title']}>Page Not Found</h2>
      <Link to="/" className={styles['not-found__button-wrapper']}>
        <UButton
          className={styles['not-found__button']}
          type="box"
          handleClick={() => {}}
        >
          메인화면으로
          <Icon
            className={styles['not-found__button--icon']}
            src={arrowRight}
            alt="오른쪽 화살표"
          />
        </UButton>
      </Link>
      <Image
        src={backgroundImg}
        alt="배경이미지"
        imageClassName={styles['not-found__bg-img']}
      />
    </section>
  );
};

export default NotFound;
