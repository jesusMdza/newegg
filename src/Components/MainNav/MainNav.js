import React from 'react';
import styles from './MainNav.module.scss';
import { Navbar, Nav } from 'react-bootstrap';

const MainNav = () => {
  return (
    <Navbar className="container" expand="xl">
      <Navbar.Brand href="/home">newegg</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNav;
