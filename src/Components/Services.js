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
            {/* <div className="col">
               <h2><i className="icon-desktop"></i>Webdesign</h2>
               <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
               deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate.
               At vero eos et accusamus et molestias iusto odio dignissimos.</p>
            </div>

            <div className="col">
               <h2><i className="icon-star"></i>Branding</h2>
               <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
               deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate.
               At vero eos et accusamus et iusto odio dignissimos.</p>
            </div>

            <div className="col m-first">
               <h2><i className="icon-camera"></i>Photography</h2>
               <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
               deleniti atque corrupti quos dolores et molestias quas molestias excepturi sint occaecati cupiditate.
               At vero eos et accusamus et iusto odio dignissimos.</p>
            </div>

            <div className="col first">
               <h2><i className="icon-globe"></i>Web Development</h2>
               <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
               deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate.
               At vero eos et accusamus et iusto odio molestias dignissimos.</p>
            </div>

            <div className="col m-first">
               <h2><i className=" icon-list-alt"></i>User Interface</h2>
               <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
               deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate.
               At vero eos et accusamus et iusto odio dignissimos.</p>
            </div>

            <div className="col">
               <h2><i className="icon-print"></i>Printing</h2>
               <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
               deleniti atque corrupti molestias quos dolores et quas molestias excepturi sint occaecati cupiditate.
               At vero eos et accusamus et iusto odio dignissimos.</p>
            </div> */}

         </div> 

      </div> 

   </section>
   )
};

export default Services;