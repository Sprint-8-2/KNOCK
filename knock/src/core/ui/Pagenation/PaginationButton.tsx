import styles from '../../styles/pagination.module.scss';

interface PaginationButtonProps {
  children: React.ReactNode;
  isSelected?: boolean;
  isDisabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const PaginationButton = ({
  children,
  onClick = () => {},
  isDisabled = false,
  isSelected = false,
}: PaginationButtonProps) => {
  return (
    <button
      className={`${styles['pagination__button']} ${isSelected ? styles['pagination__button--selected'] : ''}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default PaginationButton;
