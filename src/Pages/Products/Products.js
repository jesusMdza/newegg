import React, { useContext } from 'react';
import styles from './Products.module.scss';
import Context from '../../Context/Context';
import InfoIcon from '../../Components/InfoIcon/InfoIcon';

const Products = ({ match }) => {
  const { data } = useContext(Context);
  const product = data.find((object, index) => index == match.params.id);

  return (
    <div className={`d-flex ${styles.product}`}>
      <div className={styles.columnLeft}>
        <img src={product.src} />
      </div>
      <div className={styles.columnRight}>
        <h1>{product.title}</h1>
        <h2>${product.price}</h2>
        <div className={styles.colors}>
          <h5>Color</h5>
          <div
            className={`d-flex justify-content-center align-items-center ${styles.swatch}`}
          >
            <div className={styles.colorBox} />
          </div>
        </div>

        <div className={styles.moreInfo}>
          <div className></div>
        </div>

        <div className={`d-flex ${styles.addToCartContainer}`}>
          <input
            className={`text-center ${styles.quantityInput}`}
            placeholder="Email Address"
            value="1"
          />
          <button className={`w-100 mb-4 ${styles.cartSubmit}`}>
            Add To Cart
          </button>
        </div>

        <div className={`${styles.notifyContainer}`}>
          <h5 className={styles.subtitle}>Stock Notification</h5>
          <div className={`d-flex align-items-center mb-3`}>
            <InfoIcon />
            <span className={styles.subtext}>
              Get notified when this product is restocked
            </span>
          </div>
          <div className={`w-100`}>
            <input
              type="email"
              className={styles.emailInput}
              placeholder="Email Address"
            />
            <button className={`${styles.notifySubmit}`}>Notify Me</button>
          </div>
        </div>

        <div className={`d-flex mb-4 ${styles.urgentContainer}`}>
          <div className={`d-flex justify-content-center ${styles.warningBar}`}>
            <img
              className={styles.warningIcon}
              src="/icons/warning.svg"
              alt="warning-label"
            />
          </div>
          <div className={styles.text}>
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
          </div>
        </div>

        <div className={`${styles.descriptionContainer}`}>
          <div className={`d-flex ${styles.descriptionHeader}`}>
            <div className={styles.descriptionLabel}>
              <span>Description</span>
            </div>
            <div className={styles.borderBottom}></div>
          </div>
          <div className={styles.descriptionContent}>
            <p>
              2mm ventilated aluminum top panel with Optical Disc Drive slot
              (replaces original top panel).
            </p>
            <ul>
              <li>Material: 2mm brushed anodized aluminum</li>
              <li>Compatible with all versions of the M1</li>
              <li>Not compatible with the M1 V1 front panel</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
