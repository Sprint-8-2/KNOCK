import { useState } from 'react';

interface UserInfo {
  id: number;
  name: string;
  imageSource: string;
}

interface UserInfos {
  [id: number]: Omit<UserInfo, 'id'>;
}

const useLoscalStorageUserInfo = (): {
  users: UserInfos | null;
  addUserInfo: (newUserInfo: UserInfo) => void;
} => {
  const [users, setUsers] = useState<UserInfos | null>(() =>
    getUserInfoFromLocalStorage(),
  );

  const getUserInfoFromLocalStorage = (): UserInfos | null => {
    const stringUserInfo = window.localStorage.getItem('userInfo');
    if (stringUserInfo) {
      return JSON.parse(stringUserInfo);
    } else {
      return null;
    }
  };

  const addUserInfo = (newUserInfo: UserInfo) => {
    if (newUserInfo.name && newUserInfo.imageSource) {
      let userInfos = getUserInfoFromLocalStorage();
      if (!userInfos) {
        userInfos = {};
      }
      userInfos[newUserInfo.id] = {
        name: newUserInfo.name,
        imageSource: newUserInfo.imageSource,
      };
      setUsers(userInfos);
      const userInfosStr = JSON.stringify(userInfos);
      window.localStorage.setItem('userInfo', userInfosStr);
    }
  };

  return { users, addUserInfo };
};

export default useLoscalStorageUserInfo;
