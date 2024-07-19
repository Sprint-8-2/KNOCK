import { useEffect, useRef, useState } from 'react';

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
  children,
  iconSrc = '',
  selected = '',
  ButtonclassName,
  dropdownElementList,
  handleSelectElement,
}: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleDropdownOpen = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleDropdownOutClose = (e: MouseEvent) => {
      if (
        isDropdownOpen &&
        dropdownRef &&
        !dropdownRef.current?.contains(e.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener('click', handleDropdownOutClose);

    return () => {
      window.removeEventListener('click', handleDropdownOutClose);
    };
  }, [isDropdownOpen, dropdownRef.current]);

  return (
    <div className={`${styles['dropdown']}`} ref={dropdownRef}>
      <button
        className={`${
          ButtonclassName ? ButtonclassName : styles['dropdown__button']
        } ${isDropdownOpen ? styles['dropdown__button--active'] : ''}`}
        onClick={handleDropdownOpen}
      >
        {children}
        {iconSrc && (
          <Icon
            src={iconSrc}
            alt="드랍다운 아이콘"
            className={`${styles['dropdown__button--icon']} ${isDropdownOpen ? styles['dropdown__button--turn'] : ''}`}
          />
        )}
        <div
          className={`${styles['dropdown__content']} ${isDropdownOpen ? styles['dropdown__content--visible'] : ''}`}
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
