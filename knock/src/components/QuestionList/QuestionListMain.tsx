import { useState } from 'react';

import Dropdown from '../../core/ui/Dropdown/Dropdown';
import QuestionListPagination from './QuestionListPagination';

import ArrowDownIcon from '../../core/assets/icon/Arrow-down.svg';

import styles from './QuestionListMain.module.scss';

const QuestionListMain = () => {
  const [order, setOrder] = useState<'name' | 'time'>('time');
  const dropdownElementlist = [
    { selected: 'name', content: '이름순' },
    { selected: 'time', content: '최신순' },
  ];

  const handleOrder = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    if (target.dataset['selected'] === 'name') {
      setOrder('name');
    } else if (target.dataset['selected'] === 'time') {
      setOrder('time');
    }
  };

  return (
    <main className={styles['question-list-main']}>
      <section className={styles['question-list-title']}>
        <h1>누구에게 질문할까요?</h1>
        <Dropdown
          handleSelectElement={handleOrder}
          dropdownElementList={dropdownElementlist}
          selected={order}
          iconSrc={ArrowDownIcon}
        >
          <p className={styles['question-list-title__dropdown']}>
            <span>{order === 'name' ? '이름순' : '최신순'}</span>
          </p>
        </Dropdown>
      </section>
      <QuestionListPagination order={order} />
    </main>
  );
};

export default QuestionListMain;
