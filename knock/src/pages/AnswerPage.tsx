import { useState } from 'react';
import { useParams } from 'react-router-dom';
import FeedList from '../components/FeedList/FeedList';
import MetaTags from '../core/ui/MetaTags/MetaTags';
import Image from '../core/ui/CommonImage/Image';
import ImageBanner from '../core/assets/image/feedHeaderImage.png';
import UButton from '../core/ui/buttons/UButton/UButton';
import Profile from '../components/Profile/Profile';
import imgLogo from '../core/assets/image/SubPageLogo.svg';
import useQuestionList from '../lib/hooks/feed/useQuestionList';
import { createQuestionAnswer, deleteQuestion } from '../lib/api/Questions';
import { QuestionAnswerProps } from '../core/types/api/Request';
import styles from '../core/styles/answerPage.module.scss';

function AnswerPage() {
  const { id } = useParams(); // subjectId
  const [subjectId, setSubjectId] = useState<number>(Number(id?.trim()));

  const {
    data: questions,
    isLoading: questionsLoading,
    error: questionsError,
  } = useQuestionList({
    subjectId: Number(id) || '',
    limit: 3,
    offset: 0,
    options: {},
  });

  const handleAddAnswer = ({
    questionId,
    content,
    isRejected,
  }: QuestionAnswerProps) => {
    createQuestionAnswer({
      questionId: questionId,
      content: content,
      isRejected: isRejected,
    });
  };

  const hadleDeleteAll = () => {
    questions?.results.map((question) => {
      deleteQuestion({ questionId: question.id }).then((res) => {
        setSubjectId(subjectId);
      });
    });
  };

  return (
    <>
      <MetaTags />
      <div className={styles['page']}>
        <div className={styles['page__container']}>
          <Image
            containerClassName={styles['page__banner']}
            src={ImageBanner}
            alt="배너"
          />
          <div>
            <Image
              containerClassName={styles['page__logo']}
              src={imgLogo}
              alt="로고"
            />
          </div>
          <Profile name="dd" profileImage="" />
          <div className={styles['page__feed-list']}>
            <div className={styles['page__list-header']}>
              <UButton
                type="floating"
                isSmallButton={true}
                handleClick={hadleDeleteAll}
              >
                삭제하기
              </UButton>
            </div>
            <FeedList
              count={questions?.count || 0}
              next={questions?.next || null}
              previous={questions?.next || null}
              results={questions?.results || []}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AnswerPage;
