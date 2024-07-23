import AnimatedImage from '../../components/Animation/AnimatedImage';
import ListenImage from '../../core/assets/animationImage/ainmation2.png';
import ListImage from '../../core/assets/animationImage/ListPageImage.png';
import './ListPageExplain.scss';
import AnimatedText from '../../components/Animation/AnimatedText';

const ListPageExplain: React.FC = () => {
  return (
    <div className="list-explain">
      <AnimatedImage
        className="list-explain__listen-image"
        src={ListImage}
        alt="듣는이미지"
        animationStartPoint="Left_slide_StartPoint"
        animationEndPoint="Left_slide_EndPoint"
        triggerPoint={1200}
      />

      <AnimatedText
        animationStartPoint="text_message_StartPoint"
        animationEndPoint="text_message_EndPoint"
        triggerPoint={1200}
        className="list-explain__message"
      >
        <div className="list-container">
          <span className="list-explain__message-1">
            질문하고 싶은 카드를 선택해주세요
          </span>
          <span className="list-explain__message-2">
            여러분의 질문을 기다립니다
          </span>
        </div>
      </AnimatedText>

      <AnimatedImage
        className="list-explain__page-image"
        src={ListenImage}
        alt="리스트페이지 이미지"
        animationStartPoint="Right_slide_StartPoint"
        animationEndPoint="Right_slide_EndPoint"
        triggerPoint={1200}
      />
    </div>
  );
};
export default ListPageExplain;
