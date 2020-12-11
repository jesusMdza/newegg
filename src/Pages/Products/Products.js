import React, { useContext } from 'react';
import styles from './Products.module.scss';
import Context from '../../Context/Context';

const Products = ({ match }) => {
  const { data } = useContext(Context);
  const product = data.find((object, index) => index == match.params.id);

  return (
    <div className={`d-flex ${styles.product}`}>
      <div className={styles.columnLeft}>
        <img src={product.src} />
      </div>
      <div className={styles.columnRight}>
        <h1 className="mb-4">{product.title}</h1>
        <h2 className="mb-4">${product.price}</h2>
        <div className={styles.colors}>
          <h5>Color</h5>
          <div>
            <h3 className={styles.subtitle}></h3>
            <div className={styles.someColor}></div>
          </div>
        </div>
        <div className={styles.moreInfo}>
          <div className></div>
        </div>
        <div className={styles.submit}>
          <button className={`w-100 ${styles.submit}`}>Add To Cart</button>
        </div>
        <div className={styles.moreInfo}>
          <h3 className={styles.subtitle}>Stock Notification</h3>
          <span className={styles.subtext}></span>
        </div>
        <div className={`d-flex ${styles.urgent}`}>
          <div className={`d-flex justify-content-center ${styles.warningBar}`}>
            <img
              className={styles.warningIcon}
              src="/icons/warning.svg"
              alt="warning-label"
            />
          </div>
          <div className={`p-2`}>
            <p>
              Due to reduced flights worldwide as a result of COVID-19 it's not
              possible to ship air mail to many countries from Taiwan. In
              addition, shipping and customs processing may be significantly
              delayed to the countries we can ship to.
            </p>
            <p>Currently we're only able to ship to the following countries:</p>

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
            <div className={styles.description}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
