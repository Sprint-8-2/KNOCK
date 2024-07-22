import { useEffect, useState } from 'react';
import { SubjectQuestionListResponse } from '../../../core/types/api/Response';
import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroller';
import FeedCard from '../FeedCard/FeedCard';
import Icon from '../../../core/ui/CommonIcon/icon';
import IconMessage from '../../../core/assets/icon/MessagesBrown.svg';
import EmptyFeedListImage from '../EmptyFeedListImage/EmptyFeedList';
import styles from './FeedList.module.scss';

interface FeedListProps {
  subjectId: number;
  subjectName: string;
  subjectProfileImgSrc: string;
  mode?: 'post' | 'answer';
}

const FeedList = ({
  subjectId,
  subjectName,
  subjectProfileImgSrc,
  mode = 'answer',
}: FeedListProps) => {
  const FEED_LIMIT_SIZE: number = 4;
  const [qestionCount, setQuestionCount] = useState<number>(0);
  const isEmptyQuestion = qestionCount === 0;
  const headerMessage = isEmptyQuestion
    ? '아직 질문이 없습니다'
    : `${qestionCount} 개의 질문이 있습니다`;
  function getOffsetFromUrl(url: string | null): string | null {
    if (!url) return null;
    const urlObj = new URL(url);
    return urlObj.searchParams.get('offset');
  }
  const {
    data: questions,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetched,
  } = useInfiniteQuery<SubjectQuestionListResponse>({
    queryKey: ['questions', subjectId],
    queryFn: async ({ pageParam: offset }) => {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}subjects/${subjectId}/questions/?limit=${FEED_LIMIT_SIZE}&offset=${offset}`,
      );
      return response.json();
    },
    initialPageParam: 0,
    getNextPageParam: (lastFeeds, feeds) => {
      if (lastFeeds.next) return getOffsetFromUrl(lastFeeds.next);
      return null;
    },
    staleTime: 1000 * 60 * 1,
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
  }, [isFetched, questions]);

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
            <Icon className="" src={IconMessage} alt="메시지" />
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
