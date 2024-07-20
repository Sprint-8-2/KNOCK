import { useEffect, useState } from 'react';

import { SubjectDetailResponse } from '../../../core/types/api/Response';
import { SubjectListParams } from '../../../core/types/api/Request';
import { getSubjectList } from '../../api/Subject';
import useResize from '../useResize';

interface SubjectListFuncParams {
  order: 'name' | 'time';
}

const useSubjectList = ({ order }: SubjectListFuncParams) => {
  const [questions, setQuestions] = useState<SubjectDetailResponse[]>([]);
  const [maxIndex, setMaxIndex] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const { pageSize } = useResize();

  const handleQuestions = async ({
    limit,
    offset,
    sort,
  }: SubjectListParams) => {
    const { count, results } = await getSubjectList({ limit, offset, sort });
    setQuestions(results);
    setMaxIndex(Math.ceil(count / pageSize));
  };

  const handleCurrentIndex = (newValue: number) => {
    setCurrentIndex(newValue);
  };

  useEffect(() => {
    const offset = pageSize * (currentIndex - 1);
    handleQuestions({ limit: pageSize, offset, sort: order });
  }, [order, currentIndex, pageSize]);

  useEffect(() => {
    handleCurrentIndex(1);
  }, [order]);

  return { currentIndex, maxIndex, questions, handleCurrentIndex };
};

export default useSubjectList;
