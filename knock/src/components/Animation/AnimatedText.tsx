import { useRef, useEffect } from 'react';
import './AnimatedText.scss';

interface AnimatedTextProps {
  children: React.ReactNode;
  animationStartPoint: string;
  animationEndPoint: string;
  triggerPoint: number;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  animationStartPoint,
  animationEndPoint,
  triggerPoint,
  className,
}) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;

      if (textRef.current) {
        textRef.current.style.animation =
          value > triggerPoint
            ? `${animationStartPoint} 1s ease-out`
            : `${animationEndPoint} 0.5s ease-out forwards`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [triggerPoint, animationStartPoint, animationEndPoint]);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
};

export default AnimatedText;
