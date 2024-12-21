import React from 'react';
import '../../css/news/news.css';
import DesignBar from '../home/design_bar';
import Footer from '../home/footer';

function News() {
  const newsItems = [
    {
      title: "Card title 1",
      description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imageSrc: "images/news/n1.png",
      altText: "News Image 1",
      link: "#"
    },
    {
      title: "Card title 2",
      description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imageSrc: "images/news/n1.png",
      altText: "News Image 2",
      link: "#"
    },
  ];

  return (
    <>
      <div className='container mb-5'>
        <h1 className='text-center mt-4 mb-2'>News</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2">
          {newsItems.map((news, index) => (
            <div className="col" key={index}>
              <article className="card news_cards_stack shadow_v1">
                <img src={news.imageSrc} className="card-img-top" alt={news.altText} />
                <div className="card-body">
                  <h5 className="card-title">{news.title}</h5>
                  <p className="card-text">{news.description}</p>
                  <a className='news_read_more' href={news.link}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"/>
                    </svg> Read More
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="row mt-5 news_container_links">
          <h2>News covered on:</h2>
          <ul>
            <li><a href="#"><i className="bi bi-arrow-up-right"></i> Athletics Kids Cup makes a debut in Mumbai to move the kids of India</a></li>
            <li><a href="#"><i className="bi bi-arrow-up-right"></i> Athletics Kids Cup makes a debut in Mumbai to move the kids of India</a></li>
            <li><a href="#"><i className="bi bi-arrow-up-right"></i> Athletics Kids Cup makes a debut in Mumbai to move the kids of India</a></li>
            <li><a href="#"><i className="bi bi-arrow-up-right"></i> Athletics Kids Cup makes a debut in Mumbai to move the kids of India</a></li>
          </ul>
          <h2 className='mt-4'>Information for media representatives</h2>
          <p>We are available to media representatives at any time: Please contact us via media@athleticskidscup.com</p>
        </div>
      </div>
      <DesignBar />
      <Footer />
    </>
  );
}

export default News;
