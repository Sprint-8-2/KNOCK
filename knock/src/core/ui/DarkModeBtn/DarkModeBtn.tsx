import { useEffect } from 'react';
import useTheme from '../../../lib/hooks/useTheme';
import styles from './DarkModeBtn.module.scss';

const DarkModeBtn = () => {
  const [theme, setTheme] = useTheme();

  useEffect(() => {
    const windowDarkMode =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (localStorage.getItem('theme') !== 'default') return;
    if (windowDarkMode) {
      setTheme('darkMode');
    } else {
      setTheme('lightMode');
    }
  }, [setTheme]);

  useEffect(() => {
    let nextTheme;
    if (theme === 'default') {
      nextTheme = 'light';
    } else if (theme === 'lightMode') {
      nextTheme = 'light';
    } else {
      nextTheme = 'dark';
    }
    document.body.dataset.theme = nextTheme;
  }, [theme]);

  const darkModeToggle = () => {
    if (theme === 'lightMode') {
      setTheme('darkMode');
    } else setTheme('lightMode');
  };

  return (
    <button className={styles['dark-mode-btn']} onClick={darkModeToggle}>
      <div
        className={`${styles['dark-mode-btn__toggle']} ${theme === 'darkMode' ? styles['dark-mode-btn__toggle--dark-mode'] : ''}`}
      ></div>
      <span>🌙</span>
      <span>☀️</span>
    </button>
  );
};

export default DarkModeBtn;
