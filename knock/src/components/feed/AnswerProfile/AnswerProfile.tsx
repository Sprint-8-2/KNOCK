import Image from '../../../core/ui/CommonImage/Image';
import styles from './AnswerProfile.module.scss';
import useElapsedTime from '../../../lib/hooks/useElapsedTime';

interface AnswerProfileProps {
  name: string;
  imageSource: string;
  createAt: string;
}

const AnswerProfile = ({ name, imageSource, createAt }: AnswerProfileProps) => {
  const { elapsedTime } = useElapsedTime();

  return (
    <>
      <Image
        src={imageSource}
        alt="profileImg"
        containerClassName={styles['answer__profile']}
        imageClassName={styles['answer__profile-image']}
      />
      <div className={styles['answer__details']}>
        <div className={styles['answer__row']}>
          <h1 className={styles['answer__username']}>{name} </h1>
          <p
            className={styles['answer__timestamp']}
          >{`${createAt ? '·  ' + elapsedTime(createAt) : ''}`}</p>
        </div>
      </div>
    </>
  );
};

export default AnswerProfile;
