import { useEffect, useState } from 'react';

import useResize from '../useResize';
import useSubjectListQuery from './useSubjectListQuery';
import { SubjectDetailResponse } from '../../../core/types/api/Response';

interface SubjectListFuncParams {
  order: 'name' | 'time';
}

const DEFAULT_SUBJECT = {
  name: '',
  imageSource: '',
  questionCount: 0,
  createdAt: '',
};

const getDefaultArray = (length: number) =>
  Array(length)
    .fill(0)
    .map((e, i) => ({
      id: e + i,
      ...DEFAULT_SUBJECT,
    }));

const useSubjectList = ({ order }: SubjectListFuncParams) => {
  const { pageSize } = useResize();
  const [subjects, setSubjects] = useState<SubjectDetailResponse[]>(
    getDefaultArray(pageSize),
  );

  const [itemCount, setItemCount] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  const { data, isError, isSuccess, isLoading } = useSubjectListQuery({
    order,
    currentIndex,
    pageSize,
  });

  const handleCurrentIndex = (newValue: number) => {
    setCurrentIndex(newValue);
  };

  useEffect(() => {
    if (isLoading) {
      setSubjects(getDefaultArray(pageSize));
    } else if (isSuccess) {
      const { count, results } = data;
      setItemCount(count);
      setSubjects(results);
      setCurrentIndex((prev) => {
        return prev > Math.ceil(count / pageSize)
          ? Math.ceil(count / pageSize)
          : prev;
      });
    } else if (isError) {
    }
  }, [data, isError, isSuccess]);

  useEffect(() => {
    handleCurrentIndex(1);
  }, [order]);

  return {
    isLoading,
    currentIndex,
    itemCount,
    subjects,
    handleCurrentIndex,
  };
};

export default useSubjectList;
