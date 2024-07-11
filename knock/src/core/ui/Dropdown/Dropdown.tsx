import { useState } from 'react';
import DropdownContent from './DropdownContent';

import '../../styles/dropdown.scss';

interface DropdownProps {
  children: React.ReactNode;
  dropdownElementList: React.ReactNode[] | string[];
  handleSelectElement: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const Dropdown = ({
  children,
  dropdownElementList,
  handleSelectElement,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="dropdown">
      <button onClick={handleOpen}>{children}</button>
      <div onClick={handleSelectElement}>
        <DropdownContent dropdownElementList={dropdownElementList} />
      </div>
    </div>
  );
};

export default Dropdown;
