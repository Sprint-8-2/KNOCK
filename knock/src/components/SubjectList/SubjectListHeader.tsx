import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import UButton from '../../core/ui/buttons/UButton/UButton';
import Icon from '../../core/ui/CommonIcon/icon';
import Image from '../../core/ui/CommonImage/Image';

import styles from './SubjectListHeader.module.scss';
import LogoImage from '../../core/assets/image/SubPageLogo.svg';
import ArrowRightIcon from '../../core/assets/icon/Hyphen-Arrow-right.svg';

interface UserInfo {
  id: number;
  name: string;
  imageSource: string;
}

const SubjectListHeader = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    const userInfoStr = window.localStorage.getItem('userInfo');
    if (userInfoStr) {
      setUserInfo(JSON.parse(userInfoStr));
    }
  }, []);

  return (
    <section className={styles['subject-list-header']}>
      <Link to="/">
        <Image
          imageClassName={styles['subject-list-header__img']}
          src={LogoImage}
          alt="메인 로고"
        />
      </Link>
      <Link to={userInfo ? `/post/${userInfo.id}/answer` : '/'}>
        <UButton type="box" handleClick={() => {}} isLightTheme={true}>
          <p className={styles['subject-list-header__button-content']}>
            <span>답변하러 가기</span>
            <Icon
              className={styles['subject-list-header__button-icon']}
              src={ArrowRightIcon}
              alt="오른쪽 화살표"
            />
          </p>
        </UButton>
      </Link>
    </section>
  );
};

export default SubjectListHeader;
