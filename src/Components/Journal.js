import React from 'react';

const Journal = () => {
  return (
     <section id="journal">

      <div className="row section-head">
         <div className="col full">
            <h2>Journal</h2>
            <p className="desc">Our latest posts and rants.</p>
         </div>
      </div>

     
      <div className="blog-entries">

      
         <article className="entry">

            <div className="row entry-header">

               <div className="author-image">
                  <img src="images/user-03.png" alt="Sakura Haruno" />
               </div>

               <div className="col g-9 offset-1 entry-title">
                  <h3><a href="blog-single.html">Proin gravida nibh vel velit auctor aliquet Aenean sollicitudin auctor.</a></h3>
               </div>

               <div className="col g-2">
                  <p className="post-meta">
                     <time pubdate="" className="post-date" dateTime="2013-08-19">Aug 19, 2013</time>
                     <span className="dauthor">By Sakura Haruno</span>
                  </p>
               </div>

            </div>

            <div className="row">

               <div className="col g-9 offset-1 post-content">
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                  deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate.
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.
                  <a href="blog-single.html" className="more-link">Read More<i className="icon-angle-right"></i></a></p>
               </div>

            </div>

         </article> 

        
         <article className="entry">

            <div className="row entry-header">

               <div className="author-image">
                  <img src="images/user-03.png" alt="John Doe" />
               </div>

               <div className="col g-9 offset-1 entry-title">
                  <h3><a href="blog-single.html">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed.</a></h3>
               </div>

               <div className="col g-2">
                  <p className="post-meta">
                     <time pubdate="" className="post-date" dateTime="2013-08-09">Aug 9, 2013</time>
                     <span className="dauthor">By John Doe</span>
                  </p>
               </div>

            </div>

            <div className="row">

               <div className="col g-9 offset-1 post-content">
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                  deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate.
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.
                  <a href="blog-single.html" className="more-link">Read More<i className="icon-angle-right"></i></a></p>
               </div>

            </div>

         </article> 

        
         <article className="entry">

            <div className="row entry-header">

               <div className="author-image">
                  <img src="images/user-03.png" alt="Naruto Uzumaki" />
               </div>

               <div className="col g-9 offset-1 entry-title">
                  <h3><a href="blog-single.html">Quis autem vel esse eum iure reprehenderit qui in ea voluptate velit esse.</a></h3>
               </div>

               <div className="col g-2">
                  <p className="post-meta">
                     <time pubdate="" className="post-date" dateTime="2013-08-07">Aug 7, 2013</time>
                     <span className="dauthor">By Naruto Uzumaki</span>
                  </p>
               </div>

            </div>

            <div className="row">

               <div className="col g-9 offset-1 post-content">
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                  deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate.
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.
                  <a href="blog-single.html" className="more-link">Read More<i className="icon-angle-right"></i></a></p>
               </div>

            </div>

         </article> 

      </div> 

   </section>
  );
};

export default Journal;