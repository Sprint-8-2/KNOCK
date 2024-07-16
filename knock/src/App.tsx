import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ModalPage from './pages/ModalPage';
import prifileimage from './core/assets/image/Profilephoto.svg';

function App() {
  return (
    <BrowserRouter>
      <ModalPage
        name="아초는 고양이"
        alt="고양이귀여워"
        src={prifileimage}
        questionId="1"
      />
      <Routes>
        <Route index element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
