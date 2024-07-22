import styles from '../../styles/dropdown.module.scss';
import Icon from '../CommonIcon/icon';

export interface DropdownContentList {
  selected: string;
  content: string;
  iconSourse?: string;
  iconClassName?: string;
}

interface DropdownContentProps {
  dropdownElementList: DropdownContentList[];
  selected?: string;
}

const DropdownContent = ({
  dropdownElementList,
  selected = '',
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
            {e.iconSourse ? (
              <Icon
                src={e.iconSourse}
                alt={`드랍다운 ${e.content}`}
                className={e.iconClassName ?? ''}
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
