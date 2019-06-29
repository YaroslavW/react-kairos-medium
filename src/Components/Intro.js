import React from 'react';

const Intro = () => {
  return (
    <section id="intro">

	   <div id="intro-slider" className="flexslider">

		   <ul className="slides">

			 
			   <li>
				   <div className="row">
					   <div className="col full">
						   <div className="slider-text">
							   <h2>Hello, we are <span>kreative</span>. We specialize in branding, websites and photography.</h2>
							   <p>Aenean condimentum, lacus sit amet luctus lobortis, dolores et quas molestias excepturi
                        enim tellus ultrices elit, amet consequat enim elit noneas sit amet luctu.</p>
						   </div>
					   </div>
				   </div>
			   </li>

          
			   <li>
				   <div className="row">
					   <div className="col full">
						   <div className="slider-text">
							   <h2>Take a look at some of <a href="#portfolio" title="">our works</a> or <a href="#contact" title="">get in
                        touch</a> to discuss how we can help you.</h2>
							   <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                        deleniti eos et accusamus.</p>
						   </div>
					   </div>
				   </div>
			   </li>

		   </ul>
	   </div>


   </section>
  );
};

export default Intro;