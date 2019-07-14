import React from 'react';
import Modals from './Modals';

const Portfolio = ({data}) => {
  if(data){
   
    var header = data.header.title;
    var desc = data.header.desc;
    var text = data.header.text;
    var items = data.items;
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
          <Modals data={items} />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;