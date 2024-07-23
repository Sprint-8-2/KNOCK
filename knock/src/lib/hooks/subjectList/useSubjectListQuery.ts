import { useQuery } from '@tanstack/react-query';

const BASE_URL = process.env.REACT_APP_BASE_URL;

interface SubjectListQueryParams {
  currentIndex: number;
  pageSize: number;
  order: 'name' | 'time';
}

const useSubjectListQuery = ({
  currentIndex,
  order,
  pageSize,
}: SubjectListQueryParams) => {
  const handleQueryRequest = async (page: number) => {
    const query = () => {
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

    const path = `subjects/?${query()}`;

    return await fetch(`${BASE_URL}${path}`).then((res) => res.json());
  };

  return useQuery({
    queryKey: ['subjectList', currentIndex, order, pageSize],
    queryFn: () => handleQueryRequest(pageSize),
    refetchOnWindowFocus: false,
    gcTime: 1000 * 60 * 2,
    staleTime: 1000 * 5,
  });
};

export default useSubjectListQuery;
