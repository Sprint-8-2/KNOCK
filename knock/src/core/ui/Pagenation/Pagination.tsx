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

const pageLength = 5;

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
    const maxIndex = Math.ceil(itemCount / pageSize);
    let newIndex = currentPage;
    switch (target.innerText) {
      case '<':
        newIndex = (Math.floor(currentPage / pageLength) - 1) * pageLength + 1;
        setCurrentPageIndexes(
          Array(pageLength)
            .fill(0)
            .map((_, i) => newIndex + i),
        );
        setNextDisabled(false);
        setPrevDisabled(newIndex <= pageLength);
        break;
      case '>':
        newIndex = Math.ceil(currentPage / pageLength) * pageLength + 1;
        setCurrentPageIndexes(
          Array(Math.min(pageLength, maxIndex - newIndex + 1))
            .fill(0)
            .map((_, i) => newIndex + i),
        );

        setNextDisabled(newIndex + pageLength > maxIndex ? true : false);
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
      Math.floor(
        (currentPage % pageLength ? currentPage : currentPage - 1) / pageLength,
      ) *
        pageLength +
      1;
    setCurrentPageIndexes(
      Array(
        Math.min(
          pageLength,
          maxIndex - currentPage + 1 > 0 ? maxIndex - currentPage + 1 : 1,
        ),
      )
        .fill(0)
        .map((_, i) => newCurrentPage + i),
    );
  }, [itemCount, pageSize]);

  useEffect(() => {
    setNextDisabled(Math.ceil(itemCount / pageSize) <= 5);
  }, [itemCount]);

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
