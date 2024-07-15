import { useEffect, useState } from 'react';
import Pagination from '../../core/ui/Pagenation/Pagination';
import QuestionCardList from './QuestionCardList';

import styles from './QuestionListPagination.module.scss';

interface QuestionListPaginationProps {
  order: string;
}

const QuestionListPagination = ({ order }: QuestionListPaginationProps) => {
  const [pageIndexes, setPageIndexes] = useState<number[]>([1, 2]);
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [maxIndex, setMaxIndex] = useState<number>(1);
  const [indexLimit, setIndexLimit] = useState<number>(8);

  const handlecurrentIndex = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setCurrentIndex(Number((e.target as HTMLElement).innerText));
  };

  const handlePrevIndexes = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setCurrentIndex(1);
  };
  const handleNextIndexes = () => {};

  // useEffect(() => {
  //   if (indexLimit >= maxIndex) {
  //   } else if (indexLimit < maxIndex) {
  //   }
  //   return () => {};
  // }, [maxIndex, indexLimit]);
  return (
    <section className={styles['question-list-main__pagination']}>
      <QuestionCardList
        order={order}
        indexLimit={indexLimit}
        currentPage={currentIndex}
        setIndexLimit={setIndexLimit}
        setCurrentPage={setCurrentIndex}
        setMaxIndex={setMaxIndex}
      />
      <Pagination
        handleCurrentPage={handlecurrentIndex}
        currentPage={currentIndex}
        handlePrevIndexes={handlePrevIndexes}
        handleNextIndexes={handleNextIndexes}
        pageIndexes={pageIndexes}
      />
    </section>
  );
};

export default QuestionListPagination;
