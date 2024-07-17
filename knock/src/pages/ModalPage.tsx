import React, { useState } from 'react';
import './ModalPage.scss';
import UButton from '../core/ui/buttons/UButton/UButton';
import Modal from '../components/Modal/Modal';
import ErrorModal from '../components/Modal/ErrorModal';
import useSubmitQuestion from '../lib/hooks/useSubmitQuestion';

interface ModalPageProps {
  name: string;
  src: string;
  alt: string;
  subjectId: number;
}

const ModalPage: React.FC<ModalPageProps> = ({ name, src, alt, subjectId }) => {
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
      <div className="btn-wrapper">
        <UButton
          handleClick={handleModalOpen}
          type="floating"
          isLightTheme={true}
        >
          질문 작성하기
        </UButton>
      </div>
      <Modal
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
      <ErrorModal isOpen={errorModalOpen} isClose={handleErrorModalClose} />
    </>
  );
};

export default ModalPage;
