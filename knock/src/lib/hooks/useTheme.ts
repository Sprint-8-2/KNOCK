import { useEffect, useState, Dispatch, SetStateAction } from 'react';

type UseThemeResult = [string, Dispatch<SetStateAction<string>>];

const useTheme = (): UseThemeResult => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === null) return 'default';
    return savedTheme;
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);
  return [theme, setTheme];
};
export default useTheme;
