import AnswerContent from '../AnswerContent/AnswerContent';
import AnswerForm from '../AnswerForm/AnswerForm';
import AnswerRejection from '../AnswerRejection/AnswerRejection';

interface AnswerStateRendererProps {
  answerState: 'answered' | 'empty' | 'rejected';
  mode: 'answer' | 'post';
  content: string;
  questionId: number | undefined;
  answerSubmit: (questionId: number | undefined, content: string) => void;
}

const AnswerStateRenderer = ({
  answerState,
  mode,
  content,
  questionId,
  answerSubmit,
}: AnswerStateRendererProps) => {
  return (
    <>
      {answerState === 'answered' && <AnswerContent content={content} />}
      {answerState === 'empty' && mode === 'answer' && (
        <AnswerForm
          content={content}
          questionId={questionId}
          handleSubmit={answerSubmit}
        />
      )}
      {answerState === 'rejected' && <AnswerRejection />}
    </>
  );
};

export default AnswerStateRenderer;
