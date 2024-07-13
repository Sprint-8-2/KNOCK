import styles from '../../styles/pagination/pagination.module.scss';

interface PaginationButtonProps {
  children: React.ReactNode;
  isSelected?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const PaginationButton = ({
  children,
  onClick = () => {},
  isSelected = false,
}: PaginationButtonProps) => {
  return (
    <button
      className={`${styles['pagination__button']} ${isSelected ? styles['pagination__button--selected'] : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PaginationButton;
