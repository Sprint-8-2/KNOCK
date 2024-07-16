import styles from '../../styles/toast.module.scss';

interface ToastProps {
  toastMessage: string;
}

const Toast: React.FC<ToastProps> = ({ toastMessage }) => {
  return (
    <>
      <div className={styles['layout']}>
        <div className={styles['text']}>{toastMessage}</div>
      </div>
    </>
  );
};

export default Toast;
