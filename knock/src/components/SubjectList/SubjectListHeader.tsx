import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import UButton from '../../core/ui/buttons/UButton/UButton';
import Image from '../../core/ui/CommonImage/Image';

import styles from './SubjectListHeader.module.scss';
import LogoImage from '../../core/assets/image/SubPageLogo.svg';
import { FiArrowRight } from 'react-icons/fi';
import useLoscalStorageUserInfo from '../../lib/hooks/useLoscalStorageUserInfo';
import CommonModal from '../../core/ui/Modal/CommonModal';
import SubjectModalContent from './SubjectModalContent';

interface UserInfo {
  id: number;
  name: string;
  imageSource: string;
}

const SubjectListHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { users } = useLoscalStorageUserInfo();

  const onModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className={styles['subject-list-header']}>
        <Link to="/">
          <Image
            imageClassName={styles['subject-list-header__img']}
            src={LogoImage}
            alt="메인 로고"
          />
        </Link>

        <UButton
          type="box"
          handleClick={() => {
            setIsModalOpen(true);
          }}
          isLightTheme={true}
        >
          <p className={styles['subject-list-header__button-content']}>
            <span>답변하러 가기</span>
            <FiArrowRight
              className={styles['subject-list-header__button-icon']}
            />
          </p>
        </UButton>
      </section>
      {isModalOpen && (
        <CommonModal isOpen={isModalOpen} onClose={onModalClose}>
          <SubjectModalContent users={users} onClose={onModalClose} />
        </CommonModal>
      )}
    </>
  );
};

export default SubjectListHeader;
