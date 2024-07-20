import Pagination from '../../core/ui/Pagenation/Pagination';
import SubjectCardList from './SubjectCardList';

import styles from './SubjectListPagination.module.scss';
import useSubjectList from '../../lib/hooks/subjectList/useSubjectList';

interface SubjectListPaginationProps {
  order: 'name' | 'time';
}

const SubjectListPagination = ({ order }: SubjectListPaginationProps) => {
  const { maxIndex, currentIndex, subjects, handleCurrentIndex } =
    useSubjectList({ order });

  return (
    <section className={styles['subject-list-main__pagination']}>
      <SubjectCardList subjects={subjects} />
      <Pagination
        currentPage={currentIndex}
        itemCount={maxIndex}
        handleCurrentPage={handleCurrentIndex}
      />
    </section>
  );
};

export default SubjectListPagination;
