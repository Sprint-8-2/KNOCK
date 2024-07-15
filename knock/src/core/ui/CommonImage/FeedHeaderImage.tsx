import styles from '../../styles/image/feedheaderimage.module.scss';

type FeedHeaderImageProps = {
  src: string;
  alt: string;
};

const FeedHeaderImage: React.FC<FeedHeaderImageProps> = ({ src, alt }) => {
  return (
    <div className={styles['feedheader-image']}>
      <img className={styles['feedheader-image__img']} src={src} alt={alt} />
    </div>
  );
};

export default FeedHeaderImage;
