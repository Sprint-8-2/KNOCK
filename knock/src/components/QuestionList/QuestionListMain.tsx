import { useState } from 'react';

import Dropdown from '../../core/ui/Dropdown/Dropdown';

import ArrowDownIcon from '../../core/assets/icon/Arrow-down.svg';
import QuestionListPagination from './QuestionListPagination';

import styles from './QuestionListMain.module.scss';

const QuestionListMain = () => {
  const [order, setOrder] = useState<string>('최신순');

  const handleOrder = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setOrder((e.target as HTMLElement).innerText);
  };

  return (
    <main className={styles['question-list-main']}>
      <section className={styles['question-list-title']}>
        <h1>누구에게 질문할까요?</h1>
        <Dropdown
          handleSelectElement={handleOrder}
          dropdownElementList={['이름순', '최신순']}
          selected={order}
          iconSrc={ArrowDownIcon}
        >
          <p className={styles['question-list-title__dropdown']}>
            <span>{order}</span>
          </p>
        </Dropdown>
      </section>
      <QuestionListPagination order={order} />
    </main>
  );
};

export default QuestionListMain;
