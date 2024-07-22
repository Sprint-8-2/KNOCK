import SkeletonUserCard from '../../core/ui/UserCard/SkeletonUserCard';
import UserCard from '../../core/ui/UserCard/UserCard';

interface SubjectCardProps {
  name: string;
  src: string;
  questionCount: number;
  isLoading: boolean;
}

const SubjectCard = ({
  name,
  src,
  questionCount,
  isLoading,
}: SubjectCardProps) => {
  const shortName = name.length > 6 ? name.slice(0, 6) + '...' : name;
  console.log(shortName);
  return (
    <>
      {isLoading ? (
        <SkeletonUserCard />
      ) : (
        <UserCard name={shortName} src={src} count={questionCount} />
      )}
    </>
  );
};

export default SubjectCard;
