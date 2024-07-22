import { useEffect, useState } from 'react';
import useResize from '../../../lib/hooks/useResize';

import PaginationButton from './PaginationButton';

import styles from '../../styles/pagination.module.scss';

interface PaginationProps {
  itemCount: number;
  currentPage: number;
  isLoading: boolean;
  handleCurrentPage: (newIndex: number) => void;
}

const Pagination = ({
  itemCount,
  currentPage,
  handleCurrentPage,
  isLoading,
}: PaginationProps) => {
  const { pageSize } = useResize();
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
            .map((_, i) => newIndex + i),
        );
        setNextDisabled(false);
        setPrevDisabled(newIndex <= 5);
        break;
      case '>':
        newIndex = Math.ceil(currentPage / 5) * 5 + 1;
        setCurrentPageIndexes(
          Array(Math.min(5, itemCount - newIndex))
            .fill(0)
            .map((_, i) => newIndex + i),
        );

        setNextDisabled(newIndex + 5 > itemCount);
        setPrevDisabled(false);
        break;
      default:
        newIndex = Number(target.innerText);
        break;
    }
    handleCurrentPage(newIndex);
  };

  useEffect(() => {
    const maxIndex = Math.ceil(itemCount / pageSize);
    const newCurrentPage =
      Math.floor((currentPage % 5 ? currentPage : currentPage - 1) / 5) * 5 + 1;
    setCurrentPageIndexes(
      Array(
        Math.min(
          5,
          maxIndex - currentPage + 1 > 0 ? maxIndex - currentPage + 1 : 1,
        ),
      )
        .fill(0)
        .map((_, i) => newCurrentPage + i),
    );
    setNextDisabled(maxIndex <= 5);
  }, [itemCount, pageSize, currentPage]);

  return (
    <ul className={styles['pagination']} onClick={handleListClick}>
      <li className={styles['pagination__list']}>
        <PaginationButton isDisabled={prevDisabled}>{`<`}</PaginationButton>
      </li>
      {isLoading ? (
        <div className={styles['pagination__loading-spinner']} />
      ) : (
        currentPageIndexes.map((e) => {
          return (
            <li key={e}>
              <PaginationButton isSelected={currentPage === e}>
                {e}
              </PaginationButton>
            </li>
          );
        })
      )}

      <li className={styles['pagination__list']}>
        <PaginationButton isDisabled={nextDisabled}>{`>`}</PaginationButton>
      </li>
    </ul>
  );
};

export default Pagination;
