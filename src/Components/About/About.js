import React from 'react';

import AboutHeader from './AboutHeader';
import WorkProcess from './WorkProcess';
import Team from './Team';
import Testimonials from './Testimonials';

const About = ({data}) => {

  return (
    <section id="about">
      <AboutHeader data={data} />
      <WorkProcess data={data} />
      <Team data={data} />
      <Testimonials data={data} />
    </section>
  );
};

export default About;