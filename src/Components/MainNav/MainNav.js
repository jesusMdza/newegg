import React from 'react';
import styles from './MainNav.module.scss';
import { Navbar, Nav } from 'react-bootstrap';

const MainNav = () => {
  return (
    <div className={styles.mainNav}>
      <Navbar className={`container ${styles.nav}`} expand="xl">
        <Navbar.Brand href="/home">newegg</Navbar.Brand>
        <Nav className="ml-auto align-items-center">
          <Nav.Link className={`${styles.link} ${styles.cart}`} href="/cart">
            <img className={styles.cartIcon} src="/images/cart_bag.svg" />
            <span className={styles.cartAmount}>0</span>
          </Nav.Link>
          <img className={styles.hamburger} src="/images/hamburger.svg" />
        </Nav>
      </Navbar>
    </div>
  );
};

export default MainNav;
