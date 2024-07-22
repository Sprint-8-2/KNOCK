import styles from './Answer.module.scss';
import AnswerModification from '../AnswerModification/AnswerModification';
import AnswerProfile from '../AnswerProfile/AnswerProfile';
import AnswerStateRenderer from '../AnswerStateRenderer/AnswerStateRenderer';

export type AnswerState = 'answered' | 'empty' | 'rejected';

interface AnswerProps {
  answerState: AnswerState;
  isModification?: boolean;
  content: string;
  rejected?: boolean;
  name: string;
  imageSource: string;
  createAt: string;
  answerModificationSubmit?: (
    answerId: number | undefined,
    content: string,
  ) => void;
  answerSubmit: (questionId: number | undefined, content: string) => void;
  answerId: number | undefined;
  questionId: number | undefined;
  mode?: 'answer' | 'post';
}

const Answer = ({
  mode = 'answer',
  content,
  name,
  imageSource,
  answerState = 'answered',
  isModification,
  createAt,
  answerId,
  questionId,
  answerModificationSubmit = () => {},
  answerSubmit = () => {},
}: AnswerProps) => {
  const isShowProfile = answerState !== 'empty' || mode === 'answer';

  return (
    <div className={styles['answer']}>
      {isShowProfile && (
        <AnswerProfile
          name={name}
          imageSource={imageSource}
          createAt={createAt}
        />
      )}
      {isModification ? (
        <AnswerModification
          handleSubmit={answerModificationSubmit}
          content={content}
          answerId={answerId}
        />
      ) : (
        <AnswerStateRenderer
          answerState={answerState}
          mode={mode}
          content={content}
          questionId={questionId}
          answerSubmit={answerSubmit}
        />
      )}
    </div>
  );
};

export default Answer;
