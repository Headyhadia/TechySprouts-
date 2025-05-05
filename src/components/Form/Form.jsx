import React from 'react';
import styles from './Form.module.css';

const Form = ({isSignUp, toggleForm}) => {
  return (
    <div className={styles.formcontainer}>
        {
            isSignUp ? (
                <div className={styles.signupform}>
                    <h2 className={styles.formheading}>Sign Up</h2>
                    <form className={styles.modalform}>
                        <label htmlFor="email">Email
                            <input type="text" placeholder='username@gmail.com' className={styles.signupinput} id='email'/>
                        </label> <br />
                        <label htmlFor="password">Password
                            <input type="text" placeholder='Password' className={styles.signupinput} id='password'/>
                        </label> <br />
                        <label htmlFor="confirmpass">Confirm Password
                            <input type="text" placeholder='Password' className={styles.signupinput} id='confirmpass'/>
                        </label> <br />
                      <div className={styles.firstbtndiv}>  <button className={styles.firstbtn}>Sign Up</button> </div>
                    </form>
                <p>Already have an account?</p> 
                <button onClick={toggleForm} className={styles.secondbtn}>Login</button>
                </div>
            )
            : (
                <div className={styles.loginform}>
                    <h2 className={styles.formheading}>Login</h2>
                    <form className={styles.modalform}>
                        <label htmlFor="emaillog">Email
                            <input type="text" placeholder='username' className={styles.signininput} id='emaillog'/>
                        </label> <br />
                        <label htmlFor="passwordlg">Password
                            <input type="text" placeholder='password' className={styles.signininput} id='passwordlg'/>
                        </label> <br />
                        <a href="/">Forgot Password?</a> <br />
                       <div className={styles.firstbtndiv}> <button className={styles.firstbtn}>Login</button> <br /></div>
                    </form>
                    
                    <p>Don't have an account?</p>
                    <button onClick={toggleForm} className={styles.secondbtn}>Sign Up</button>
                </div>
            )
        }
    </div>
  )
}

export default Form