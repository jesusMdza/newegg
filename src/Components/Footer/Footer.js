import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <h5>Supported Payment Methods</h5>
        <div className={styles.cardsContainer}>
          <img src="/icons/american_express.svg" alt="" />
          <img src="/icons/amex.svg" alt="" />
          <img src="/icons/discover.svg" alt="" />
          <img src="/icons/jcb.svg" alt="" />
          <img src="/icons/visa.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
