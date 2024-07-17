import { useState, useEffect } from 'react';
import { getSubjectQuestionList } from '../../api/Subject';
import { SubjectQuestionListResponse } from '../../../core/types/api/Response';
import { SubjectQuestionListParams } from '../../../core/types/api/Request';

interface useQuestionListProps extends SubjectQuestionListParams {
  handleSuccess?: (response: SubjectQuestionListResponse) => void;
  handleError?: (error: any) => void;
  deps: [];
}

const useQuestionList = ({
  handleSuccess,
  handleError,
  deps,
  ...subjectQuestionListParams
}: useQuestionListProps) => {
  const [data, setData] = useState<SubjectQuestionListResponse>();
  const [isLoading, setIsLoading] = useState(false);

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
        if (handleError) handleError(err);
      }
      if (isLoading) fetchData();
    };
  }, deps);

  return { data, isLoading };
};

export default useQuestionList;
