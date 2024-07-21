import { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import useResize from '../useResize';
import { SubjectDetailResponse } from '../../../core/types/api/Response';

interface SubjectListFuncParams {
  order: 'name' | 'time';
}
const BASE_URL = process.env.REACT_APP_BASE_URL;

const DEFAULT_SUBJECT = {
  name: '',
  imageSource: '',
  questionCount: 0,
  createdAt: '',
};

const useSubjectList = ({ order }: SubjectListFuncParams) => {
  const { pageSize } = useResize();
  const [subjects, setSubjects] = useState<SubjectDetailResponse[]>([]);
  const [maxIndex, setMaxIndex] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [isLoad, setIsLoad] = useState<boolean>(false);

  const handleQueryRequest = async (page: number) => {
    const query = () => {
      setIsLoad(true);
      const queryArray = [];
      if (page) {
        queryArray.push(`limit=${page}`);
        queryArray.push(`offset=${page * (currentIndex - 1)}`);
      }

      if (order) {
        queryArray.push(`sort=${order}`);
      }
      return queryArray.join('&');
    };

    const path = `subjects/?${query()}/`;

    return await fetch(`${BASE_URL}${path}`).then((res) => res.json());
  };

  const { data, isError, isSuccess, isPending } = useQuery({
    queryKey: ['subjectList', currentIndex, order, pageSize],
    queryFn: () => handleQueryRequest(pageSize),
    refetchOnWindowFocus: false,
  });

  // const queryClient = useQueryClient();

  const handleCurrentIndex = (newValue: number) => {
    setCurrentIndex(newValue);
  };

  // useEffect(() => {
  //   if (pageSize === 6) {
  //     queryClient.prefetchQuery({
  //       queryKey: ['subjectListPre'],
  //       queryFn: () => handleQueryRequest(8),
  //     });
  //   } else if (pageSize === 8) {
  //     queryClient.prefetchQuery({
  //       queryKey: ['subjectListPre'],
  //       queryFn: () => handleQueryRequest(6),
  //     });
  //   }
  // }, []);

  useEffect(() => {
    if (isPending) {
      setSubjects(
        Array(pageSize)
          .fill(0)
          .map((e, i) => ({
            id: e + i,
            ...DEFAULT_SUBJECT,
          })),
      );
    } else {
      if (isSuccess) {
        if (subjects.length === 0) {
          setTimeout(() => {
            setIsLoad(false);
          }, 1000);
        } else {
          setIsLoad(false);
        }
        const { count, results } = data;
        setSubjects(results);
        setMaxIndex(Math.ceil(count / pageSize));
      } else if (isError) {
        console.log('api error');
      }
    }
  }, [data, isError, isSuccess, isPending]);

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
