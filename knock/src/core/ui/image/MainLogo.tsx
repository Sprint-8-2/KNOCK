import styles from '../../styles/image/mainlogo.module.scss';

type MainLogoProps = {
  src: string;
  alt: string;
};

const MainLogo: React.FC<MainLogoProps> = ({ src, alt }) => {
  return (
    <div className={styles['main-logo']}>
      <img className={styles['main-logo__img']} src={src} alt={alt} />
    </div>
  );
};

export default MainLogo;
