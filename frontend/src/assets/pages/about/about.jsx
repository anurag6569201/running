import React from 'react';
import "../../css/about_us/about_us.css";
import DesignBar from '../home/design_bar';
import Footer from '../home/footer';
import { Link } from 'react-router-dom';


function AboutUs() {
  return (
    <>
      <div className='container-fluid about_us_container'>
        <div className="about_us_content pt-5">
          <img loading='lazy' className='about_us_img' src="images/about_us/runner.png" alt="" />
          <h1>The Kids Talent Hunt is a competition format for children and adolescents based on the successful Sports Kid Talent Hunt format in Europe.</h1>
          <p className='pt-2'>The Dspowerparts team, Athletics, Football and Cricket enthusiasts from Europe, The Sports Kid Talent Hunt is a standalone initiative tailored to the country's unique situation.</p>
        </div>
      </div>
      <DesignBar />
      <div className="container-fluid about_is_team_container mt-5 mb-5">
        <div className="row team_container_row">
          <div className="col-md-3">
            <h1>Our team</h1>
            <p>Dspowerparts and its partners ensure that the Sports Kid Talent Hunt gets children in India moving.</p>
            <p>As many atheltes as possible should be able to have fun Running, Football and Cricket.</p>
          </div>
          <div className="col-md-6 designer_frame_md">
            <div className="designer_frame_team shadow_v1">
              <img loading='lazy' style={{objectFit:'contain'}} src="images/about_us/team.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container boxes_wrapper_container mt-5 mb-5 about_us_boxes_wrapper">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <h1 className='text-center'>Sponsors And Partners</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-center mt-2">
              <div class="col-md-5">
                <div class="card h-100">
                  <div class="card-body shadow_v1 info-box date">
                    <h5 class="card-title">Main sponsor and enabler</h5>
                    {/* <div className='d-flex justify-content-center'>
                      <img loading='lazy' src="images/home/logo.png" alt="" />
                    </div> */}
                    <p class="card-text">GVR is committed to drive sustainable social impact among its communities with a focus on enabling children and young adults to achieve their potential through catalytic interventions around education, wellbeing and the environment.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-5">
                <div class="card h-100">
                  <div class="card-body shadow_v1 info-box point-system">
                    <h5 class="card-title">Execution partner</h5>
                    {/* <div className='d-flex justify-content-center'>
                      <img loading='lazy' src="images/home/logo.png" alt="" />
                    </div> */}
                    <p class="card-text">GVR is a central partner in the realisation of The Kids Talent Hunt. The GVR team has supported The Kids Talent Hunt from the very beginning and is the local contact for all schools and ensures the smooth organisation of the initiative.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="col-md-10 mt-5 pt-5">
            <div className="row justify-content-center">
              <div className="col-md-7">
                <h2>Information for media representatives</h2>
                <p>We are available to media representatives at any time:  Please contact us via media@sample.com (to be update)</p>
              </div>
              <div className="col-md-3 btn-contactssds">
                <Link to="/contact"><button type="submit" class="btn btn-send-contact-us shadow_v1">
                  Contact Us
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DesignBar />
      <Footer />
    </>
  );
}

export default AboutUs;
