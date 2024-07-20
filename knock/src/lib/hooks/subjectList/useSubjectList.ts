import { useCallback, useEffect, useState } from 'react';

import useResize from '../useResize';
import { SubjectDetailResponse } from '../../../core/types/api/Response';
import { SubjectListParams } from '../../../core/types/api/Request';
import { getSubjectList } from '../../api/Subject';

interface SubjectListFuncParams {
  order: 'name' | 'time';
}

const useSubjectList = ({ order }: SubjectListFuncParams) => {
  const { pageSize } = useResize();
  const [subjects, setSubjects] = useState<SubjectDetailResponse[]>([]);
  const [maxIndex, setMaxIndex] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  const handleSubjects = useCallback(
    async ({ limit, offset, sort }: SubjectListParams) => {
      await getSubjectList({
        limit,
        offset,
        sort,
      })
        .then((response) => {
          const { count, results } = response;
          setSubjects(results);
          setMaxIndex(Math.ceil(count / pageSize));
        })
        .catch((error) => {});
    },
    [pageSize],
  );

  const handleCurrentIndex = (newValue: number) => {
    setCurrentIndex(newValue);
  };

  useEffect(() => {
    const offset = pageSize * (currentIndex - 1);
    handleSubjects({ limit: pageSize, offset, sort: order });
  }, [order, currentIndex, pageSize, handleSubjects]);

  useEffect(() => {
    handleCurrentIndex(1);
  }, [order]);

  return { currentIndex, maxIndex, subjects, handleCurrentIndex };
};

export default useSubjectList;
