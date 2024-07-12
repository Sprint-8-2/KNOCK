import { Fragment } from 'react/jsx-runtime';
import styles from '../../styles/icon/icon.module.scss';

type IconProps = {
  src: string;
  alt: string;
};

const Icon: React.FC<IconProps> = ({ src, alt }) => {
  return (
    <Fragment>
      <img className={styles['icon-image']} src={src} alt={alt} />
    </Fragment>
  );
};

export default Icon;
