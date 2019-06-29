import React from 'react';

const Header = ({data}) => {
  if(data){
        var nav = data.nav.map((val, index) => (
          <li key={index}>
            <a  href={val.link} title="">
              {val.title}
            </a>
          </li>
        ));
  }
  return (
    <header className="mobile">
      <div className="row">
        <div className="col full">
          <div className="logo">
            <a href="#intro">
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
              {nav}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;