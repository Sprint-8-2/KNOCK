import styles from '../../styles/dropdown.module.scss';

interface DropdownContentProps {
  dropdownElementList: React.ReactNode[] | string[];
  selected?: string;
}

const DropdownContent = ({
  dropdownElementList,
  selected = '',
}: DropdownContentProps) => {
  return (
    <ul>
      {dropdownElementList.map((e, idx) => {
        return (
          <li
            className={` ${selected === e ? styles['dropdown__content--selected'] : ''}`}
            key={idx}
          >
            {e}
          </li>
        );
      })}
    </ul>
  );
};

export default DropdownContent;
