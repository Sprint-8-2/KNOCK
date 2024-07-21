import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteQuestion } from '../lib/api/Questions';
import MetaTags from '../core/ui/MetaTags/MetaTags';
import Image from '../core/ui/CommonImage/Image';
import ImageBanner from '../core/assets/image/feedHeaderImage.png';
import UButton from '../core/ui/buttons/UButton/UButton';
import Profile from '../components/Profile/Profile';
import imgLogo from '../core/assets/image/SubPageLogo.svg';
import useQuestionList from '../lib/hooks/feed/useQuestionList';
import Toast from '../core/ui/Toast/Toast';
import InfiniteFeedList from '../components/feed/FeedList/InfiniteFeedList';
import useLoscalStorageUserInfo from '../lib/hooks/useLoscalStorageUserInfo';
import styles from '../core/styles/answerPage.module.scss';

interface UserInfo {
  id: number;
  name: string;
  imageSource: string;
}

function AnswerPage() {
  const { id } = useParams(); // subjectId
  const navigate = useNavigate();
  const [subjectId] = useState<number>(Number(id?.trim()));
  const { users } = useLoscalStorageUserInfo();
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [renderTrigger, setRenderTrigger] = useState<number>(0);
  const [onToast, setOnToast] = useState(false);
  const { data: questions } = useQuestionList({
    subjectId: Number(id) || '',
    deps: [renderTrigger],
  });

  const getLocalUserInfo = () => {
    if (users && users[subjectId]) {
      setUserInfo({
        id: subjectId,
        name: users[subjectId].name,
        imageSource: users[subjectId].imageSource,
      });
    } else {
      navigate('/notfound');
    }
  };

  const handleCopySuccess = () => {
    setOnToast(true);
    setTimeout(() => {
      setOnToast(false);
    }, 5000);
  };
  const handleError = () => {
    setOnToast(false);
  };

  const handleDeleteAll = () => {
    questions?.results.map((question) => {
      deleteQuestion({ questionId: question.id }).then(() => {
        setRenderTrigger(renderTrigger - 1);
      });
    });
  };

  const handleClickLogo = () => {
    navigate(`/`);
  };

  useEffect(() => {
    getLocalUserInfo();
    setRenderTrigger(questions?.count || 0);
  }, []);

  return (
    <>
      <MetaTags />
      {onToast && (
        <div className={styles['page__toast']}>
          <Toast toastMessage="URL이 복사되었습니다." />
        </div>
      )}
      <div className={styles['page']}>
        <div className={styles['page__container']}>
          <Image
            containerClassName={styles['page__banner']}
            src={ImageBanner}
            alt="배너"
          />
          <div className={styles['page__logo']} onClick={handleClickLogo}>
            <Image src={imgLogo} alt="로고" />
          </div>
          <Profile
            copySuccess={handleCopySuccess}
            copyError={handleError}
            name={userInfo?.name || ''}
            profileImage={userInfo?.imageSource || ''}
          />
          <div className={styles['page__feed-list']}>
            <div className={styles['page__list-header']}>
              <UButton
                type="floating"
                isSmallButton={true}
                handleClick={handleDeleteAll}
              >
                삭제하기
              </UButton>
            </div>
            <InfiniteFeedList
              key={renderTrigger}
              subjectId={userInfo?.id || 0}
              subjectName={userInfo?.name || ''}
              subjectProfileImgSrc={userInfo?.imageSource || ''}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AnswerPage;
