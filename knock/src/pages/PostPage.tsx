import Image from '../core/ui/CommonImage/Image';
import styles from './PostPage.module.scss';
import postPageBannerImage from '../core/assets/image/feedHeaderImage.png';
import mainLogo from '../core/assets/image/MainPgaeLogo.svg';
import FeedList from '../components/FeedList/FeedList';
import { useEffect, useState } from 'react';
import { getDetailSubject, getSubjectQuestionList } from '../lib/api/Subject';
import {
  SubjectGetDetailParams,
  SubjectQuestionListParams,
} from '../core/types/api/Request';
import {
  SubjectDetailResponse,
  SubjectQuestionListResponse,
} from '../core/types/api/Response';
import { Link, useParams } from 'react-router-dom';
import Profile from '../components/Profile/Profile';
import ModalPage from './ModalPage';

const PostPage = () => {
  const { id: subjectId } = useParams();
  const [subjectInfo, setSubjectInfo] = useState<SubjectDetailResponse>();
  const [subjectQuestionList, setSubjectQuestionList] =
    useState<SubjectQuestionListResponse>();

  const fetchDetailSubject = async ({ subjectId }: SubjectGetDetailParams) => {
    try {
      const fetchData = await getDetailSubject({ subjectId });
      setSubjectInfo(fetchData);
    } catch (error) {}
  };

  const fetchSubjectQuestionList = async ({
    subjectId,
  }: SubjectQuestionListParams) => {
    try {
      const fetchData = await getSubjectQuestionList({ subjectId });
      setSubjectQuestionList(fetchData);
    } catch (error) {}
  };

  useEffect(() => {
    fetchDetailSubject({ subjectId: subjectId as string | number });
    fetchSubjectQuestionList({ subjectId: subjectId as string | number });
  }, []);

  return (
    <>
      <div className={styles['post-page']}>
        <Image
          src={postPageBannerImage}
          alt="postPageBannerImage"
          imageClassName={styles['post-page__banner']}
        />
        <div className={styles['post-page__profile']}>
          <Profile
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
              count={subjectQuestionList.count}
              next={subjectQuestionList.next}
              previous={subjectQuestionList.previous}
              results={subjectQuestionList.results}
            />
          )}
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
