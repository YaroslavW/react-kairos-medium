import React from 'react';
import Social from './Sicial';

const Team = ({data}) => {
  if(data){
    var team = data.team.map((val, index) => (
      <div key={index} className="col one-fourth">
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
    <>
      <div className="row">
        <div className="col full">
          <h3>Meet The Team.</h3>
        </div>
      </div>

      <div className="row team-wrap">{team}</div>
    </>
  );
};

export default Team;