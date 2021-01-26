import React from 'react';

// Without this line the test is successful
import { setCount } from '../../redux/test-reducer';

import styles from './Home.module.scss';

const Home = () => {
  console.log();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to
          {' '}
          <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing
          {' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
      </main>
    </div>
  );
};

export default Home;
