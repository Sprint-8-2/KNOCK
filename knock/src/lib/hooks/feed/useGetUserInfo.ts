import { useState, useEffect } from 'react';
import { SubjectDetailResponse } from '../../../core/types/api/Response';
import { SubjectGetDetailParams } from '../../../core/types/api/Request';
import { getQuestionDetails } from '../../api/Questions';
import useUpdateEffect from './useUpdateEffect';
import { getDetailSubject } from '../../api/Subject';

interface useGetUserInfoProps extends SubjectGetDetailParams {}

const useGetUserInfo = ({ ...props }: useGetUserInfoProps) => {
  const [data, setData] = useState<SubjectDetailResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const fetchData = async () => {
    setIsLoading(true);
    await getDetailSubject({
      subjectId: props.subjectId,
    })
      .then((response) => {
        if (!response.name) response.name = '유저';
        if (!response.imageSource)
          response.imageSource = '../../../core/assets/image/Profilephoto.svg';
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

export default useGetUserInfo;
