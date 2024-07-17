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
import { QuestionAnswerProps } from '../../core/types/api/Request';

interface FeedCardProps
  extends QuestionDetailResponse,
    Omit<Omit<SubjectDetailResponse, 'id'>, 'questionCount'> {
  handleAddAnswer: ({}: QuestionAnswerProps) => void;
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
  handleAddAnswer,
  handleUpdateAnswer,
  handleRejectAnswer,
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
  const dropdownElementList = ['수정하기', '거절하기'];

  const handleDropdown = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    console.log(target.textContent);
    if (target.textContent === dropdownElementList[0]) {
      setIsModification(true);
    } else if (target.textContent === dropdownElementList[1]) {
      handleRejectAnswer(answer?.id, true);
    }
  };

  const onClickLike = () => handleClickLike(id);
  const onClickDisike = () => handleClickDislike(id);
  const handleSubmitAnswer = (
    questionId: number | undefined,
    content: string,
  ) =>
    handleAddAnswer({
      questionId: id,
      content: content,
      isRejected: false,
    });

  useEffect(() => {
    if (answer?.content) {
      setAnswerState('answered');
    } else if (answer?.isRejected) {
      setAnswerState('rejected');
    }
  }, []);

  return (
    <>
      <div className={styles['feedcard']} key={id}>
        <div className={styles['feedcard__header']}>
          <Badge isAnswered={!answer?.isRejected} />
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
          answerId={answer?.id || undefined}
          answerState={answerState}
          content={answer?.content || ''}
          createAt={answer?.createdAt || ''}
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
            likeCount={like}
            handleClickLike={onClickLike}
            handleClickDislike={onClickDisike}
          />
        </div>
      </div>
    </>
  );
};

export default FeedCard;
