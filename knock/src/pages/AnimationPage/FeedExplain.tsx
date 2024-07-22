import AnimatedImage from '../../components/Animation/AnimatedImage';
import TalkImage from '../../core/assets/animationImage/ainmation1.png';
import FeedPage from '../../core/assets/animationImage/FeedPageImage.png';
import ModalPage from '../../core/assets/animationImage/ModalImage.png';
import './FeedExplain.scss';
import AnimatedText from '../../components/Animation/AnimatedText';

const FeedExplain: React.FC = () => {
  return (
    <div className="feed-explain">
      <AnimatedImage
        className="feed-explain__talk-image"
        src={TalkImage}
        alt="말하는이미지"
        animationStartPoint="Left_slide_StartPoint"
        animationEndPoint="Left_slide_EndPoint"
        triggerPoint={2400}
      />

      <AnimatedImage
        className="feed-explain__page-image"
        src={FeedPage}
        alt="메인페이지설명이미지"
        animationStartPoint="Right_slide_StartPoint"
        animationEndPoint="Right_slide_EndPoint"
        triggerPoint={2400}
      />

      <AnimatedImage
        className="feed-explain__modal-image"
        src={ModalPage}
        alt="모달페이지이미지"
        animationStartPoint="Modal_Right_slide_StartPoint"
        animationEndPoint="Modal_Right_slide_EndPoint"
        triggerPoint={2400}
      />

      <AnimatedText
        animationStartPoint="text_message_StartPoint"
        animationEndPoint="text_message_EndPoint"
        triggerPoint={2400}
        className="feed-explain__message"
      >
        <div className="feed-container">
          <span className="feed-explain__message-1">질문을 보내서</span>
          <span className="feed-explain__message-2">상대방과 소통해보세요</span>
        </div>
      </AnimatedText>
    </div>
  );
};
export default FeedExplain;
