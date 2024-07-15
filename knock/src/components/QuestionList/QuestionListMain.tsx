import Dropdown from '../../core/ui/Dropdown/Dropdown';
import Icon from '../../core/ui/CommonIcon/icon';

import ArrowDownIcon from '../../core/assets/icon/Arrow-down.svg';
import ArrowUpIcon from '../../core/assets/icon/Arrow-up.svg';
import QuestionListPagination from './QuestionListPagination';

import styles from './QuestionListMain.module.scss';

const QuestionListMain = () => {
  return (
    <main className={styles['question-list-main']}>
      <section className={styles['question-list-title']}>
        <h1>누구에게 질문할까요?</h1>
        <Dropdown
          handleSelectElement={() => {}}
          dropdownElementList={['이름순', '최신순']}
          selected="이름순"
        >
          <p className={styles['question-list-title__dropdown']}>
            <span>이름순</span>
            <Icon
              className={styles['question-list-title__dropdown--icon']}
              src={ArrowUpIcon}
              alt="드랍다운 화살표"
            />
          </p>
        </Dropdown>
      </section>
      <QuestionListPagination />
    </main>
  );
};

export default QuestionListMain;
