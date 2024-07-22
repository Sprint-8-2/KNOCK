import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import SubjectListHeader from '../components/SubjectList/SubjectListHeader';
import SubjectListMain from '../components/SubjectList/SubjectListMain';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const SubjectList = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <SubjectListHeader />
        <SubjectListMain />
      </QueryClientProvider>
    </>
  );
};

export default SubjectList;
