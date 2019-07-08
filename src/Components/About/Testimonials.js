import React from 'react';

const Testimonials = ({data}) => {
  if(data){
    var our_test_head = data.testimonials.header;
    var our_test_text = data.testimonials.text;
    var our_testimonials = data.testimonials.items.map(
      (val, index) => (
        <div className="col half">
          <div className="client-author">
            <img src={val.img} alt={val.alt} />
            <div className="name">
              <p>
                {val.name}
                <span>{val.job}</span>
              </p>
            </div>
          </div>

          <div className="client-cite">
            <p>{val.text}</p>
          </div>
        </div>
      )
    );
  }
  return (
    <>
      <div className="row">
        <div className="col full section-head">
          <h2>{our_test_head}</h2>
          <p className="desc">{our_test_text}</p>
        </div>
      </div>

      <div className="row testimonials">{our_testimonials}</div>
    </>
  );
};

export default Testimonials;