import { Link } from 'react-router-dom';

import { UserInfos } from '../../lib/hooks/useLoscalStorageUserInfo';
import Icon from '../../core/ui/CommonIcon/icon';
import Image from '../../core/ui/CommonImage/Image';

import closeIcon from '../../core/assets/icon/Close.svg';
import { FiUser } from 'react-icons/fi';

import styles from './SubjectModalContent.module.scss';

interface SubjectModalContentProps {
  users: UserInfos | null;
  onClose: () => void;
}

const SubjectModalContent = ({ users, onClose }: SubjectModalContentProps) => {
  return (
    <div className={styles['subject-modal-content']}>
      <div className={styles['subject-modal-content__header']}>
        <div className={styles['subject-modal-content__header--title']}>
          <FiUser className={styles['subject-modal-content__header--icon']} />
          <h3>프로필을 선택해주세요</h3>
        </div>
        <Icon
          src={closeIcon}
          alt="닫기"
          className={styles['subject-modal-content__close--icon']}
          handleClick={onClose}
        />
      </div>
      <ul className={styles['subject-modal-content__main']}>
        {!users ? (
          <>
            <p className={styles['subject-modal-content__placeholder']}>
              프로필을 만들어주세요 😄
            </p>
            <Link
              to="/"
              className={styles['subject-modal-content__placeholder--button']}
            >
              프로필 만들러가기
            </Link>
          </>
        ) : (
          Object.keys(users).map((key) => {
            return (
              <Link
                key={key}
                to={`/post/${key}/answer`}
                className={styles['subject-modal-content__main--list']}
              >
                <Image
                  imageClassName={styles['subject-modal-content__main--img']}
                  src={users[key].imageSource}
                  alt="사용자 프로필"
                />
                {users[key].name}
              </Link>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default SubjectModalContent;
