import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { SubjectDetailResponse } from '../../core/types/api/Response';
import { SubjectListParams } from '../../core/types/api/Request';
import { getSubjectList } from '../../lib/api/Subject';
import QuestionCard from './QuestionCard';

import styles from './QuestionCardList.module.scss';

interface QuestionCardListProps {
  order: string;
  indexLimit: number;
  currentPage: number;
  setIndexLimit: (newVal: number) => void;
  setCurrentPage: (newVal: number) => void;
  setMaxIndex: (newVal: number) => void;
}

const QuestionCardList = ({
  order,
  indexLimit,
  currentPage,
  setIndexLimit,
  setCurrentPage,
  setMaxIndex,
}: QuestionCardListProps) => {
  const [questions, setQuestions] = useState<SubjectDetailResponse[]>([]);
  const [ulClassName, setUlClassName] = useState<string>(
    styles['question-list-main__cards--large'],
  );

  const handleQuestions = async ({
    limit,
    offset,
    sort,
  }: SubjectListParams) => {
    const { count, results } = await getSubjectList({ limit, offset, sort });
    setQuestions(results);
    setCurrentPage(1);
    setMaxIndex(count);
  };

  useEffect(() => {
    const sort = order === '이름순' ? 'name' : 'time';
    handleQuestions({ limit: indexLimit, offset: currentPage, sort });
  }, [order]);

  return (
    <ul className={`${styles['question-list-main__cards']} ${ulClassName}`}>
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
