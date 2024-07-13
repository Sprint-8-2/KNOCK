import styles from '../../styles/image/mainimage.module.scss';

type MainImageProps = {
  src: string;
  alt: string;
};

const MainImage: React.FC<MainImageProps> = ({ src, alt }) => {
  return (
    <div className={styles['main-image']}>
      <img className={styles['main-image__img']} src={src} alt={alt} />
    </div>
  );
};

export default MainImage;
