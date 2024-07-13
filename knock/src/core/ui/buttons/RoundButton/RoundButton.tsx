import styles from './RoundButton.module.scss';

interface RoundButtonProps {
  className?: string;
  handleClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  children: React.ReactNode;
  isDisalbed?: boolean;
}

const RoundButton = ({
  className='',
  handleClick,
  children,
  isDisalbed = false,
}: RoundButtonProps) => {
  return (
    <>
      <button
        className={`${styles['button']} ${className}`}
        onClick={handleClick}
        disabled={isDisalbed}
      >
        {children}
      </button>
    </>
  );
};

export default RoundButton;
