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
  return (
    <>
      {isLoading ? (
        <SkeletonUserCard />
      ) : (
        <UserCard name={name} src={src} count={questionCount} />
      )}
    </>
  );
};

export default SubjectCard;
