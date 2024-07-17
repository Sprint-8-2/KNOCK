import { useState, useEffect } from 'react';
import { QuestionAnswerResponse } from '../../../core/types/api/Response';
import { QuestionAnswerProps } from '../../../core/types/api/Request';
import { createQuestionAnswer } from '../../api/Questions';

interface useAddAnswerProps extends QuestionAnswerProps {}

const useAddAnswer = ({ ...props }: useAddAnswerProps) => {
  const [data, setData] = useState<QuestionAnswerResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const fetchData = async () => {
    setIsLoading(true);
    await createQuestionAnswer({
      questionId: props.questionId,
      content: props.content,
      isRejected: props.isRejected,
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

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useAddAnswer;
