import styles from './BoxButton.module.scss';

interface BoxButtonProps {
  handleClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  isDisalbed?: boolean;
  children: React.ReactNode;
  theme?: string;
  isSmallButton?: boolean;
}

const BoxButton = ({
  handleClick,
  isDisalbed = false,
  children,
  theme,
  isSmallButton,
}: BoxButtonProps) => {
  return (
    <>
      <button
        className={`
					${styles['button']} 
					${theme === 'light' ? styles['button--light'] : ''}
					${isSmallButton ? styles['button--small'] : ''}
				`}
        onClick={handleClick}
        disabled={isDisalbed}
      >
        {children}
      </button>
    </>
  );
};

export default BoxButton;
