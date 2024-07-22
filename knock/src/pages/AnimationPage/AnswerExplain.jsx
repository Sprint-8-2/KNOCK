import AnimatedImage from '../../components/Animation/AnimatedImage';
import ListenImage from '../../core/assets/animationImage/ainmation2.png';
import AnswerImage from '../../core/assets/animationImage/AnswerPageImage.png';
import AnswerComplete from '../../core/assets/animationImage/AnswerComplete.png';
import './AnswerExplain.scss';
import AnimatedText from '../../components/Animation/AnimatedText';

const AnswerExplain = () => {
  return (
    <div className="answer-explain">
      <AnimatedImage
        className="answer-explain__listen-image"
        src={ListenImage}
        alt="듣는이미지"
        animationStartPoint="Right_slide_StartPoint"
        animationEndPoint="Right_slide_EndPoint"
        triggerPoint={3600}
      />

      <AnimatedImage
        className="answer-explain__page-image"
        src={AnswerImage}
        alt="답변하기 페이지"
        animationStartPoint="Left_slide_StartPoint"
        animationEndPoint="Left_slide_EndPoint"
        triggerPoint={3600}
      />

      <AnimatedImage
        className="answer-explain__complete-image"
        src={AnswerComplete}
        alt="답변 완료 이미지"
        animationStartPoint="AnswerComplete_Left_slide_StartPoint"
        animationEndPoint="AnswerComplete_Left_slide_EndPoint"
        triggerPoint={3600}
      />

      <AnimatedText
        animationStartPoint="text_message_StartPoint"
        animationEndPoint="text_message_EndPoint"
        triggerPoint={3600}
        className="answer-explain__message"
      >
        <div className="answer-container">
          <span className="answer-explain__message-1">
            질문에 답할 수 있습니다
          </span>
          <span className="answer-explain__message-2">
            당신의 답변을 기다립니다
          </span>
        </div>
      </AnimatedText>
    </div>
  );
};
export default AnswerExplain;
