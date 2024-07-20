import { useEffect, useState } from 'react';

import { SubjectDetailResponse } from '../../core/types/api/Response';
import { SubjectListParams } from '../../core/types/api/Request';
import { getSubjectList } from '../../lib/api/Subject';
import useResize from '../../lib/hooks/useResize';

import Pagination from '../../core/ui/Pagenation/Pagination';
import QuestionCardList from './QuestionCardList';

import styles from './QuestionListPagination.module.scss';

interface QuestionListPaginationProps {
  order: 'name' | 'time';
}

const QuestionListPagination = ({ order }: QuestionListPaginationProps) => {
  const { pageSize } = useResize();
  const [questions, setQuestions] = useState<SubjectDetailResponse[]>([]);
  const [maxIndex, setMaxIndex] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const handlecurrentIndex = (newValue: number) => {
    setCurrentIndex(newValue);
  };

  useEffect(() => {
    setCurrentIndex(1);
  }, [order]);

  const handleQuestions = async ({
    limit,
    offset,
    sort,
  }: SubjectListParams) => {
    const { count, results } = await getSubjectList({ limit, offset, sort });
    setQuestions(results);
    setMaxIndex(Math.ceil(count / pageSize));
  };
  useEffect(() => {
    const offset = pageSize * (currentIndex - 1);
    handleQuestions({ limit: pageSize, offset, sort: order });
  }, [order, currentIndex, pageSize]);

  return (
    <section className={styles['question-list-main__pagination']}>
      <QuestionCardList questions={questions} />
      <Pagination
        currentPage={currentIndex}
        itemCount={maxIndex}
        handleCurrentPage={handlecurrentIndex}
      />
    </section>
  );
};

export default QuestionListPagination;
