import UserCard from '../../core/ui/UserCard/UserCard';

interface QuestionCardProps {
  name: string;
  src: string;
  questionCount: number;
}

const QuestionCard = ({ name, src, questionCount }: QuestionCardProps) => {
  return (
    <>
      <UserCard name={name} src={src} count={questionCount} />
    </>
  );
};

export default QuestionCard;
