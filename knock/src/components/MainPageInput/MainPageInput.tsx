import PersonIcon from '../../core/assets/icon/Person.svg';
import styles from './mainPageInput.module.scss';
import React, { useState } from 'react';
import UButton from '../../core/ui/buttons/UButton/UButton';
import Input from '../../core/ui/Input/Input';
import Icon from '../../core/ui/CommonIcon/icon';

interface MainPageInputProps {
  name: string;
  handleNameSet: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const MainPageInput = ({
  name,
  handleNameSet,
  handleSubmit,
  handleKeyDown,
}: MainPageInputProps) => {
  return (
    <div className={`${styles['container']}`}>
      <form className={`${styles['container__outside']}`}>
        <Input value={name} onKeyDown={handleKeyDown} onChange={handleNameSet}>
          <Icon
            src={PersonIcon}
            alt="Person"
            className={`${styles['container__img']}`}
            handleClick={() => {}}
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
