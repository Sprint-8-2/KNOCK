import { useState, useEffect } from 'react';
import { getSubjectQuestionList } from '../../api/Subject';
import { SubjectQuestionListResponse } from '../../../core/types/api/Response';
import { SubjectQuestionListParams } from '../../../core/types/api/Request';

interface useQuestionListProps extends SubjectQuestionListParams {}

const useQuestionList = ({
  ...subjectQuestionListParams
}: useQuestionListProps) => {
  const [data, setData] = useState<SubjectQuestionListResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const fetchData = async () => {
    setIsLoading(true);
    await getSubjectQuestionList({
      subjectId: subjectQuestionListParams.subjectId,
      limit: subjectQuestionListParams.limit,
      offset: subjectQuestionListParams.offset,
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

export default useQuestionList;
