import { useCallback, useEffect, useState } from 'react';
import Pagination from '../../core/ui/Pagenation/Pagination';
import QuestionCardList from './QuestionCardList';

import styles from './QuestionListPagination.module.scss';
import { SubjectDetailResponse } from '../../core/types/api/Response';
import { SubjectListParams } from '../../core/types/api/Request';
import { getSubjectList } from '../../lib/api/Subject';

interface QuestionListPaginationProps {
  order: string;
}

const QuestionListPagination = ({ order }: QuestionListPaginationProps) => {
  const [questions, setQuestions] = useState<SubjectDetailResponse[]>([]);
  const [pageIndexes, setPageIndexes] = useState<number[]>([1]);
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [pageQuestionCount, setPageQuestionCount] = useState<number>(8);
  const [questionAllCounts, setQuestionAllCounts] = useState<number>(40);

  const handlecurrentIndex = (newValue: number) => {
    setCurrentIndex(newValue);
  };

  useEffect(() => {
    setCurrentIndex(1);
  }, [order]);

  useEffect(() => {
    const maxIndex = Math.ceil(questionAllCounts / pageQuestionCount);
    setPageIndexes(
      Array(maxIndex)
        .fill(0)
        .map((_, i) => i + 1),
    );
  }, [questionAllCounts, pageQuestionCount]);

  const handleQuestions = useCallback(
    async ({ limit, offset, sort }: SubjectListParams) => {
      const { count, results } = await getSubjectList({ limit, offset, sort });
      setQuestions(results);
      setQuestionAllCounts(count);
    },
    [order, currentIndex],
  );

  useEffect(() => {
    const sort = order === '이름순' ? 'name' : 'time';
    handleQuestions({ limit: pageQuestionCount, offset: currentIndex, sort });
  }, [handleQuestions]);

  return (
    <section className={styles['question-list-main__pagination']}>
      <QuestionCardList questions={questions} />
      <Pagination
        currentPage={currentIndex}
        pageIndexes={pageIndexes}
        handleCurrentPage={handlecurrentIndex}
      />
    </section>
  );
};

export default QuestionListPagination;
