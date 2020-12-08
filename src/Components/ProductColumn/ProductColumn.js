import React from 'react';
import styles from './ProductColumn.module.scss';

const ProductColumn = ({ src, title, price, index }) => {
  return (
    <a href={`/products/${index}`}>
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
    </a>
  );
};

export default ProductColumn;
