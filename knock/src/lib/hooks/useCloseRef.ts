import { useEffect, useRef } from 'react';

interface CloseRefProps {
  isOpen: boolean;
  onClose: () => void;
}

const useCloseRef = ({ isOpen, onClose }: CloseRefProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleDropdownOutClose = (e: MouseEvent) => {
      if (isOpen && ref && !ref.current?.contains(e.target as Node)) {
        onClose();
      }
    };

    window.addEventListener('click', handleDropdownOutClose);

    return () => {
      window.removeEventListener('click', handleDropdownOutClose);
    };
  }, [isOpen, ref.current]);

  return { ref };
};

export default useCloseRef;
