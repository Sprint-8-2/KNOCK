import { useState } from 'react';
import DropdownContent from './DropdownContent';

import styles from '../../styles/dropdown.module.scss';

interface DropdownProps {
  children: React.ReactNode;
  dropdownElementList: React.ReactNode[] | string[];
  handleSelectElement: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  selected: string;
}

const Dropdown = ({
  children,
  dropdownElementList,
  handleSelectElement,
  selected,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="dropdown">
      <button
        className={`${styles['dropdown__button']} ${isOpen ? styles['dropdown__button--active'] : ''}`}
        onClick={handleOpen}
      >
        {children}
        <div
          className={`${isOpen ? styles['dropdown__content'] : styles['dropdown__content--invisible']}`}
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
