import styles from './FloatingButton.module.scss';

interface FloatingButtonProps {
  handleClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  children: React.ReactNode;
  isDisalbed?: boolean;
}

const FloatingButton = ({
  handleClick,
  children,
  isDisalbed = false,
}: FloatingButtonProps) => {
  return (
    <>
      <button
        className={styles['button']}
        onClick={handleClick}
        disabled={isDisalbed}
      >
        {children}
      </button>
    </>
  );
};

export default FloatingButton;
