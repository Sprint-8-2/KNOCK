import styles from './RoundButton.module.scss';

interface RoundButtonProps {
  handleClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  children: React.ReactNode;
  backgroundColor?: string;
  isDisalbed?: boolean;
}

const RoundButton = ({
  handleClick,
  children,
  backgroundColor,
  isDisalbed = false,
}: RoundButtonProps) => {
  return (
    <>
      <button
        className={`${styles['button']}`}
        onClick={handleClick}
        style={backgroundColor ? { backgroundColor: backgroundColor } : {}}
        disabled={isDisalbed}
      >
        {children}
      </button>
    </>
  );
};

export default RoundButton;
