import { useEffect, useState } from 'react';
import PaginationButton from './PaginationButton';

import styles from '../../styles/pagination.module.scss';

interface PaginationProps {
  itemCount: number;
  currentPage: number;
  handleCurrentPage: (newIndex: number) => void;
}

const Pagination = ({
  itemCount,
  currentPage,
  handleCurrentPage,
}: PaginationProps) => {
  const [currentPageIndexes, setCurrentPageIndexes] = useState<number[]>([]);
  const [prevDisabled, setPrevDisabled] = useState<boolean>(true);
  const [nextDisabled, setNextDisabled] = useState<boolean>(true);

  const handleListClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    let newIndex = currentPage;
    switch (target.innerText) {
      case '<':
        newIndex = (Math.floor(currentPage / 5) - 1) * 5 + 1;
        setCurrentPageIndexes(
          Array(5)
            .fill(0)
            .map((_, i) => newIndex + i + 1),
        );
        setNextDisabled(false);
        setPrevDisabled(newIndex <= 5 ? true : false);
        break;
      case '>':
        newIndex = Math.ceil(currentPage / 5) * 5 + 1;
        setCurrentPageIndexes(
          Array(Math.min(5, itemCount))
            .fill(0)
            .map((_, i) => newIndex + i + 1),
        );

        setNextDisabled(newIndex + 5 > itemCount ? true : false);
        setPrevDisabled(false);
        break;
      default:
        newIndex = Number(target.innerText);
        break;
    }
    handleCurrentPage(newIndex);
  };

  useEffect(() => {
    setCurrentPageIndexes(
      Array(Math.min(5, itemCount))
        .fill(0)
        .map((_, i) => i + 1),
    );
  }, [itemCount]);

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
