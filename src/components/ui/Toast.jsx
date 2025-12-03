import { useEffect } from 'react';
import { BsCheckCircleFill, BsInfoCircleFill } from "react-icons/bs";
import './Toast.css';

const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className={`toast-container ${type}`}>
      <div className="toast-icon">
        {type === 'success' ? <BsCheckCircleFill /> : <BsInfoCircleFill />}
      </div>
      <span className="toast-message">{message}</span>
      <div className="toast-progress" style={{ animationDuration: `${duration}ms` }}></div>
    </div>
  );
};

export default Toast;