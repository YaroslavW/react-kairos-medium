import React from 'react';

const Services = ({data}) => {
   if(data){
      var title = data.header[0]['title'];
      var text = data.header[0]['text'];
      var description = data.header[1]['description'];

      var items = data.items.map((val, index) => (
        <div key={index} className="col">
          <h2>
            <i className={val.icon} />{val.caption}
          </h2>
          <p>
            {val.text}
          </p>
        </div>
      ));
   }
  return (
      <section id="services">

         <div className="row section-head">

            <div className="col one-third">
               <h2>{title}</h2>
               <p className="desc">{text}</p>
            </div>

            <div className="col two-thirds">
               <div className="intro">
                  <p>
                  {description}
                  </p>
               </div>
            </div>
         </div>

         <div className="row">
            <div className="services-wrapper">
               {items}
            </div> 
         </div> 

      </section>
   )
};

export default Services;