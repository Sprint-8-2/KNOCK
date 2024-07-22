import { useInfiniteQuery } from '@tanstack/react-query';
import { SubjectQuestionListResponse } from '../../../core/types/api/Response';
import { SubjectQuestionListParams } from '../../../core/types/api/Request';

function getOffsetFromUrl(url: string | null): string | null {
  if (!url) return null;
  const urlObj = new URL(url);
  return urlObj.searchParams.get('offset');
}

interface useInfiniteQuestionListProps extends SubjectQuestionListParams {
  requestTrigger?: number;
}

const useInfiniteQuestionList = ({
  requestTrigger,
  ...props
}: useInfiniteQuestionListProps) => {
  return useInfiniteQuery<SubjectQuestionListResponse>({
    queryKey: ['questions', props.subjectId, requestTrigger || 0],
    queryFn: async ({ pageParam: offset }) => {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}subjects/${props.subjectId}/questions/?limit=${props.limit}&offset=${offset}`,
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
};

export default useInfiniteQuestionList;
