import Image from '../../core/ui/CommonImage/Image';
import AnswerForm from '../AnswerForm/AnswerForm';
import styles from './Answer.module.scss';
import AnswerContent from '../AnswerContent/AnswerContent';
import AnswerRejection from '../AnswerRejection/AnswerRejection';
import AnswerModification from '../AnswerModification/AnswerModification';
import useElapsedTime from '../../lib/hooks/useElapsedTime';

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
  const { elapsedTime } = useElapsedTime();
  const isShowProfile = answerState !== 'empty' || mode === 'answer';

  return (
    <div className={styles['answer']}>
      {isShowProfile && (
        <Image
          src={imageSource}
          alt="profileImg"
          containerClassName={styles['answer__profile']}
          imageClassName={styles['answer__profile-image']}
        />
      )}
      <div className={styles['answer__details']}>
        {isShowProfile && (
          <div className={styles['answer__row']}>
            <h1 className={styles['answer__username']}>{name}</h1>
            <p className={styles['answer__timestamp']}>
              {elapsedTime(createAt)}
            </p>
          </div>
        )}
        {isModification ? (
          <AnswerModification
            handleSubmit={answerModificationSubmit}
            content={content}
            answerId={answerId}
          />
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default Answer;
