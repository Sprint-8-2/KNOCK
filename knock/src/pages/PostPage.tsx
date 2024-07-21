import Image from '../core/ui/CommonImage/Image';
import styles from './PostPage.module.scss';
import postPageBannerImage from '../core/assets/image/Banner.svg';
import mainLogo from '../core/assets/image/MainPgaeLogo.svg';
import FeedList from '../components/feed/FeedList/FeedList';
import { Link, useParams } from 'react-router-dom';
import Profile from '../components/Profile/Profile';
import CreateQuestionPage from './CreateQuestionPage';
import useGetUserInfo from '../lib/hooks/feed/useGetUserInfo';
import useQuestionList from '../lib/hooks/feed/useQuestionList';
import MetaTags from '../core/ui/MetaTags/MetaTags';
import Toast from '../core/ui/Toast/Toast';
import { useState } from 'react';

const PostPage = () => {
  const { id: subjectId } = useParams();
  const { data: subjectInfo } = useGetUserInfo({
    subjectId: subjectId as string | number,
  });

  const { data: subjectQuestionList } = useQuestionList({
    subjectId: subjectId || '',
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
          {subjectQuestionList && (
            <FeedList
              mode="post"
              subejctId={Number(subjectId)}
              count={subjectQuestionList.count}
              next={subjectQuestionList.next}
              previous={subjectQuestionList.previous}
              results={subjectQuestionList.results}
            />
          )}
        </div>
      </div>
      <CreateQuestionPage
        name={subjectInfo?.name as string}
        src={subjectInfo?.imageSource as string}
        alt={`${subjectInfo?.name}의 프로필 이미지`}
        subjectId={subjectId as string}
      />
    </>
  );
};

export default PostPage;
