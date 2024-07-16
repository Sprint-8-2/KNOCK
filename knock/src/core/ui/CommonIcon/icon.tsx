import { Fragment } from 'react/jsx-runtime';

type IconProps = {
  handleClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  src: string;
  alt: string;
  className: string;
};

const Icon: React.FC<IconProps> = ({ handleClick, src, alt, className }) => {
  return (
    <Fragment>
      <img className={className} src={src} alt={alt} onClick={handleClick} />
    </Fragment>
  );
};

export default Icon;
