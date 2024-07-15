import { useEffect, useRef, useState } from 'react';

const useResizeObserver = () => {
  const [cardWidth, setCardWidth] = useState<number>(0);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleSize = () => {
      if (ref.current) {
        const width = ref.current.offsetWidth;
        setCardWidth(width);
        console.log(width);
      }
    };
    window.addEventListener('resize', handleSize);
    return () => {
      if (ref.current) {
        window.removeEventListener('resize', handleSize);
      }
    };
  }, []);

  return { ref, cardWidth };
};

export default useResizeObserver;
