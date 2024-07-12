import { useState } from 'react';
import styles from '../../styles/input.module.scss';

interface InputProps {
  value: string;
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ value, onKeyDown, onChange }: InputProps) => {
  const [isFocused, setIsFocused] = useState<Boolean>(false);

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div
      className={`${styles['form-input']} ${isFocused ? styles['form-input--focused'] : ''}`}
    >
      <div className={styles['form-input__icon']}></div>
      <input
        type="text"
        className={styles['form-input__input']}
        placeholder="이름을 입력하세요"
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        onKeyDown={onKeyDown}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
