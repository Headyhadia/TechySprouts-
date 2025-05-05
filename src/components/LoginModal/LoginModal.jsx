import React, { useState } from 'react';
import Form from '../Form/Form';
import styles from './LoginModal.module.css';

const LoginModal = ({isOpen, closeModal}) => {
    const [isSignUp, setSignUp] = useState(false);
    
    const handleToggleForm = () => {
        setSignUp(prevState => !prevState);
    }

    if (!isOpen) return null;

  return (
    
    <div className={styles.overlay}>
        <div className={styles.modalcontent}>
            <div className={styles.btndiv}>
            <button onClick={closeModal} className={styles.closebtn}>
            <img src="/assets/modal/cross.png" alt="cross icon" />
            </button>
            </div>
            <div className={styles.form}>
                <Form isSignUp={isSignUp} toggleForm={handleToggleForm}/>
            </div>
        </div>
    </div>
  )
}

export default LoginModal