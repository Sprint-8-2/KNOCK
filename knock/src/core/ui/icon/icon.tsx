import { Fragment } from 'react/jsx-runtime';

type IconProps = {
  src: string;
  alt: string;
  className: string;
};

const Icon: React.FC<IconProps> = ({ src, alt, className }) => {
  return (
    <Fragment>
      <img className={className} src={src} alt={alt} />
    </Fragment>
  );
};

export default Icon;
