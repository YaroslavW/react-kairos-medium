import React from 'react';

const Portfolio = ({data}) => {
  if(data){
    console.log(data.header.title)
    var header = data.header.title;
    var desc = data.header.desc;
    var text = data.header.text;
  }
  return (
    <section id="portfolio">
      <div className="row section-head">
        <div className="col full">
          <h2>{header}</h2>
          <p className="desc">{desc}</p>

          <p className="intro">
            {text}
          </p>
        </div>
      </div>

      <div className="row">
        <div id="portfolio-wrapper">
          <div className="col portfolio-item">
            <div className="item-wrap">
              {/* eslint-disable-next-line */}
              <a href="#" data-reveal-id="modal-01">
                <img src="images/portfolio/cosmic-sneakers.jpg" alt="" />
              </a>
              <div className="portfolio-item-meta">
                {/* eslint-disable-next-line */}
                <h5>
                  {/* eslint-disable-next-line */}
                  <a href="#">Cosmic Sneakers</a>
                </h5>
              </div>
            </div>
          </div>
{/* /2 */}
          <div className="col portfolio-item">
            <div className="item-wrap">
              {/* eslint-disable-next-line */}
              <a href="#" data-reveal-id="modal-02">
                <img src="images/portfolio/milk-splash.jpg" alt="" />
              </a>
              <div className="portfolio-item-meta">
                <h5>
                  {/* eslint-disable-next-line */}
                  <a href="#">Milk Splash</a>
                </h5>
              </div>
            </div>
          </div>
{/* 3 */}
          <div className="col portfolio-item">
            <div className="item-wrap">
              {/* eslint-disable-next-line */}
              <a href="#" data-reveal-id="modal-03">
                <img src="images/portfolio/eve.jpg" alt="" />
              </a>
              <div className="portfolio-item-meta">
                <h5>
                  {/* eslint-disable-next-line */}
                  <a href="#">Eve</a>
                </h5>
              </div>
            </div>
          </div>
{/* 4 */}
          <div className="col portfolio-item">
            <div className="item-wrap">
              {/* eslint-disable-next-line */}
              <a href="#" data-reveal-id="modal-04">
                <img src="images/portfolio/sneaker-splash.jpg" alt="" />
              </a>
              <div className="portfolio-item-meta">
                <h5>
                  {/* eslint-disable-next-line */}
                  <a href="#">Sneaker Splash</a>
                </h5>
              </div>
            </div>
          </div>
{/* 5 */}
          <div className="col portfolio-item">
            <div className="item-wrap">
              {/* eslint-disable-next-line */}
              <a href="#" data-reveal-id="modal-05">
                <img src="images/portfolio/judah.jpg" alt="" />
              </a>
              <div className="portfolio-item-meta">
                <h5>
                  {/* eslint-disable-next-line */}
                  <a href="#">Judah</a>
                </h5>
              </div>
            </div>
          </div>
{/* 6 */}
          <div className="col portfolio-item">
            <div className="item-wrap">
              {/* eslint-disable-next-line */}
              <a href="#" data-reveal-id="modal-06">
                <img src="images/portfolio/vector-flower.jpg" alt="" />
              </a>
              <div className="portfolio-item-meta">
                <h5>
                  {/* eslint-disable-next-line */}
                  <a href="#">Vector Flower</a>
                </h5>
              </div>
            </div>
          </div>
{/* 7 */}
          <div className="col portfolio-item">
            <div className="item-wrap">
              {/* eslint-disable-next-line */}
              <a href="#" data-reveal-id="modal-07">
                <img src="images/portfolio/clock.jpg" alt="" />
              </a>
              <div className="portfolio-item-meta">
                <h5>
                  {/* eslint-disable-next-line */}
                  <a href="#">Clock</a>
                </h5>
              </div>
            </div>
          </div>
{/* 8 */}
          <div className="col portfolio-item">
            <div className="item-wrap">
              {/* eslint-disable-next-line */}
              <a href="#" data-reveal-id="modal-08">
                <img src="images/portfolio/fields.jpg" alt="" />
              </a>
              <div className="portfolio-item-meta">
                <h5>
                  {/* eslint-disable-next-line */}
                  <a href="#">Fields</a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MODAL */}
      <div id="modal-01" className="reveal-modal">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-cosmic-sneakers.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>The Cosmic Sneakers</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec
            sagittis sem nibh id elit.
          </p>
          <span className="categories">
            <i className="icon-tag" />
            Branding, Web Design
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          {/* eslint-disable-next-line */}
          <a className="close-reveal-modal">Close</a>
        </div>
      </div>
{/* 2 */}
      <div id="modal-02" className="reveal-modal">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-milk-splash.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Milk Splash</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec
            sagittis sem nibh id elit.
          </p>
          <span className="categories">
            <i className="icon-tag" />
            Branding, Web Design
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          {/* eslint-disable-next-line */}
          <a className="close-reveal-modal">Close</a>
        </div>
      </div>
{/* 3 */}
      <div id="modal-03" className="reveal-modal">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-eve.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Eve</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec
            sagittis sem nibh id elit.
          </p>
          <span className="categories">
            <i className="icon-tag" />
            Photography, Branding
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          {/* eslint-disable-next-line */}
          <a className="close-reveal-modal">Close</a>
        </div>
      </div>
{/* 4 */}
      <div id="modal-04" className="reveal-modal">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-sneaker-splash.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Sneaker Splash</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec
            sagittis sem nibh id elit.
          </p>
          <span className="categories">
            <i className="icon-tag" />
            Photography, Branding
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          {/* eslint-disable-next-line */}
          <a className="close-reveal-modal">Close</a>
        </div>
      </div>
{/* 5 */}
      <div id="modal-05" className="reveal-modal">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-judah.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Judah</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec
            sagittis sem nibh id elit.
          </p>
          <span className="categories">
            <i className="icon-tag" />
            Photography, Web Design
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          {/* eslint-disable-next-line */}
          <a className="close-reveal-modal">Close</a>
        </div>
      </div>

      <div id="modal-06" className="reveal-modal">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-vector-flower.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Vector Flower</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec
            sagittis sem nibh id elit.
          </p>
          <span className="categories">
            <i className="icon-tag" />
            Branding, Web Design
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          {/* eslint-disable-next-line */}
          <a className="close-reveal-modal">Close</a>
        </div>
      </div>
{/* 7 */}
      <div id="modal-07" className="reveal-modal">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-clock.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Clock</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec
            sagittis sem nibh id elit.
          </p>
          <span className="categories">
            <i className="icon-tag" />
            Branding, Web Design
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          {/* eslint-disable-next-line */}
          <a className="close-reveal-modal">Close</a>
        </div>
      </div>

      <div id="modal-08" className="reveal-modal">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-fields.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Fields</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec
            sagittis sem nibh id elit.
          </p>
          <span className="categories">
            <i className="icon-tag" />
            Photography
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          {/* eslint-disable-next-line */}
          <a className="close-reveal-modal">Close</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;