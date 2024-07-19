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
    <>
      {dropdownElementList.map((e, idx) => {
        return (
          <li
            className={` ${selected === e ? styles['dropdown__content--selected'] : styles['dropdown__content--disselected']}`}
            key={idx}
          >
            {e}
          </li>
        );
      })}
    </>
  );
};

export default DropdownContent;
