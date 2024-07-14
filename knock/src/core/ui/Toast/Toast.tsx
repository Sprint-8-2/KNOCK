import React, { useState, useEffect } from 'react';
import styles from '../../styles/toast.module.scss';

const Toast: React.FC = () => {
  const [alert, alertSet] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      alertSet(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {alert === true ? (
        <div className={`${styles['layout']}`}>
          <div className={`${styles['text']}`}>URL이 복사되었습니다</div>
        </div>
      ) : null}
    </>
  );
};

export default Toast;
