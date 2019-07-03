import React from 'react';
import ReactHtmlParser from "react-html-parser";
import Slider from "react-slick";

const Intro = ({data}) => {
	if(data){
		var slides = data.slider.map((val, index) => (
      <li key={index}>
        <div className="row">
          <div className="col full">
            <div className="slider-text">
              <h2>{ReactHtmlParser(val.title)}</h2>
              <p>{val.text}</p>
            </div>
          </div>
        </div>
      </li>
    ));
  }
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 800
    };
  return (
    <section id="intro">
	   <div id="intro-slider" className="flexslider">
		   <ul className="slides">
          <Slider {...settings}>
						 {slides}
					</Slider>
		   </ul>
	   </div>
   </section>
  );
};

export default Intro;