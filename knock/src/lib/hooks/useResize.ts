import { useEffect, useState } from 'react';

const useResize = () => {
  const [pageSize, setPageSize] = useState<number>(window.innerWidth);

  const handleSize = () => {
    const width = window.innerWidth;
    if (width >= 876) {
      setPageSize(8);
    } else {
      setPageSize(6);
    }
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
