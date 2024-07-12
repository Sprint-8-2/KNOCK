import { useLocation } from 'react-router-dom';
import { ReactComponent as Icon } from '../../../../assets/icon/Link-light.svg';
import RoundButton from '../../RoundButton/RoundButton';
// import styles from './LinkShareButton.module.scss';

interface LinkShareButtonProps {
  handleClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const LinkShareButton = ({ handleClick }: LinkShareButtonProps) => {
  const location = useLocation();
  const baseUrl = `${window.location.protocol}//${window.location.host}`;

  const handleCopyClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(baseUrl + location.pathname);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <RoundButton handleClick={handleCopyClipBoard} backgroundColor="#542F1A">
        <Icon />
      </RoundButton>
    </>
  );
};

export default LinkShareButton;
