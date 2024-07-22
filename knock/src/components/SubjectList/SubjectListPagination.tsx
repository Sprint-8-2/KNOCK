import Pagination from '../../core/ui/Pagenation/Pagination';
import SubjectCardList from './SubjectCardList';
import useSubjectList from '../../lib/hooks/subjectList/useSubjectList';

import styles from './SubjectListPagination.module.scss';

interface SubjectListPaginationProps {
  order: 'name' | 'time';
}

const SubjectListPagination = ({ order }: SubjectListPaginationProps) => {
  const {
    isLoading,
    itemCount: maxIndex,
    currentIndex,
    subjects,
    handleCurrentIndex,
  } = useSubjectList({ order });

  return (
    <section className={styles['subject-list-main__pagination']}>
      <SubjectCardList subjects={subjects} isLoading={isLoading} />
      <Pagination
        isLoading={isLoading}
        currentPage={currentIndex}
        itemCount={maxIndex}
        handleCurrentPage={handleCurrentIndex}
      />
    </section>
  );
};

export default SubjectListPagination;
