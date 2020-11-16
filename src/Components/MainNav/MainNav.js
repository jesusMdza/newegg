import React from 'react';
import './MainNav.scss';

const MainNav = () => {
  return (
    <div className="nav">
      <div className="logo">NCASE</div>
      <div className="link-container">
        <a className="link">Search</a>
        <a className="link">Products</a>
      </div>
      <div className="drawer"></div>
    </div>
  );
};

export default MainNav;
