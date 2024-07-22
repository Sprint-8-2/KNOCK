import { useState } from 'react';

import DropdownContent, { DropdownContentList } from './DropdownContent';
import useCloseRef from '../../../lib/hooks/useCloseRef';
import Icon from '../CommonIcon/icon';

import styles from '../../styles/dropdown.module.scss';

interface DropdownProps {
  ButtonclassName?: string;
  children: React.ReactNode;
  dropdownElementList: DropdownContentList[];
  handleSelectElement: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  selected?: string;
  iconSrc?: string;
  className?: string;
}

const Dropdown = ({
  children,
  iconSrc = '',
  className = '',
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
    <div className={`${styles['dropdown']} ${className}`} ref={dropdownRef}>
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
