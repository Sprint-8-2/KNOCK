import { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import useResize from '../useResize';
import { SubjectDetailResponse } from '../../../core/types/api/Response';
import { SubjectGetDetailParams } from '../../../core/types/api/Request';

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
  const [subjects8, setSubjects8] = useState<SubjectDetailResponse[]>(
    Array(8)
      .fill(0)
      .map((e, i) => ({
        id: e + i,
        ...DEFAULT_SUBJECT,
      })),
  );
  const [subjects6, setSubjects6] = useState<SubjectDetailResponse[]>(
    Array(6)
      .fill(0)
      .map((e, i) => ({
        id: e + i,
        ...DEFAULT_SUBJECT,
      })),
  );

  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [itemCount, setItemCount] = useState<number>(0);

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

  const { data, isError, isSuccess } = useQuery({
    queryKey: ['subjectList', currentIndex, order],
    queryFn: () => handleQueryRequest(pageSize),
    refetchOnWindowFocus: false,
  });

  const queryClient = useQueryClient();

  const handleCurrentIndex = (newValue: number) => {
    setCurrentIndex(newValue);
  };

  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: ['subjectListPre', order, currentIndex],
      queryFn: () =>
        handleQueryRequest(pageSize === 6 ? 8 : 6).then((res) => {
          if (pageSize === 6) {
            setSubjects8(res.results);
          } else if (pageSize === 8) {
            setSubjects6(res.results);
          }
          return res;
        }),
    });
  }, [order, currentIndex]);

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        setIsLoad(false);
      }, 1000);

      const { count, results } = data;
      setItemCount(count);
      if (pageSize === 8) {
        setSubjects8(results);
      } else if (pageSize === 6) {
        setSubjects6(results);
      }
    } else if (isError) {
      console.log('api error');
    }
  }, [data, isError, isSuccess]);

  useEffect(() => {
    handleCurrentIndex(1);
  }, [order]);

  return {
    isLoading: isLoad,
    currentIndex,
    itemCount,
    subjects: pageSize === 6 ? subjects6 : subjects8,
    handleCurrentIndex,
  };
};

export default useSubjectList;
