import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Image from '../core/ui/CommonImage/Image';
import postPageBannerImage from '../core/assets/image/feedHeaderImage.png';
import mainLogo from '../core/assets/image/MainPgaeLogo.svg';
import Profile from '../components/Profile/Profile';
import ModalPage from './ModalPage';
import useGetUserInfo from '../lib/hooks/feed/useGetUserInfo';
import MetaTags from '../core/ui/MetaTags/MetaTags';
import Toast from '../core/ui/Toast/Toast';
import InfiniteFeedList from '../components/feed/FeedList/InfiniteFeedList';
import styles from './PostPage.module.scss';

const PostPage = () => {
  const { id: subjectId } = useParams();
  const { data: subjectInfo } = useGetUserInfo({
    subjectId: subjectId as string | number,
  });
  const [onToast, setOnToast] = useState(false);
  const handleCopySuccess = () => {
    setOnToast(true);
    setTimeout(() => {
      setOnToast(false);
    }, 5000);
  };
  const handleError = () => {
    setOnToast(false);
  };

  return (
    <>
      <MetaTags />
      {onToast && (
        <div className={styles['post-page__toast']}>
          <Toast toastMessage="URL이 복사되었습니다." />
        </div>
      )}
      <div className={styles['post-page']}>
        <Image
          src={postPageBannerImage}
          alt="postPageBannerImage"
          imageClassName={styles['post-page__banner']}
        />
        <div className={styles['post-page__profile']}>
          <Profile
            copySuccess={handleCopySuccess}
            copyError={handleError}
            profileImage={subjectInfo?.imageSource as string}
            name={subjectInfo?.name as string}
          />
        </div>
        <Link to="/">
          <Image
            src={mainLogo}
            alt="mainLogo"
            imageClassName={styles['post-page__logo-img']}
          />
        </Link>
        <div className={styles['post-page__feed-list']}>
          <InfiniteFeedList
            mode="post"
            key={subjectId}
            subjectId={Number(subjectId)}
            subjectName={subjectInfo?.name || ''}
            subjectProfileImgSrc={subjectInfo?.imageSource || ''}
          />
        </div>
      </div>
      <ModalPage
        name={subjectInfo?.name as string}
        src={subjectInfo?.imageSource as string}
        alt={`${subjectInfo?.name}의 프로필 이미지`}
        subjectId={subjectId as string}
      />
    </>
  );
};

export default PostPage;
