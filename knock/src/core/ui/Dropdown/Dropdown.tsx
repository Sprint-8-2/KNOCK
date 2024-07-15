import { useState } from 'react';
import DropdownContent from './DropdownContent';

import styles from '../../styles/dropdown.module.scss';
import Icon from '../CommonIcon/icon';

interface DropdownProps {
  ButtonclassName?: string;
  children: React.ReactNode;
  dropdownElementList: React.ReactNode[] | string[];
  handleSelectElement: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  selected?: string;
  iconSrc?: string;
}

const Dropdown = ({
  ButtonclassName,
  children,
  dropdownElementList,
  iconSrc = '',
  handleSelectElement,
  selected = '',
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className={`${styles['dropdown']}`}>
      <button
        className={`${
          ButtonclassName ? ButtonclassName : styles['dropdown__button']
        } ${isOpen ? styles['dropdown__button--active'] : ''}`}
        onClick={handleOpen}
      >
        {children}
        {iconSrc && (
          <Icon
            src={iconSrc}
            alt="드랍다운 아이콘"
            className={`${styles['dropdown__button--icon']} ${isOpen ? styles['dropdown__button--turn'] : ''}`}
          />
        )}
        <div
          className={`${styles['dropdown__content']} ${isOpen ? styles['dropdown__content--visible'] : ''}`}
          onClick={handleSelectElement}
        >
          <DropdownContent
            dropdownElementList={dropdownElementList}
            selected={selected}
          />
        </div>
      </button>
    </div>
  );
};

export default Dropdown;
