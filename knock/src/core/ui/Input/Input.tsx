import { useState } from 'react';
import styles from '../../styles/input.module.scss';

interface Props {
  value: string;
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ value, onKeyDown, onChange }: Props) => {
  const [isFocused, setIsFocused] = useState<Boolean>(false);
  const handleInputFocus = (focusState: Boolean) => {
    setIsFocused(focusState);
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
        onFocus={() => handleInputFocus(true)}
        onBlur={() => handleInputFocus(false)}
        value={value}
        onKeyDown={onKeyDown}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
