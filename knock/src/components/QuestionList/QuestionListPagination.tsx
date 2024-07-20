import { useEffect, useState } from 'react';

import { SubjectDetailResponse } from '../../core/types/api/Response';
import { SubjectListParams } from '../../core/types/api/Request';
import { getSubjectList } from '../../lib/api/Subject';
import useResize from '../../lib/hooks/useResize';

import Pagination from '../../core/ui/Pagenation/Pagination';
import QuestionCardList from './QuestionCardList';

import styles from './QuestionListPagination.module.scss';
import useSubjectList from '../../lib/hooks/subjectList/useSubjectList';

interface QuestionListPaginationProps {
  order: 'name' | 'time';
}

const QuestionListPagination = ({ order }: QuestionListPaginationProps) => {
  const { maxIndex, currentIndex, questions, handleCurrentIndex } =
    useSubjectList({ order });

  return (
    <section className={styles['question-list-main__pagination']}>
      <QuestionCardList questions={questions} />
      <Pagination
        currentPage={currentIndex}
        itemCount={maxIndex}
        handleCurrentPage={handleCurrentIndex}
      />
    </section>
  );
};

export default QuestionListPagination;
