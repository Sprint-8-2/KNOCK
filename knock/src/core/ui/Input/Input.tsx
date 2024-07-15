import { useState } from 'react';
import styles from '../../styles/input.module.scss';

interface InputProps {
  children: React.ReactNode;
  value: string;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({
  children,
  value,
  onKeyDown = () => {},
  onChange = () => {},
}: InputProps) => {
  return (
    <div className={`${styles['form-input']}`}>
      <div className={styles['form-input__icon']}>{children}</div>
      <input
        type="text"
        className={styles['form-input__input']}
        placeholder="이름을 입력하세요"
        value={value}
        onKeyDown={onKeyDown}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
