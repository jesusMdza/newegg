import React from 'react';
import styles from './Home.module.scss';
import { Image, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div clasName={`${styles.contentContainer}`}>
      <div className={`${styles.imageContainer}`}>
        <Image src="/images/ryzen.jpg" fluid />
        <div className={`${styles.titleHeading}`}>
          <h1>RYZEN 5 3600x</h1>
          <Button className="text-uppercase">Order Now</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
