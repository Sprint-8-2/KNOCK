import React, { useState } from 'react';
import style from './CreateQuestionPage.module.scss';
import UButton from '../core/ui/buttons/UButton/UButton';
import ModalCrateQuestion from '../components/Modal/ModalCrateQuestion';
import ErrorModal from '../components/Modal/Error';
import useSubmitQuestion from '../lib/hooks/useSubmitQuestion';

interface CreateQuestionPageProps {
  name: string;
  src: string;
  alt: string;
  subjectId: number | string;
}

const CreateQuestionPage: React.FC<CreateQuestionPageProps> = ({
  name,
  src,
  alt,
  subjectId,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [textareaValue, setTextareaValue] = useState('');
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
    setTextareaValue('');
    setIsActivation(true);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setTextareaValue(event.target.value);
    setIsActivation(event.target.value.trim().length === 0);
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
      <ModalCrateQuestion
        isOpen={modalOpen}
        onClose={handleModalClose}
        onSubmit={handleSubmit}
        onChange={handleTextareaChange}
        isActivation={isActivation}
        isLoading={isLoading}
        name={name}
        src={src}
        alt={alt}
        textareaValue={textareaValue}
      />
      <ErrorModal isOpen={errorModalOpen} onClose={handleErrorModalClose} />
    </>
  );
};

export default CreateQuestionPage;
