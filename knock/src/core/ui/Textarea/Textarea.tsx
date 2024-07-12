import styles from '../../styles/Textarea.module.scss';

interface TextareaProps {
  placeholder: string;
  value: string | number;
  id: string;
  name: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
}

const Textarea = ({
  placeholder,
  id,
  name,
  value,
  onChange = () => {},
  onKeyDown = () => {},
}: TextareaProps) => {
  return (
    <textarea
      className={styles['form-textarea']}
      placeholder={placeholder}
      id={id}
      value={value}
      name={name}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

export default Textarea;
