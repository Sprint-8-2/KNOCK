import PaginationButton from './PaginationButton';

import styles from '../../styles/pagination/pagination.module.scss';

const Pagination = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  const now = 1;
  return (
    <ul className={styles['pagination']}>
      <li>
        <PaginationButton>{`<`}</PaginationButton>
      </li>
      {arr.map((e) => {
        return (
          <li key={e}>
            <PaginationButton isSelected={now === e}>{e}</PaginationButton>
          </li>
        );
      })}
      <li>
        <PaginationButton>{`>`}</PaginationButton>
      </li>
    </ul>
  );
};

export default Pagination;
