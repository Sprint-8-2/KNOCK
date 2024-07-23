import { useRef, useEffect } from 'react';
import './AnimatedImage.scss';

interface AnimatedImageProps {
  src: string;
  alt: string;
  animationStartPoint: string;
  animationEndPoint: string;
  triggerPoint: number;
  className?: string;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  animationStartPoint,
  animationEndPoint,
  triggerPoint,
  className,
}) => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;

      if (imageRef.current) {
        imageRef.current.style.animation =
          value > triggerPoint
            ? `${animationStartPoint} 1s ease-out`
            : `${animationEndPoint} 0.5s ease-out forwards`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [triggerPoint, animationStartPoint, animationEndPoint]);

  return <img ref={imageRef} src={src} alt={alt} className={className} />;
};

export default AnimatedImage;
