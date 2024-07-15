import Reaction from '../../core/ui/Reaction/Reaction';

function MainPage() {
  return (
    <>
      <Reaction
        likeCount={12}
        onClickLike={() => {}}
        onClickDislike={() => {}}
        isLiked={false}
        isDisliked={true}
      />
    </>
  );
}

export default MainPage;
