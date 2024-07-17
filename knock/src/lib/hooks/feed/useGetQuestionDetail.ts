import { useState, useEffect } from 'react';
import { QuestionDetailResponse } from '../../../core/types/api/Response';
import { QuestionDetailsProps } from '../../../core/types/api/Request';
import { getQuestionDetails } from '../../api/Questions';
import useUpdateEffect from './useUpdateEffect';

interface useGetQuestionDetailProps extends QuestionDetailsProps {
  isForUpdate?: boolean;
}

const useGetQuestionDetail = ({
  isForUpdate,
  ...props
}: useGetQuestionDetailProps) => {
  const [data, setData] = useState<QuestionDetailResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const fetchData = async () => {
    setIsLoading(true);
    await getQuestionDetails({
      questionId: props.questionId,
    })
      .then((response) => {
        setData(response);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useUpdateEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useGetQuestionDetail;
