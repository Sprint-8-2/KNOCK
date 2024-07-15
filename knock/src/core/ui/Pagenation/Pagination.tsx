import PaginationButton from './PaginationButton';

import styles from '../../styles/pagination.module.scss';

interface PaginationProps {
  pageIndexes: number[];
  currentPage: number;
  handleNextIndexes: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  handlePrevIndexes: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  handleCurrentPage: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const Pagination = ({
  pageIndexes,
  currentPage,
  handleNextIndexes,
  handlePrevIndexes,
  handleCurrentPage,
}: PaginationProps) => {
  const handleListClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    switch (target.innerText) {
      case '<':
        handlePrevIndexes(e);
        break;
      case '>':
        handleNextIndexes(e);
        break;
      default:
        handleCurrentPage(e);
        break;
    }
  };
  return (
    <ul className={styles['pagination']} onClick={handleListClick}>
      <li className={styles['pagination__list']}>
        <PaginationButton>{`<`}</PaginationButton>
      </li>
      {pageIndexes.map((e) => {
        return (
          <li key={e}>
            <PaginationButton isSelected={currentPage === e}>
              {e}
            </PaginationButton>
          </li>
        );
      })}

      <li className={styles['pagination__list']}>
        <PaginationButton>{`>`}</PaginationButton>
      </li>
    </ul>
  );
};

export default Pagination;
