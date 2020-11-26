import React from 'react';
import styles from './Home.module.scss';
import { Image, Button } from 'react-bootstrap';
import ContainerGrid from '../ContainerGrid/ContainerGrid';

const Home = () => {
  return (
    <div className={`${styles.home}`}>
      <div className={`position-relative`}>
        <Image className={`${styles.image}`} src="/images/ryzen.jpg" fluid />
        <div className="container">
          <div className={`position-absolute ${styles.imageContainer}`}>
            <div className={`${styles.titleHeading}`}>
              <h1>Ryzen 5 3600</h1>
              <Button className={`${styles.buttonPrimary} text-uppercase`}>
                Order Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      <ContainerGrid />
    </div>
  );
};

export default Home;
