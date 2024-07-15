import React, { useState, useEffect } from 'react';
import styles from '../../styles/toast.module.scss';

const Toast: React.FC<ToastProps> = ({ showToast, toastMessage }) => {
  const [showToastState, setShowToast] = useState(true);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <>
      {showToastState && (
        <div className={styles['layout']}>
          <div className={styles['text']}>{toastMessage}</div>
        </div>
      )}
    </>
  );
};

interface ToastProps {
  showToast: boolean;
  toastMessage: string;
}

export default Toast;
