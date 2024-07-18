import { useEffect, useState } from 'react';

interface UserInfo {
  id: number;
  name: string;
  imageSource: string;
}

const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  const handleUserInfo = (newUserInfo: UserInfo) => {
    if (newUserInfo.name && newUserInfo.imageSource) {
      setUserInfo(newUserInfo);
      const userInfoStr = JSON.stringify(newUserInfo);
      window.localStorage.setItem('userInfo', userInfoStr);
    }
  };

  useEffect(() => {
    const userInfoStr = window.localStorage.getItem('userInfo');
    if (userInfoStr) {
      const userInfoJson = JSON.parse(userInfoStr);
      setUserInfo(userInfoJson);
    }

    return () => {
      setUserInfo(null);
    };
  }, []);

  return { userInfo, handleUserInfo };
};

export default useUserInfo;
