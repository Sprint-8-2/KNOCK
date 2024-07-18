import { Link } from 'react-router-dom';

import { SubjectDetailResponse } from '../../core/types/api/Response';
import QuestionCard from './QuestionCard';

import styles from './QuestionCardList.module.scss';

interface QuestionCardListProps {
  questions: SubjectDetailResponse[];
}

const QuestionCardList = ({ questions }: QuestionCardListProps) => {
  return (
    <ul className={`${styles['question-list-main__cards']}`}>
      {questions.map((e) => {
        return (
          <li key={e.id}>
            <Link to={`/post/${e.id}`}>
              <QuestionCard
                name={e.name}
                src={e.imageSource}
                questionCount={e.questionCount}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default QuestionCardList;
