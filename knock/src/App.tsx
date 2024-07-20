import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AnswerPage from './pages/AnswerPage';
import MainPage from './pages/MainPage';
import PostPage from './pages/PostPage';
import SubjectList from './pages/SubjectList';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="list" element={<SubjectList />} />
        <Route path="post/:id">
          <Route index element={<PostPage />} />
          <Route path="answer" element={<AnswerPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
