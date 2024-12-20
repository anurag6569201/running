import React from 'react';
import '../../css/news/news.css'
import DesignBar from '../home/design_bar';
import Footer from '../home/footer';

function News() {
  return (
    <>
    <div className='container mb-5'>
      <h1 className='text-center mt-4 mb-2'>News</h1>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2">
        <div class="col">
          <div class="card news_cards_stack shadow_v1">
            <img src="images/news/n1.png" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <a className='news_read_more' href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"/>
                </svg> Read More
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card news_cards_stack shadow_v1">
            <img src="images/news/n1.png" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <a className='news_read_more' href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"/>
                </svg> Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5 news_container_links">
        <h2>News covered on:</h2>
        <ul>
          <li><a href=""><i class="bi bi-arrow-up-right"></i> Athletics Kids Cup makes a debut in Mumbai to move the kids of India</a></li>
          <li><a href=""><i class="bi bi-arrow-up-right"></i> Athletics Kids Cup makes a debut in Mumbai to move the kids of India</a></li>
          <li><a href=""><i class="bi bi-arrow-up-right"></i> Athletics Kids Cup makes a debut in Mumbai to move the kids of India</a></li>
          <li><a href=""><i class="bi bi-arrow-up-right"></i> Athletics Kids Cup makes a debut in Mumbai to move the kids of India</a></li>
        </ul>
        <h2 className='mt-4'>Information for media representatives</h2>
        <p>We are available to media representatives at any time:  Please contact us via media@athleticskidscup.com</p>
      </div>
    </div>
    <DesignBar/>
    <Footer/>
    </>
  );
}

export default News;
