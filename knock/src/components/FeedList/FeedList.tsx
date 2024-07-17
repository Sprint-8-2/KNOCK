import { SubjectQuestionListResponse } from '../../core/types/api/Response';
import FeedCard from '../FeedCard/FeedCard';
import Image from '../../core/ui/CommonImage/Image';
import Icon from '../../core/ui/CommonIcon/icon';
import ImageEmptyQuestion from '../../core/assets/image/EmptyQuestion.svg';
import IconMessage from '../../core/assets/icon/MessagesBrown.svg';
import styles from './FeedList.module.scss';
import { QuestionAnswerProps } from '../../core/types/api/Request';
import useGetUserInfo from '../../lib/hooks/feed/useGetUserInfo';

interface FeedListProps extends SubjectQuestionListResponse {
  subejctId: number;
}

const FeedList = ({
  count,
  next,
  previous,
  results,
  subejctId,
}: FeedListProps) => {
  const isEmptyQuestion = count === 0;
  const headerMessage = isEmptyQuestion
    ? '아직 질문이 없습니다'
    : `${count} 개의 질문이 있습니다`;

  const { data, isLoading, error } = useGetUserInfo({ subjectId: subejctId });

  return (
    <>
      <div className={styles['feedlist']}>
        <div className={styles['feedlist__header']}>
          <Icon className="" src={IconMessage} alt="메시지" />
          {headerMessage}
        </div>
        {!isEmptyQuestion &&
          results.map((q) => {
            return (
              <FeedCard
                key={`feed_${q.id}`}
                id={q.id}
                subjectId={q.subjectId}
                like={q.like}
                dislike={q.dislike}
                createdAt={q.createdAt}
                content={q.content}
                answer={q.answer}
                name={data?.name || '이름'}
                imageSource={data?.imageSource || ''}
              />
            );
          })}
        {isEmptyQuestion && (
          <>
            <Image
              containerClassName={styles['feedlist__empty-image']}
              src={ImageEmptyQuestion}
              alt="빈 질문"
            />
          </>
        )}
      </div>
    </>
  );
};

export default FeedList;
