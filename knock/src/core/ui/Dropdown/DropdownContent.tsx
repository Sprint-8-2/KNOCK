import styles from '../../styles/dropdown.module.scss';
import Icon from '../CommonIcon/icon';

export interface DropdownContentList {
  selected: string;
  content: string;
}

interface DropdownContentProps {
  iconSourse?: string;
  dropdownElementList: DropdownContentList[];
  selected?: string;
}

const DropdownContent = ({
  dropdownElementList,
  selected = '',
  iconSourse,
}: DropdownContentProps) => {
  return (
    <>
      {dropdownElementList.map((e) => {
        return (
          <li
            className={` ${selected === e.selected ? styles['dropdown__content--selected'] : styles['dropdown__content--disselected']}`}
            key={e.content}
            data-selected={e.selected}
          >
            {iconSourse ? (
              <Icon
                src={iconSourse}
                alt={`드랍다운 ${e.content}`}
                className=""
              />
            ) : (
              ''
            )}
            {e.content}
          </li>
        );
      })}
    </>
  );
};

export default DropdownContent;
