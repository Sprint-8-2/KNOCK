import styles from './BoxButton.module.scss';

interface BoxButtonProps {
  handleClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  isDisalbed?: boolean;
  children: React.ReactNode;
  isLightTheme?: boolean;
  isSmallButton?: boolean;
}

const BoxButton = ({
  handleClick,
  isDisalbed = false,
  children,
  isLightTheme = false,
  isSmallButton = false,
}: BoxButtonProps) => {
  return (
    <>
      <button
        className={`
					${styles['button']} 
					${isSmallButton ? styles['button--small'] : ''}
					${isLightTheme ? styles['button--light'] : ''}
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
