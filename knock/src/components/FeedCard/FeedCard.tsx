import {
  QuestionDetailResponse,
  SubjectDetailResponse,
} from '../../core/types/api/Response';
import Badge from '../../core/ui/Badge/Badge';
import Dropdown from '../../core/ui/Dropdown/Dropdown';
import Question from '../Question/Question';
import Reaction from '../../core/ui/Reaction/Reaction';
import Answer, { AnswerState } from '../Answer/Answer';
import { useEffect, useState } from 'react';
import styles from './FeedCard.module.scss';
import {
  createQuestionAnswer,
  getQuestionDetails,
} from '../../lib/api/Questions';
import { putAnswer } from '../../lib/api/Answers';

interface FeedCardProps
  extends QuestionDetailResponse,
    Omit<Omit<SubjectDetailResponse, 'id'>, 'questionCount'> {
  // handleAddAnswer: ({}: QuestionAnswerProps) => void;
  handleUpdateAnswer: (answerId: number | undefined, content: string) => void;
  handleRejectAnswer: (
    answerId: number | undefined,
    isRejected: boolean,
  ) => void;
  handleClickLike: (questionId: number) => void;
  handleClickDislike: (questionId: number) => void;
}

const FeedCard = ({
  id,
  subjectId,
  // handleAddAnswer,
  // handleUpdateAnswer,
  // handleRejectAnswer,
  content,
  like,
  dislike,
  handleClickLike,
  handleClickDislike,
  createdAt,
  answer,
  ...subjectDetail
}: FeedCardProps) => {
  const [answerState, setAnswerState] = useState<AnswerState>('empty');
  const [isModification, setIsModification] = useState(false);
  const [questionValue, setQuestionValue] = useState<QuestionDetailResponse>({
    id: id,
    subjectId: subjectId,
    like: like,
    dislike: dislike,
    content: content,
    createdAt: createdAt,
    answer: answer,
  });
  const dropdownElementList = ['수정하기', '거절하기'];

  const handleDropdown = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    console.log(target.textContent);
    if (target.textContent === dropdownElementList[0]) {
      setIsModification(true);
    } else if (target.textContent === dropdownElementList[1]) {
      handleRejectAnswer();
    }
  };
  const onClickLike = () => handleClickLike(id);
  const onClickDisike = () => handleClickDislike(id);
  const handleSubmitAnswer = (
    questionId: number | undefined,
    answerContent: string,
  ) =>
    createQuestionAnswer({
      questionId: id,
      content: answerContent,
      isRejected: false,
    }).then(() => {
      setAnswerState('answered');
      fetchQuestionDetails();
    });
  const fetchQuestionDetails = async () => {
    await getQuestionDetails({
      questionId: id,
    })
      .then((response) => {
        setQuestionValue(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleUpdateAnswer = (answerId: number | undefined, content: string) =>
    putAnswer({
      subjectId: questionValue.answer?.id || '',
      body: { content: content, isRejected: false },
    }).then(() => {
      setAnswerState('answered');
      setIsModification(false);
      fetchQuestionDetails();
    });
  const handleRejectAnswer = () => {
    if (questionValue.answer?.id) {
      putAnswer({
        subjectId: questionValue.answer?.id || '',
        body: {
          content: questionValue.answer?.content || 'rejected',
          isRejected: true,
        },
      }).then(() => {
        fetchQuestionDetails();
        setAnswerState('rejected');
      });
    } else {
      createQuestionAnswer({
        questionId: id,
        content: '-',
        isRejected: true,
      }).then(() => {
        setAnswerState('rejected');
        fetchQuestionDetails();
      });
    }
  };

  useEffect(() => {
    if (questionValue.answer?.content) {
      setAnswerState('answered');
    } else if (questionValue.answer?.isRejected) {
      setAnswerState('rejected');
    }
  }, []);

  return (
    <>
      <div className={styles['feedcard']} key={id}>
        <div className={styles['feedcard__header']}>
          <Badge isAnswered={!questionValue.answer?.isRejected} />
          <Dropdown
            ButtonclassName={styles['feedcard__btn-dropdown']}
            dropdownElementList={dropdownElementList}
            handleSelectElement={handleDropdown}
          >
            ...
          </Dropdown>
        </div>
        <div>
          <Question content={content} createAt={createdAt} />
        </div>
        <Answer
          answerId={questionValue.answer?.id || undefined}
          answerState={answerState}
          content={questionValue.answer?.content || ''}
          createAt={questionValue.answer?.createdAt || ''}
          imageSource={subjectDetail.imageSource}
          name={subjectDetail.name}
          questionId={id}
          isModification={isModification}
          answerSubmit={handleSubmitAnswer}
          answerModificationSubmit={handleUpdateAnswer}
        />
        <div className={styles['feedcard__line']} />
        <div>
          <Reaction
            likeCount={questionValue.like}
            handleClickLike={onClickLike}
            handleClickDislike={onClickDisike}
            isLiked={false}
            isDisliked={false}
          />
        </div>
      </div>
    </>
  );
};

export default FeedCard;
