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

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        await await getSubjectQuestionList({
          subjectId: subjectQuestionListParams.subjectId,
          limit: subjectQuestionListParams.limit,
          offset: subjectQuestionListParams.offset,
          options: {},
        })
          .then((response) => {
            setData(response);
          })
          .finally(() => {
            setIsLoading(false);
          });
      } catch (err: any) {
        setError(err);
      }
      if (isLoading) fetchData();
    };
  }, []);

  return { data, isLoading, error };
};

export default useQuestionList;
