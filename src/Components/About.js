import React from 'react';
import Social from './Sicial';

const About = ({data}) => {
  if(data){
    var head = data.head[0]['title'];
    var desc =data.head[0]['desc'];
    var intro = data.head[0]['intro'];

    var work_head = data.work.head;
    var item = data.work.items.map((val, index) => (
      <div key={index} className="col">
        <h4>{val.title}</h4>
        <p>
          {val.text}
        </p>
      </div>
    ));
    var team = data.team.map((val, index) => (
      <div key={index}  className="col one-fourth">
        <img src={val.img.src} alt={val.img.alt} />

        <div className="member-name">
          <h5>{val.name}</h5>
          <span>{val.special}</span>
        </div>

        <ul className="member-social">
          <Social data={val.soc_links} />
        </ul>
      </div>
    ));
  }
  return (
    <section id="about">
      <div className="row section-head">
        <div className="col one-fourth">
          <h2>{head}</h2>
          <p className="desc">{desc}</p>
        </div>

        <div className="col three-fourths">
          <p className="intro">
            {intro}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col full">
          <h3>{work_head}</h3>
        </div>
      </div>

      <div className="row process-wrap">
        {item}
      </div>

      <div className="row">
        <div className="col full">
          <h3>Meet The Team.</h3>
        </div>
      </div>

      <div className="row team-wrap">
        {team}
 
      </div>

      {/*  Testimonials */}
      <div className="row">
        <div className="col full section-head">
          <h2>Testimonials</h2>
          <p className="desc">What our clients are saying.</p>
        </div>
      </div>

      <div className="row testimonials">
        <div className="col half">
          <div className="client-author">
            <img src="images/client-img.png" alt="" />
            <div className="name">
              <p>
                John Doe<span>Designer</span>
              </p>
            </div>
          </div>

          <div className="client-cite">
            <p>
              Phasellus - ut augue at sapien bibendum bibendum amet magna.
              Aenean condimentum, lacus sit amet luctus lobortis, enim tellus
              ultrices elit, amet consequat enim elit noneas.
            </p>
          </div>
        </div>

        <div className="col half">
          <div className="client-author">
            <img src="images/client-img.png" alt="" />
            <div className="name">
              <p>
                Michael Smith<span>CEO</span>
              </p>
            </div>
          </div>

          <div className="client-cite">
            <p>
              Nascetur augue hac platea enim, egestas pulvinar vut. Pulvinar
              cum, ac eu, tristie acus duis in dictumst non integer. Elit, sed
              scelerisque odio tortor, sed platea dis. Aenean condimentum,
              lacus sit amet luctus lobortis, enim tellus ultrices elit.
            </p>
          </div>
        </div>
      </div>
      {/* Testimonials End */}
    </section>
  );
};

export default About;