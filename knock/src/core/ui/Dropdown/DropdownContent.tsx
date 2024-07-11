interface DropdownContentProps {
  dropdownElementList: React.ReactNode[] | string[];
}

const DropdownContent = ({ dropdownElementList }: DropdownContentProps) => {
  return (
    <ul>
      {dropdownElementList.map((e, idx) => {
        return <li key={idx}>{e}</li>;
      })}
    </ul>
  );
};

export default DropdownContent;
