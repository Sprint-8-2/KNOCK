import { useCallback, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import useResize from '../useResize';
import { SubjectDetailResponse } from '../../../core/types/api/Response';

interface SubjectListFuncParams {
  order: 'name' | 'time';
}
const BASE_URL = process.env.REACT_APP_BASE_URL;

const useSubjectList = ({ order }: SubjectListFuncParams) => {
  const { pageSize } = useResize();
  const [subjects, setSubjects] = useState<SubjectDetailResponse[]>([]);
  const [maxIndex, setMaxIndex] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [isLoad, setIsLoad] = useState<boolean>(false);

  const { data, isLoading } = useQuery({
    queryKey: ['subjectList', currentIndex, order, pageSize],
    queryFn: async () => {
      const query = () => {
        setIsLoad(true);
        const queryArray = [];
        if (pageSize) {
          queryArray.push(`limit=${pageSize}`);
          queryArray.push(`offset=${pageSize * (currentIndex - 1)}`);
        }

        if (order) {
          queryArray.push(`sort=${order}`);
        }
        return queryArray.join('&');
      };

      const path = `subjects/?${query()}`;

      return await fetch(`${BASE_URL}${path}/`).then((res) => res.json());
    },
  });
  const handleCurrentIndex = (newValue: number) => {
    setCurrentIndex(newValue);
  };

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setIsLoad(false);
      }, 1000);
      const { count, results } = data;
      setSubjects(results);
      setMaxIndex(Math.ceil(count / pageSize));
    }
  }, [data, isLoading]);

  useEffect(() => {
    handleCurrentIndex(1);
  }, [order]);

  return {
    isLoading: isLoad,
    currentIndex,
    maxIndex,
    subjects,
    handleCurrentIndex,
  };
};

export default useSubjectList;
