import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import QuestionCard from './QuestionCard';
import { SubjectDetailResponse } from '../../core/types/api/Response';
import { SubjectListParams } from '../../core/types/api/Request';

import styles from './QuestionCardList.module.scss';
import useResizeObserver from '../../lib/hooks/useResizeObserver';
import { getSubjectList } from '../../lib/api/Subject';

interface QuestionCardListProps {
  order: string;
  indexLimit: number;
  currentPage: number;
  setIndexLimit: (newVal: number) => void;
  setCurrentPage: (newVal: number) => void;
  setMaxIndex: (newVal: number) => void;
}

const mockData = [
  {
    id: 7434,
    name: 'asd',
    imageSource:
      'https://fastly.picsum.photos/id/345/200/200.jpg?hmac=8FJWKiYOThZ6-UcvLpD_B42M20_KwpSqVMSJ7WFMc4Y',
    questionCount: 2,
    createdAt: '2024-07-15T07:37:47.635291Z',
  },
  {
    id: 7433,
    name: 'people',
    imageSource:
      'https://fastly.picsum.photos/id/345/200/200.jpg?hmac=8FJWKiYOThZ6-UcvLpD_B42M20_KwpSqVMSJ7WFMc4Y',
    questionCount: 0,
    createdAt: '2024-07-15T07:36:35.355290Z',
  },
  {
    id: 7421,
    name: '나는 체리',
    imageSource:
      'https://fastly.picsum.photos/id/208/200/200.jpg?hmac=J1BdqRgAAAId9wernbPINrW38haBGOtrpEqn3m2wjlY',
    questionCount: 0,
    createdAt: '2024-07-13T12:19:38.364344Z',
  },
  {
    id: 7420,
    name: '나는 체리',
    imageSource:
      'https://fastly.picsum.photos/id/345/200/200.jpg?hmac=8FJWKiYOThZ6-UcvLpD_B42M20_KwpSqVMSJ7WFMc4Y',
    questionCount: 0,
    createdAt: '2024-07-13T12:19:38.330595Z',
  },
  {
    id: 7419,
    name: '나는 체리',
    imageSource:
      'https://fastly.picsum.photos/id/913/200/200.jpg?hmac=MQWqYyJuxoagkUNdhY5lwuKw7QwcqzMEm4otshKpUWQ',
    questionCount: 0,
    createdAt: '2024-07-13T12:14:30.361398Z',
  },
  {
    id: 7418,
    name: '나는 체리',
    imageSource:
      'https://fastly.picsum.photos/id/345/200/200.jpg?hmac=8FJWKiYOThZ6-UcvLpD_B42M20_KwpSqVMSJ7WFMc4Y',
    questionCount: 0,
    createdAt: '2024-07-13T12:14:30.325535Z',
  },
  {
    id: 7417,
    name: '나는 체리',
    imageSource:
      'https://fastly.picsum.photos/id/502/200/200.jpg?hmac=c6mcZ5mcmjadIeDKaJClpvPz9R9-X9q6c0Un-n73Kv4',
    questionCount: 0,
    createdAt: '2024-07-13T12:14:25.341533Z',
  },
  {
    id: 7416,
    name: '나는 체리',
    imageSource:
      'https://fastly.picsum.photos/id/505/200/200.jpg?hmac=c295sjTIAZ_9Gj-PENrzAbATNIiWPL1dmhIhWndYnyo',
    questionCount: 0,
    createdAt: '2024-07-13T12:14:25.341489Z',
  },
];

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
  const { ref, cardWidth } = useResizeObserver();

  // const handleUlClass = () => {
  //   if (indexLimit === 8 && cardWidth === 186) {
  //     setIndexLimit(6);
  //     setUlClassName(styles['question-list-main__cards--small']);
  //   } else if (indexLimit === 8 && cardWidth === 220) {
  //     setIndexLimit(8);
  //     setUlClassName(styles['question-list-main__cards--large']);
  //   }
  // };

  const handleQuestions = async ({ limit, offset }: SubjectListParams) => {
    const { count, results } = await getSubjectList({ limit, offset });
    setQuestions(results);
    setCurrentPage(1);
    setMaxIndex(count);
  };

  useEffect(() => {
    handleQuestions({ limit: indexLimit, offset: currentPage });
  }, []);

  return (
    <ul className={`${styles['question-list-main__cards']} ${ulClassName}`}>
      {mockData.slice(0, indexLimit).map((e) => {
        return (
          <li key={e.id} ref={ref}>
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
