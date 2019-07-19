import React from 'react';
import styles from '../Controls/Controls.module.css';

const Controls = ({ count, length, onPlusCounter, onMinusCounter }) => {
  return (
    <section className={styles.controls}>
      {count !== 1 ? (
        <button onClick={onMinusCounter} className={styles.button} type="button">
          Назад
        </button>
      ) : (
        <button onClick={onMinusCounter} className={styles.buttonDisable} type="button">
          Назад
        </button>
      )}
      {count !== length ? (
        <button onClick={onPlusCounter} className={styles.button} type="button">
          Вперед
        </button>
      ) : (
        <button onClick={onPlusCounter} className={styles.buttonDisable} type="button">
          Вперед
        </button>
      )}
    </section>
  );
};

export default Controls;
