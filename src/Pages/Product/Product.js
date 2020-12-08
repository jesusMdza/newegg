import React from 'react';
import styles from './Product.module.scss';

const Product = ({ src, title, price }) => {
  return (
    <div className={styles.product}>
      <div className={styles.productLeft}>
        <img src={src} />
      </div>
      <div className={styles.productRight}>
        <h1>{title}</h1>
        <h2>${price}</h2>
        <div className={styles.colors}>
          <div>
            <h3 className={styles.subtitle}></h3>
            <div className={styles.someColor}></div>
          </div>
        </div>
        <div className={styles.moreInfo}>
          <div className></div>
        </div>
        <div className={styles.submit}>
          <div className={styles.quantity}>1</div>
          <button className={styles.submit}>Add To Cart</button>
        </div>
        <div className={styles.urgent}>
          <div>!</div>
          <p>
            Due to reduced flights worldwide as a result of COVID-19 it's not
            possible to ship air mail to many countries from Taiwan. In
            addition, shipping and customs processing may be significantly
            delayed to the countries we can ship to.
            <br /> 10/29 update: Taiwan Post reports that air mail to France,
            UK, and Malaysia may be subject to extended delay due to COVID.
            <br />
            Currently we're only able to ship to the following countries:
          </p>

          <p>North America:</p>
          <ul>
            <li>Canada (EMS only)</li>
            <li>United States (excluding Alaska, Hawaii, and Guam)</li>
          </ul>

          <p>Europe</p>
          <ul>
            <li>Belgium (EMS only)</li>
            <li>...</li>
          </ul>
        </div>
        <div className={styles.moreInfo}>
          <h3 className={styles.subtitle}>Stock Notification</h3>
          <span className={styles.subtext}></span>
        </div>
        <div className={styles.description}></div>
      </div>
    </div>
  );
};

export default Product;
