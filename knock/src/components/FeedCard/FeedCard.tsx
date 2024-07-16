import { QuestionDetailResponse } from '../../core/types/api/Response';
import Badge from '../../core/ui/Badge/Badge';
import Dropdown from '../../core/ui/Dropdown/Dropdown';
import Question from '../Question/Question';
import Reaction from '../../core/ui/Reaction/Reaction';
import styles from './FeedCard.module.scss';

interface FeedCardProps extends QuestionDetailResponse {
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
  handleUpdateAnswer,
  handleRejectAnswer,
  content,
  like,
  dislike,
  handleClickLike,
  handleClickDislike,
  createdAt,
  answer,
}: FeedCardProps) => {
  const dropdownElementList = ['수정하기', '거절하기'];

  const handleDropdown = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    console.log(target.textContent);
    if (target.textContent === dropdownElementList[0]) {
      const content = '';
      handleUpdateAnswer(answer?.id, content);
    } else if (target.textContent === dropdownElementList[1]) {
      handleRejectAnswer(answer?.id, true);
    }
  };

  const onClickLike = () => handleClickLike(id);
  const onClickDisike = () => handleClickDislike(id);

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
        <div>{/* 답변 */}</div>
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
