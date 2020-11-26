import React from 'react';
import styles from './Column.module.scss';

const Column = ({ src, title, price }) => {
  return (
    <div className={`${styles.column}`}>
      <div className={`${styles.block}`}>
        <div
          className={`d-flex justify-content-center align-items-center ${styles.productBadge}`}
        >
          <span className={`${styles.productBadgeText}`}>Out Of Stock</span>
        </div>
        <div className={`${styles.imageContainer}`}>
          <img src={src} />
        </div>
        <div className={`${styles.detailsSection}`}>
          <h3 className={`mb-0 ${styles.heading}`}>{title}</h3>
          <span className={`${styles.price}`}>${price}</span>
        </div>
      </div>
    </div>
  );
};

export default Column;
