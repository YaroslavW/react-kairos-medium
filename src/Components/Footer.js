import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col g-7">
          <ul className="copyright">
            <li>&copy; 2014 Kreative</li>
            <li>
              Design by{" "}
              <a href="http://www.styleshout.com/" title="Styleshout">
                Styleshout
              </a>
            </li>
          </ul>
        </div>

        <div className="col g-5 pull-right">
          <ul className="social-links">
            <li>
              {/* eslint-disable-next-line */}
              <a href="#">
                <i className="icon-facebook" />
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#">
                <i className="icon-twitter" />
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#">
                <i className="icon-google-plus-sign" />
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#">
                <i className="icon-linkedin" />
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#">
                <i className="icon-skype" />
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#">
                <i className="icon-rss-sign" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;