import React from 'react';

const Header = () => {
  return (
    <header className="mobile">
      <div className="row">
        <div className="col full">
          <div className="logo">
            {/* eslint-disable-next-line */}
            <a href="#">
              <img alt="" src="images/logo.png" />
            </a>
          </div>

          <nav id="nav-wrap">
            <a
              className="mobile-btn"
              href="#nav-wrap"
              title="Show navigation"
            >
              Show navigation
            </a>
            {/* eslint-disable-next-line */}
            <a className="mobile-btn" href="#" title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav" className="nav">
              <li>
                <a href="#intro">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#journal">Journal</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;