import React from 'react';
import styles from '../Counter/Counter.module.css';

const Counter = ({ start, end }) => {
  return (
    <p className={styles.counter}>
      {start}/{end}
    </p>
  );
};

export default Counter;
