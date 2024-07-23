import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { deleteQuestion } from '../lib/api/Questions';
import MetaTags from '../core/ui/MetaTags/MetaTags';
import Image from '../core/ui/CommonImage/Image';
import ImageBanner from '../core/assets/image/Banner.svg';
import UButton from '../core/ui/buttons/UButton/UButton';
import Profile from '../components/Profile/Profile';
import imgLogo from '../core/assets/image/SubPageLogo.svg';
import useQuestionList from '../lib/hooks/feed/useQuestionList';
import Toast from '../core/ui/Toast/Toast';
import FeedList from '../components/feed/FeedList/FeedList';
import useLoscalStorageUserInfo from '../lib/hooks/useLoscalStorageUserInfo';
import { getSubjectQuestionList } from '../lib/api/Subject';
import styles from '../core/styles/answerPage.module.scss';
import ConfirmModal from '../components/feed/ConfirmModal/ConfirmModal';

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
  const [isOpenDelModal, setIsOpenDelModal] = useState<boolean>(false);
  const { data: questions } = useQuestionList({
    subjectId: Number(id) || '',
  });
  const DELETE_ALL_CONFIRM_MESSAGE = '정말 모든 질문을 삭제하시겠습니까?';

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

  const deleteAllQuestions = async () => {
    const response = await getSubjectQuestionList({
      subjectId: subjectId,
      limit: questions?.count,
    });
    response.results.map((question) => {
      deleteQuestion({ questionId: question.id }).then(() => {
        setRenderTrigger(renderTrigger - 1);
      });
    });
  };

  const handleDeleteAll = () => {
    setIsOpenDelModal(true);
  };
  const handleCancelDeleteAll = () => {
    setIsOpenDelModal(false);
  };
  const handleConfirmDeleteAll = () => {
    deleteAllQuestions();
    setIsOpenDelModal(false);
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
          <Link to={`/`} className={styles['page__logo']}>
            <Image src={imgLogo} alt="로고" />
          </Link>
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
            <FeedList
              key={renderTrigger}
              subjectId={subjectId}
              subjectName={userInfo?.name || ''}
              subjectProfileImgSrc={userInfo?.imageSource || ''}
              renderTrigger={renderTrigger}
            />
          </div>
        </div>
      </div>
      <ConfirmModal
        isOpen={isOpenDelModal}
        onConfirm={handleConfirmDeleteAll}
        onCancel={handleCancelDeleteAll}
        message={DELETE_ALL_CONFIRM_MESSAGE}
      />
    </>
  );
}

export default AnswerPage;
