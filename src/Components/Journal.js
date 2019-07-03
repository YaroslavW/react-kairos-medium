import React from 'react';

const Journal = ({data}) => {
   if (data) {
      var title= data.header[0]['title'];
      var text = data.header[0]['text'];

      var articles = data.articles.map((val, index) => (
        <article className="entry">
          <div className="row entry-header">
            <div className="author-image">
              <img src={val.img} alt={val.author} />
            </div>

            <div className="col g-9 offset-1 entry-title">
              <h3>
                <a href={val.link}>
                  {val.title}
                </a>
              </h3>
            </div>

            <div className="col g-2">
              <p className="post-meta">
                <time
                  pubdate=""
                  className="post-date"
                  dateTime="2013-08-19"
                >
                  {val.data}
                </time>
                <span className="dauthor">By {val.author}</span>
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col g-9 offset-1 post-content">
              <p>
               {val.text}
                <a href={val.link} className="more-link">
                  Read More<i className="icon-angle-right" />
                </a>
              </p>
            </div>
          </div>
        </article>
      ));
   }
  return (
     <section id="journal">
        
         <div className="row section-head">
            <div className="col full">
               <h2>{title}</h2>
               <p className="desc">{text}</p>
            </div>
         </div>

         <div className="blog-entries">
            {articles}
         </div> 

      </section>
  );
};

export default Journal;