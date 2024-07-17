import { useEffect, useState } from 'react';

const getSize = () => {
  return window.innerWidth >= 876 ? 8 : 6;
};

const useResize = () => {
  const [pageSize, setPageSize] = useState<number>(getSize());

  const handleSize = () => {
    setPageSize(getSize());
  };

  useEffect(() => {
    window.addEventListener('resize', handleSize);
    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, []);

  return { pageSize };
};

export default useResize;
