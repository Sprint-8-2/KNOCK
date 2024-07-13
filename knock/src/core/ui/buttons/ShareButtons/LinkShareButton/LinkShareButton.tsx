import { ReactComponent as Icon } from '../../../../assets/icon/Link-light.svg';
import RoundButton from '../../RoundButton/RoundButton';
import useCopyCurrentUrl from '../../../../../lib/hooks/useCopyCurrentUrl';

interface LinkShareButtonProps {
  handleClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const LinkShareButton = ({ handleClick }: LinkShareButtonProps) => {
  const [isCopied, copyCurrentUrl] = useCopyCurrentUrl();

  return (
    <>
      <RoundButton handleClick={copyCurrentUrl} backgroundColor="#542F1A">
        <Icon />
      </RoundButton>
    </>
  );
};

export default LinkShareButton;
