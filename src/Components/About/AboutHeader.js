import React from 'react';

const AboutHeader = ({data}) => {
  if(data){
  var head = data.head[0]["title"];
  var desc = data.head[0]["desc"];
  var intro = data.head[0]["intro"];

  var work_head = data.work.head;

  }
  return (
    <>
      <div className="row section-head">
        <div className="col one-fourth">
          <h2>{head}</h2>
          <p className="desc">{desc}</p>
        </div>

        <div className="col three-fourths">
          <p className="intro">{intro}</p>
        </div>
      </div>
      <div className="row">
        <div className="col full">
          <h3>{work_head}</h3>
        </div>
      </div>
    </>
  );
};

export default AboutHeader;