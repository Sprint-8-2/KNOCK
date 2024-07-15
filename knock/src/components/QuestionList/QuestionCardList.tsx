import QuestionCard from './QuestionCard';
import src from '../../core/assets/image/Image3.svg';

import styles from './QuestionCardList.module.scss';

const QuestionCardList = () => {
  return (
    <ul className={styles['question-list-main__cards']}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((e) => {
        return (
          <li>
            <QuestionCard name="아초는 고양이" src={src} questionCount={0} />
          </li>
        );
      })}
    </ul>
  );
};

export default QuestionCardList;
