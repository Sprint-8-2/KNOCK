import PaginationButton from './PaginationButton';

import styles from '../../styles/pagination.module.scss';
import { useState } from 'react';

interface PaginationProps {
  pageIndexes: number[];
  currentPage: number;
  handleCurrentPage: (newIndex: number) => void;
}

const Pagination = ({
  pageIndexes,
  currentPage,
  handleCurrentPage,
}: PaginationProps) => {
  const [currentPageIndexes, setCurrentPageIndexes] = useState<number[]>(() =>
    pageIndexes.slice(0, 5),
  );
  const [prevDisabled, setPrevDisabled] = useState<boolean>(true);
  const [nextDisabled, setNextDisabled] = useState<boolean>(() =>
    pageIndexes.length > 5 ? false : true,
  );

  const handleListClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    let newIndex = currentPage;
    switch (target.innerText) {
      case '<':
        newIndex = (Math.floor(currentPage / 5) - 1) * 5 + 1;
        setCurrentPageIndexes([
          ...pageIndexes.slice(newIndex - 1, newIndex + 4),
        ]);
        setNextDisabled(false);
        setPrevDisabled(newIndex <= 5 ? true : false);
        break;
      case '>':
        newIndex = Math.ceil(currentPage / 5) * 5 + 1;
        setCurrentPageIndexes([
          ...pageIndexes.slice(newIndex - 1, newIndex + 4),
        ]);
        setNextDisabled(newIndex + 5 > pageIndexes.length ? true : false);
        setPrevDisabled(false);
        break;
      default:
        newIndex = Number(target.innerText);
        break;
    }
    handleCurrentPage(newIndex);
  };

  return (
    <ul className={styles['pagination']} onClick={handleListClick}>
      <li className={styles['pagination__list']}>
        <PaginationButton isDisabled={prevDisabled}>{`<`}</PaginationButton>
      </li>
      {currentPageIndexes.map((e) => {
        return (
          <li key={e}>
            <PaginationButton isSelected={currentPage === e}>
              {e}
            </PaginationButton>
          </li>
        );
      })}

      <li className={styles['pagination__list']}>
        <PaginationButton isDisabled={nextDisabled}>{`>`}</PaginationButton>
      </li>
    </ul>
  );
};

export default Pagination;
