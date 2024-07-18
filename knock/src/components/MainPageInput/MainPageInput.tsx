import React from 'react';
import HumanIcon from '../../core/assets/icon/Person.svg';
import styles from './mainPageInput.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiHandler } from '../../lib/api/APIHandler';

interface MainPageInputProps {
  onSubmit: (name: string) => void;
  placeholder: string;
  submitButtonText: string;
}

interface ApiResponse {
  id: string;
}

const MainPageInput: React.FC<MainPageInputProps> = ({
  onSubmit,
  placeholder,
  submitButtonText,
}) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [feedId, setFeedId] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(name);
    try {
      const response = await generateFeed(name);
      setFeedId(response.id);
      navigate(`/post/${feedId}/answer`);
    } catch (error) {
      console.log('Error generating feed:', error);
      throw error;
    }
  };

  const generateFeed = async (name: string): Promise<ApiResponse> => {
    try {
      const response = (await apiHandler.post('your-endpoint', {
        id: name,
      })) as ApiResponse;
      return response;
    } catch (error) {
      console.log('Error generating feed:', error);
      throw error;
    }
  };

  return (
    <div className={`${styles['container']}`}>
      <form className={`${styles['container__form']}`} onSubmit={handleSubmit}>
        <div className={`${styles['container__name-box']}`}>
          <img
            src={HumanIcon}
            alt="HumanIcon"
            className={`${styles['container__img']}`}
          />
          <input
            placeholder={placeholder}
            className={`${styles['container__input-box']}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value={submitButtonText}
          className={`${styles['container__submit-button']}`}
        />
      </form>
    </div>
  );
};
export default MainPageInput;
