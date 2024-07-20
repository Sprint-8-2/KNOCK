import UserCard from '../../core/ui/UserCard/UserCard';

interface SubjectCardProps {
  name: string;
  src: string;
  questionCount: number;
}

const SubjectCard = ({ name, src, questionCount }: SubjectCardProps) => {
  return (
    <>
      <UserCard name={name} src={src} count={questionCount} />
    </>
  );
};

export default SubjectCard;
