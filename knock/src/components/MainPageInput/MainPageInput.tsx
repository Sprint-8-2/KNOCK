import PersonIcon from '../../core/assets/icon/Person.svg';
import styles from './mainPageInput.module.scss';
import React, { useState } from 'react';
import UButton from '../../core/ui/buttons/UButton/UButton';
import Input from '../../core/ui/Input/Input';
import { createSubject } from '../../lib/api/Subject';
import { useNavigate } from 'react-router-dom';
import useLoscalStorageUserInfo from '../../lib/hooks/useLoscalStorageUserInfo';
import Icon from '../../core/ui/CommonIcon/icon';

function MainPageInput() {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const { addUserInfo: addUserInfoToLocalStorage } = useLoscalStorageUserInfo();

  const handleNameSet = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { id, name: subName, imageSource } = await createSubject({ name });
      navigate(`post/${id}/answer`);
      addUserInfoToLocalStorage({ id, name: subName, imageSource });
    } catch (error) {
      console.error(error);
    }
  };
  // 네
  return (
    <div className={`${styles['container']}`}>
      <form
        onSubmit={handleSubmit}
        className={`${styles['container__outside']}`}
      >
        <Input value={name} onChange={handleNameSet}>
          <Icon
            src={PersonIcon}
            alt="Person"
            className={`${styles['container__img']}`}
            handleClick={() => {}}
          />
        </Input>
        <UButton
          type="box"
          handleClick={() => {}}
          className={`${styles['container__submit-button']}`}
        >
          질문 하기
        </UButton>
      </form>
    </div>
  );
}
export default MainPageInput;
function addUserInfo(arg0: { id: number; name: string; imageSource: string }) {
  throw new Error('Function not implemented.');
}
