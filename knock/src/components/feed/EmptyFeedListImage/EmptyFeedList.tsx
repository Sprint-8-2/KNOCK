import Image from '../../../core/ui/CommonImage/Image';
import ImageEmptyQuestion from '../../../core/assets/image/EmptyQuestion.svg';

interface EmptyFeedListImageProps {
  className: string;
}

const EmptyFeedListImage = ({ className }: EmptyFeedListImageProps) => {
  return (
    <>
      <Image
        containerClassName={className}
        src={ImageEmptyQuestion}
        alt="빈 질문"
      />
    </>
  );
};

export default EmptyFeedListImage;
