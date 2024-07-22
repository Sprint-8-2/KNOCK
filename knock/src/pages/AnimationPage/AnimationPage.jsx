import './AnimationPage.scss';
import StartAnimationPage from './StartAnimationPage';
import MainPgaeExplain from './MainPageExplain';
import Logo from '../../core/assets/animationImage/Animation-Logo.png';
import FeedExplain from './FeedExplain';
import ListPageExplain from './ListPageExplain';
import AnswerExplain from './AnswerExplain';

const AnimationPage = () => {
  return (
    <div className="merge-container">
      <div className="section-logo-container">
        <img className="section-logo-image" src={Logo} alt="로고 이미지" />
      </div>
      <StartAnimationPage />
      <MainPgaeExplain />
      <ListPageExplain />
      <FeedExplain />
      <AnswerExplain />
    </div>
  );
};

export default AnimationPage;
