import { Link } from 'react-router-dom';

import { SubjectDetailResponse } from '../../core/types/api/Response';
import SubjectCard from './SubjectCard';

import styles from './SubjectCardList.module.scss';

interface SubjectCardListProps {
  subjects: SubjectDetailResponse[];
  isLoading: boolean;
}

const SubjectCardList = ({ subjects, isLoading }: SubjectCardListProps) => {
  return (
    <ul className={`${styles['subject-list-main__cards']}`}>
      {subjects.map((e) => {
        return (
          <li key={e.id}>
            <Link to={`/post/${e.id}`}>
              <SubjectCard
                name={e.name}
                src={e.imageSource}
                questionCount={e.questionCount}
                isLoading={isLoading}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SubjectCardList;
