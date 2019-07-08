import React from 'react';

const Sicial = ({data}) => {
  if({data}){
    var item = data.map((val, index)=>(
      <li key={index}>
        <a href={val.link} rel="noopener noreferrer" target="_blank">
          <i className={val.icon}></i>
        </a>
      </li>
    ))
  }
  return (
    <>
      {item}
    </>
  );
};

export default Sicial;