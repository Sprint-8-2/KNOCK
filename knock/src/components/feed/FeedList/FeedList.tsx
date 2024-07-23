import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import FeedCard from '../FeedCard/FeedCard';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import EmptyFeedListImage from '../EmptyFeedListImage/EmptyFeedList';
import styles from './FeedList.module.scss';
import useInfiniteQuestionList from '../../../lib/hooks/feed/useInfiniteQuestionList';

interface FeedListProps {
  subjectId: number;
  subjectName: string;
  subjectProfileImgSrc: string;
  mode?: 'post' | 'answer';
  renderTrigger?: number;
}

const FeedList = ({
  subjectId,
  subjectName,
  subjectProfileImgSrc,
  mode = 'answer',
  renderTrigger,
}: FeedListProps) => {
  const FEED_LIMIT_SIZE: number = 4;
  const [qestionCount, setQuestionCount] = useState<number>(0);
  const isEmptyQuestion = qestionCount === 0;
  const headerMessage = isEmptyQuestion
    ? '아직 질문이 없습니다'
    : `${qestionCount} 개의 질문이 있습니다`;

  const {
    data: questions,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetched,
  } = useInfiniteQuestionList({
    subjectId: subjectId,
    limit: FEED_LIMIT_SIZE,
    requestTrigger: renderTrigger,
  });

  const fetchNextFeeds = () => {
    if (!isFetchingNextPage) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    if (isFetched && questions) {
      setQuestionCount(questions.pages[0].count);
    }
  }, [isFetched, questions, renderTrigger]);

  return (
    <>
      <InfiniteScroll
        hasMore={hasNextPage}
        loadMore={() => {
          fetchNextFeeds();
        }}
      >
        <div className={styles['feedlist']}>
          <div className={styles['feedlist__header']}>
            <BiMessageRoundedDetail />
            {headerMessage}
          </div>
          {!isEmptyQuestion &&
            questions?.pages.map(({ results }) =>
              results.map((q) => {
                return (
                  <FeedCard
                    mode={mode}
                    key={`feed_${q.id}`}
                    id={q.id}
                    subjectId={q.subjectId}
                    like={q.like}
                    dislike={q.dislike}
                    createdAt={q.createdAt}
                    content={q.content}
                    answer={q.answer}
                    name={subjectName || '이름'}
                    imageSource={subjectProfileImgSrc || ''}
                  />
                );
              }),
            )}
          {isEmptyQuestion && (
            <EmptyFeedListImage className={styles['feedlist__empty-image']} />
          )}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default FeedList;
