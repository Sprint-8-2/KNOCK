import { useState } from 'react';

import DropdownContent from './DropdownContent';

import styles from '../../styles/dropdown.module.scss';
import Icon from '../CommonIcon/icon';
import useCloseRef from '../../../lib/hooks/useCloseRef';

interface DropdownProps {
  ButtonclassName?: string;
  children: React.ReactNode;
  dropdownElementList: React.ReactNode[] | string[];
  handleSelectElement: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  selected?: string;
  iconSrc?: string;
}

const Dropdown = ({
  children,
  iconSrc = '',
  selected = '',
  ButtonclassName,
  dropdownElementList,
  handleSelectElement,
}: DropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const handleClose = () => {
    setIsDropdownOpen(false);
  };
  const { ref: dropdownRef } = useCloseRef({
    isOpen: isDropdownOpen,
    onClose: handleClose,
  });

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className={`${styles['dropdown']}`} ref={dropdownRef}>
      <button
        className={`${
          ButtonclassName ? ButtonclassName : styles['dropdown__button']
        } ${isDropdownOpen ? styles['dropdown__button--active'] : ''}`}
        onClick={handleDropdownToggle}
      >
        {children}
        {iconSrc && (
          <Icon
            src={iconSrc}
            alt="드랍다운 아이콘"
            className={`${styles['dropdown__button--icon']} ${isDropdownOpen ? styles['dropdown__button--turn'] : ''}`}
          />
        )}
        <ul
          className={`${styles['dropdown__content']} ${isDropdownOpen ? styles['dropdown__content--visible'] : ''}`}
          onClick={handleSelectElement}
        >
          <DropdownContent
            dropdownElementList={dropdownElementList}
            selected={selected}
          />
        </ul>
      </button>
    </div>
  );
};

export default Dropdown;
