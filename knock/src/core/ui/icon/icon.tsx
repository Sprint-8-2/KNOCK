import styles from '../../styles/icon/icon.module.scss';

type IconProps = {
  src: string;
  alt: string;
};

const Icon: React.FC<IconProps> = ({ src, alt }) => {
  return (
    <div>
      <img className={styles['icon-image']} src={src} alt={alt} />
    </div>
  );
};

export default Icon;
