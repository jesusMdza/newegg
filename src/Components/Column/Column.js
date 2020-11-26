import React from 'react';
import styles from './Column.module.scss';

const Column = ({ src, title, price }) => {
  return (
    <div className={`col ${styles.column}`}>
      <img src={src} />
      <h3 className={`${styles.heading}`}>{title}</h3>
      <span className={`${styles.price}`}>${price}</span>
    </div>
  );
};

export default Column;
