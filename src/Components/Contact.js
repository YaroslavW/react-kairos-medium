import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="row section-head">
        <div className="col full">
          <h2>Contact Us</h2>
          <p className="desc">Get in touch with us.</p>
        </div>
      </div>

      <div className="row">
        <div className="col g-7">
          <form
            name="contactForm"
            id="contactForm"
            method="post"
            readOnly
            action=""
          >
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  name="contactName"
                  type="text"
                  id="contactName"
                  size="35"
                  readOnly
                  value="1"
                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  name="contactEmail"
                  type="text"
                  id="contactEmail"
                  size="35"
                  readOnly
                  value="2"
                />
              </div>

              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input
                  name="contactSubject"
                  type="text"
                  id="contactSubject"
                  size="35"
                  readOnly
                  value="3"
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  name="contactMessage"
                  id="contactMessage"
                  rows="15"
                  cols="50"
                />
              </div>

              <div>
                <button className="submit">Submit</button>
                <span id="image-loader">
                  <img src="images/loader.gif" alt="abx" />
                </span>
              </div>
            </fieldset>
          </form>

          <div id="message-warning" />

          <div id="message-success">
            <i className="icon-ok" />
            Your message was sent, thank you!
            <br />
          </div>
        </div>

        <aside className="col g-5">
          <h3>Contact Information</h3>

          <p>
            Nascetur augue hac platea enim, egestas pulvinar vutulvinar cum,
            ac eu.
          </p>

          <p>
            Kreative Design Studio <br />
            Anystreet Avenue 012 <br />
            State, Anytown
          </p>

          <p>
            Phone: 0 123 456 789 0 <br />
            Email: info [@] kreativedesign.com
          </p>
          <br />

          <h3>Template Info</h3>

          <p>
            Kreative is a free website template by{" "}
            <a href="http://www.styleshout.com/">styleshout.com</a>. This work
            is released and licensed under the{" "}
            <a
              href="http://creativecommons.org/licenses/by/3.0/"
              rel="license"
            >
              Creative Commons Attribution 3.0 License
            </a>
            , which means that you are free to use and modify it for any
            personal or commercial purpose. All I ask is that you give me
            credit by including a credit link to
            <a href="http://www.styleshout.com/">my website</a>.
          </p>
        </aside>
      </div>
    </section>
  );
};

export default Contact;