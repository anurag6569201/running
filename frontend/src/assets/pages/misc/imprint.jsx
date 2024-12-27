import React from 'react';
import Footer from '../home/footer';

function Imprint() {
  return (
    <>
    <div className="container mb-5">
      <div className="row">
        <h1 className="text-center">Imprint</h1>
        <div className="container boxes_wrapper_container mt-5 mb-5 about_us_boxes_wrapper">
        <div className="row justify-content-center">
          <div className="col-md-12">
          <div class="card" style={{width: '22rem'}}>
            <div class="card-body shadow_v1 info-box date">
              <h5 class="card-title">Sports Kid Talent Hunt</h5>
              <p class="card-text">Bhubaneswar Sports club <br />Sample address here</p>
                <p>contact@sample.com</p>
                <p>+91 XXXXXXXXXX</p>
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Imprint;
