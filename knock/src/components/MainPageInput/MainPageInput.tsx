import PersonIcon from '../../core/assets/icon/Person.svg';
import styles from './mainPageInput.module.scss';
import React, { useState } from 'react';
import UButton from '../../core/ui/buttons/UButton/UButton';
import Input from '../../core/ui/Input/Input';
import { createSubject } from '../../lib/api/Subject';
import { useNavigate } from 'react-router-dom';
import useUserInfo from '../../lib/hooks/useUserInfo';
import Icon from '../../core/ui/CommonIcon/icon';

interface MainPageInputProps {}

const MainPageInput: React.FC<MainPageInputProps> = () => {
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
    if (name && e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  function handleClick(e: React.MouseEvent<HTMLElement, MouseEvent>): void {}

  return (
    <div className={`${styles['container']}`}>
      <form className={`${styles['container__outside']}`}>
        <Input value={name} onKeyDown={handleKeyDown} onChange={handleNameSet}>
          <Icon
            src={PersonIcon}
            alt="Person"
            className={`${styles['container__img']}`}
            handleClick={handleClick}
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
