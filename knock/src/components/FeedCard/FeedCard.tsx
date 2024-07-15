import Badge from '../../core/ui/Badge/Badge';
import Dropdown from '../../core/ui/Dropdown/Dropdown';
import Question from '../Question/Question';
import Reaction from '../../core/ui/Reaction/Reaction';
import styles from './FeedCard.module.scss';

interface FeedCardProps {
  questionId: number;
  subjectId: number;
  isRejected: boolean;
  handleUpdateAnswer: (answerId: number, content: string) => void;
  handleRejectAnswer: (answerId: number, isRejected: boolean) => void;
  questionContent: string;
  likeCount: number;
  dislikeCount: number;
  handleClickLike: (questionId: number) => void;
  handleClickDislike: (questionId: number) => void;
  createdAt: string;
  answerId: number;
  answerContent?: string;
}

const FeedCard = ({
  questionId,
  subjectId,
  isRejected = false,
  handleUpdateAnswer,
  handleRejectAnswer,
  questionContent,
  likeCount = 0,
  dislikeCount = 0,
  handleClickLike,
  handleClickDislike,
  answerId,
  createdAt,
  answerContent,
}: FeedCardProps) => {
  const dropdownElementList = ['수정하기', '거절하기'];

  const handleDropdown = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    console.log(target.textContent);
    if (target.textContent === dropdownElementList[0]) {
      const content = '';
      handleUpdateAnswer(answerId, content);
    } else if (target.textContent === dropdownElementList[1]) {
      handleRejectAnswer(answerId, true);
    }
  };

  const onClickLike = () => handleClickLike(questionId);
  const onClickDisike = () => handleClickDislike(questionId);

  return (
    <>
      <div className={styles['feedcard']} key={questionId}>
        <div className={styles['feedcard__header']}>
          <Badge isAnswered={!isRejected} />
          <Dropdown
            ButtonclassName={styles['feedcard__btn-dropdown']}
            dropdownElementList={dropdownElementList}
            handleSelectElement={handleDropdown}
          >
            ...
          </Dropdown>
        </div>
        <div>
          <Question content={questionContent} createAt={createdAt} />
        </div>
        <div>{/* 답변 */}</div>
        <div className={styles['feedcard__line']} />
        <div>
          <Reaction
            likeCount={likeCount}
            handleClickLike={onClickLike}
            handleClickDislike={onClickDisike}
          />
        </div>
      </div>
    </>
  );
};

export default FeedCard;
