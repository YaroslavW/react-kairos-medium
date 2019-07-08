import React from 'react';

const WorkProcess = ({data}) => {
  if(data){
    var item = data.work.items.map((val, index) => (
      <div key={index} className="col">
        <h4>{val.title}</h4>
        <p>{val.text}</p>
      </div>
    ));
  }
  return <div className="row process-wrap">{item}</div>;
};

export default WorkProcess;