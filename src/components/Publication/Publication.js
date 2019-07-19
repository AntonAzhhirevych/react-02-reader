import React from 'react';
import styles from '../Publication/Publication.module.css';

const Publication = ({ items }) => {
  return (
    <article id={items.id} className={styles.publication}>
      <h2 className={styles.publicationTitle}>{items.title}</h2>
      <p className={styles.publicationText}>{items.text}</p>
    </article>
  );
};

export default Publication;
