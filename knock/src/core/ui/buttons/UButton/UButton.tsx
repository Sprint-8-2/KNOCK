import { clsx } from 'clsx';
import styles from './UButton.module.scss';

interface UButtonProps {
  type: 'box' | 'floating' | 'round';
  className?: string;
  handleClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  children: React.ReactNode;
  isDisalbed?: boolean;
  isLightTheme?: boolean;
  isSmallButton?: boolean;
}

const UButton = ({
  type,
  className = '',
  handleClick,
  children,
  isDisalbed = false,
  isLightTheme = false,
  isSmallButton = false,
}: UButtonProps) => {
  return (
    <>
      <button
        className={clsx(
          styles['common-button'],
          {
            [styles['box-button']]: type === 'box',
            [styles['box-button--light']]: type === 'box' && isLightTheme,
            [styles['box-button--small']]: type === 'box' && isSmallButton,
            [styles['floating-button']]: type === 'floating',
            [styles['round-button']]: type === 'round',
          },
          className,
        )}
        onClick={handleClick}
        disabled={isDisalbed}
      >
        {children}
      </button>
    </>
  );
};

export default UButton;
