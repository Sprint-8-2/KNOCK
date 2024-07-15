import { useEffect, useRef, useState } from 'react';

const useResizeObserver = () => {
  const [cardWidth, setCardWidth] = useState<number>(0);
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleSize = () => {
      if (ref.current) {
        const width = ref.current.offsetWidth;
        // const id = setTimeout(() => {
        setCardWidth(width);
        console.log(width);
        // }, 500);
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
