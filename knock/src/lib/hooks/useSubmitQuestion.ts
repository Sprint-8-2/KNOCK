import { useState } from 'react';
import { createSubjectQuestion } from '../api/Subject';

const DEFAULT_SUBJECT_QUESTION_ANSWER = {
  content: '',
  isRejected: false,
};

interface UseSubmitQuestionProps {
  subjectId: number | string;
  onSuccess: () => void;
  onError: () => void;
}

const useSubmitQuestion = ({
  subjectId,
  onSuccess,
  onError,
}: UseSubmitQuestionProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (content: string) => {
    setIsLoading(true);
    try {
      const response = await createSubjectQuestion({
        subjectId,
        content,
        answer: DEFAULT_SUBJECT_QUESTION_ANSWER,
        options: {},
      });
      onSuccess();
    } catch (error) {
      onError();
    } finally {
      setIsLoading(false);
    }
  };

  return { handleSubmit, isLoading };
};

export default useSubmitQuestion;
