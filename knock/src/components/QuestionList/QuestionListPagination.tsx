import Pagination from '../../core/ui/Pagenation/Pagination';
import QuestionCardList from './QuestionCardList';

import styles from './QuestionListPagination.module.scss';

const QuestionListPagination = () => {
  return (
    <section className={styles['question-list-main__pagination']}>
      <QuestionCardList />
      <Pagination
        handleCurrentPage={() => {}}
        currentPage={1}
        handleNextIndexes={() => {}}
        handlePrevIndexes={() => {}}
        pageIndexes={[1, 2, 3, 4, 5]}
      />
    </section>
  );
};

export default QuestionListPagination;
