import { useEffect } from 'react';

import UButton from '../../UButton/UButton';
import Icon from '../../../CommonIcon/icon';

import styles from './KakaoShareButton.module.scss';

import kakaoIcon from '../../../../assets/icon/Kakaotalk.svg';
import useUserInfo from '../../../../../lib/hooks/useUserInfo';

const KAKAO_KEY = process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY;

declare global {
  interface Window {
    Kakao: any;
  }
}

interface KaKoShareButtonProps {
  sharedUrl: string;
}

const KakaoShareButton = ({ sharedUrl }: KaKoShareButtonProps) => {
  const { userInfo } = useUserInfo();

  const handleKaKaoShare = () => {
    if (window.Kakao === undefined) {
      return;
    }
    const kakao = window.Kakao;

    if (!kakao.isInitialized()) {
      kakao.init(KAKAO_KEY);
    }

    kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `${userInfo?.name || ''}님께서 knock을 요청하셨어요!`,
        description: `${userInfo?.name || ''}님께 질문을 통해 마음에 knock 해주세요!`,
        imageUrl:
          'https://github.com/Sprint-8-2/KNOCK/blob/dev/knock/src/core/assets/image/mainimage.png',
        link: {
          mobileWebUrl: sharedUrl,
          webUrl: sharedUrl,
        },
      },
      buttons: [
        {
          title: 'knock 하러가기',
          link: {
            mobileWebUrl: sharedUrl,
            webUrl: sharedUrl,
          },
        },
      ],
      installTalk: true,
    });
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  // const shareToKakaoTalk = (title: string, sharedUrl: string) => {

  // };

  return (
    <>
      <UButton
        type="round"
        className={styles['button--custom-color']}
        handleClick={handleKaKaoShare}
      >
        <Icon src={kakaoIcon} alt="카카오 공유하기" className="" />
      </UButton>
    </>
  );
};
export default KakaoShareButton;
