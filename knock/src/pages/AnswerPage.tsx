import { useParams } from 'react-router-dom';
import FeedList from '../components/FeedList/FeedList';
import MetaTags from '../core/ui/MetaTags/MetaTags';
import Image from '../core/ui/CommonImage/Image';
import ImageBanner from '../core/assets/image/feedHeaderImage.png';
import styles from '../core/styles/answerPage.module.scss';

function AnswerPage() {
  const { id } = useParams(); // subjectId
  console.log(id);
  return (
    <>
      <MetaTags />
      <div className={styles['page']}>
        <div className={styles['page__container']}>
          <Image
            containerClassName={styles['page__banner']}
            src={ImageBanner}
            alt="배너"
          />
          <div className={styles['page__feed-list']}>
            <FeedList
              count={4}
              next={null}
              previous={null}
              results={[
                {
                  id: 12727,
                  subjectId: 7437,
                  content: '안녕하세요',
                  like: 0,
                  dislike: 0,
                  createdAt: '2024-07-15T17:26:53.383047Z',
                  answer: {
                    id: 5861,
                    questionId: 12727,
                    content: '거절된 질문입니다',
                    isRejected: true,
                    createdAt: '2024-07-15T17:29:35.962005Z',
                  },
                },
                {
                  id: 12726,
                  subjectId: 7437,
                  content: '질문이에요',
                  like: 1,
                  dislike: 1,
                  createdAt: '2024-07-15T17:26:48.577990Z',
                  answer: {
                    id: 5862,
                    questionId: 12726,
                    content: '답변이에요',
                    isRejected: false,
                    createdAt: '2024-07-15T17:31:16.902560Z',
                  },
                },
                {
                  id: 12725,
                  subjectId: 7437,
                  content: '질문입니다',
                  like: 0,
                  dislike: 0,
                  createdAt: '2024-07-15T17:26:43.626343Z',
                  answer: null,
                },
                {
                  id: 12724,
                  subjectId: 7437,
                  content: '질 문',
                  like: 0,
                  dislike: 0,
                  createdAt: '2024-07-15T17:26:29.816185Z',
                  answer: null,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AnswerPage;
