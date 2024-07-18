import React, { useState } from 'react';
import style from './CreateQuestionPage.module.scss';
import UButton from '../core/ui/buttons/UButton/UButton';
import CrateQuestion from '../components/Modal/crateQuestion';
import Error from '../components/Modal/Error';
import useSubmitQuestion from '../lib/hooks/useSubmitQuestion';

interface ModalPageProps {
  name: string;
  src: string;
  alt: string;
  subjectId: number;
}

const CreateQuestionPage: React.FC<ModalPageProps> = ({
  name,
  src,
  alt,
  subjectId,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isActivation, setIsActivation] = useState(true);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const { handleSubmit, isLoading } = useSubmitQuestion({
    subjectId,
    onSuccess: () => setModalOpen(false),
    onError: () => {
      setModalOpen(false);
      setErrorModalOpen(true);
    },
  });

  const handleModalOpen = () => {
    setModalOpen(true);
    setIsActivation(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleErrorModalClose = () => {
    setErrorModalOpen(false);
  };

  return (
    <>
      <div className={style['btn-wrapper']}>
        <UButton
          handleClick={handleModalOpen}
          type="floating"
          isLightTheme={true}
        >
          질문 작성하기
        </UButton>
      </div>
      <CrateQuestion
        isOpen={modalOpen}
        onSubmit={(value) => {
          handleSubmit(value);
          setModalOpen(false);
        }}
        onClose={handleModalClose}
        onChange={() => {
          setIsActivation(false);
        }}
        isActivation={isActivation}
        isLoading={isLoading}
        name={name}
        src={src}
        alt={alt}
      />
      <Error
        isOpen={errorModalOpen}
        onClose={handleErrorModalClose}
        errorMessage="재작성 부탁드립니다."
      />
    </>
  );
};

export default CreateQuestionPage;
