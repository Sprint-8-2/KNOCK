import { useState, useEffect } from 'react';
import { getSubjectQuestionList } from '../../api/Subject';

interface useQuestionListProps {
  subjectId: number;
  limit: number;
  offset: number;
}

const useQuestionList = ({
  subjectId,
  limit,
  offset,
}: useQuestionListProps) => {
  // const [data, setData] = useState<IResponse[]>();
  // const [isLoading, setIsLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string>('');
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       await axios(url)
  //         .then(res => {
  //           setData(res.data);
  //         })
  //         .finally(() => {
  //           setIsLoading(false);
  //         });
  //     } catch (err: any) {
  //       setError(err);
  //       alert(err);
  //     }
  //   };
  //   if (isLoading) {
  //     fetchData();
  //   }
  // }, [url]);
  // return { data, error, isLoading };
  // getSubjectQuestionList(subjectId, limit, offset, options);
};

export default useQuestionList;
