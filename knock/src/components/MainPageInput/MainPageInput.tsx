import styles from './mainPageInput.module.scss';
import React, { useState } from 'react';
import UButton from '../../core/ui/buttons/UButton/UButton';
import Input from '../../core/ui/Input/Input';
import { createSubject } from '../../lib/api/Subject';
import { useNavigate } from 'react-router-dom';
import useLoscalStorageUserInfo from '../../lib/hooks/useLoscalStorageUserInfo';
import { FiUser } from 'react-icons/fi';

type MainPageInputProps = {
  mainPageInputClassName?: string;
};

const MainPageInput: React.FC<MainPageInputProps> = ({
  mainPageInputClassName,
}) => {
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
  return (
    <form
      onSubmit={handleSubmit}
      className={`${mainPageInputClassName} ${styles['container']}`}
    >
      <Input value={name} onChange={handleNameSet}>
        <FiUser className={`${styles['container__img']}`} />
      </Input>
      <UButton
        type="box"
        handleClick={() => {}}
        className={`${styles['container__submit-button']}`}
      >
        질문 하기
      </UButton>
    </form>
  );
};
export default MainPageInput;
