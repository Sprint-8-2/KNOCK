import { useLocation } from 'react-router-dom';
import useCopyToClipboard from './useCopyToClipboard';

const useCopyCurrentUrl = (): [boolean, () => void] => {
  const location = useLocation();
  const [isCopied, copyToClipboard] = useCopyToClipboard();

  const copyCurrentUrl = () => {
    const currentUrl =
      window.location.origin + location.pathname + location.search;
    copyToClipboard(currentUrl);
  };

  return [isCopied, copyCurrentUrl];
};

export default useCopyCurrentUrl;
