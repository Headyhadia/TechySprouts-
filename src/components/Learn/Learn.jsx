import React from 'react';

import styles from './Learn.module.css';
import { getImageUrl } from '../../utils';

const Learn = () => {
  return (
    <div className={styles.container}>
        <div className={styles.learn}>
            <h1 className ={styles.title}>Learn Coding in Gamified way!</h1>
            <div className={styles.para}>
            <p >Join Pakistan's most exciting Coding Academy for kids. Build Games, Apps and unleash your creativity!</p>
        </div>
        <div className={styles.buttons}>
            <a href='#courses'>Start Learning</a>
            <a href='/'>Watch Demo</a>
            </div>
        </div>
        <div className={styles.kidsdiv}>
            <img className={styles.kids} src={getImageUrl("./learn/codingkids.jpg")} alt="Kids with laptop coding" />
        </div>
    </div>
  )
}

export default Learn