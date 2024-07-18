import HumanIcon from '../../core/assets/icon/Person.svg';
import styles from './mainPageInput.module.scss';
import React, { useState } from 'react';
import UButton from '../../core/ui/buttons/UButton/UButton';
import Input from '../../core/ui/Input/Input';
import { createSubject } from '../../lib/api/Subject';
import { useNavigate } from 'react-router-dom';
import useUserInfo from '../../lib/hooks/useUserInfo';

interface MainPageInputProps {
  onSubmit: (name: string) => void;
}

const MainPageInput: React.FC<MainPageInputProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const { handleUserInfo } = useUserInfo();

  const handleNameSet = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      const { id, name: subName, imageSource } = await createSubject({ name });
      navigate(`/post/${id}/answer`);
      handleUserInfo({ id, name: subName, imageSource });
    } catch (e) {
      console.error(e);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className={`${styles['container']}`}>
      <form className={`${styles['container__outside']}`}>
        <Input value={name} onKeyDown={handleKeyDown} onChange={handleNameSet}>
          <img
            src={HumanIcon}
            alt="HumanIcon"
            className={`${styles['container__img']}`}
          />
        </Input>
        <UButton
          type="box"
          handleClick={handleSubmit}
          className={`${styles['container__submit-button']}`}
        >
          질문 하기
        </UButton>
      </form>
    </div>
  );
};
export default MainPageInput;
