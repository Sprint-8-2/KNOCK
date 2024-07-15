type ImageProps = {
  src: string;
  alt: string;
  containerClassName?: string;
  imageClassName?: string;
};

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  containerClassName,
  imageClassName,
}) => {
  return (
    <div className={containerClassName}>
      <img className={imageClassName} src={src} alt={alt} />
    </div>
  );
};

export default Image;
