import React from 'react';
import '../../css/compt/compt.css'
import DesignBar from '../home/design_bar';
import Footer from '../home/footer';
import { Link } from 'react-router-dom';

function HowWork() {
  return (
    <>
      <div className="container howWcontainer mb-5">
        <div className="row justify-content-center howWrow">
          <div className="col-md-5">
            <h1>How it works</h1>
            <p>The Sports Kid Talent Hunt is a major youth initiative in India for children and adolescents aged 7 to 16. Participants will compete in three exciting events:</p>
            <ul>
              <li><div className="span_circle shadow_v1"></div>Athletics</li>
              <li><div className="span_circle shadow_v1"></div>Cricket</li>
              <li><div className="span_circle shadow_v1"></div>Badminton</li>
            </ul>
            <p>We encourage you to organize the Sports Kid Talent Hunt as part of your sports day. It requires meeting just three simple criteria and offers numerous benefits!</p>
          </div>
          <div className="col-md-5 howWrow_img_md5">
            <img loading='lazy' className='howW_img1' src="images/compt/howW1.png" alt="" />
          </div>
        </div>
      </div>
      <DesignBar />
      <div className="container-fluid">
        <div className="row how_work_wrapper_row howWcontainer1 justify-content-center">
          <div className="row justify-content-center align-items-center pt-5 pb-5">
            <div className="col-md-5 accordion_image">
              <img loading='lazy' src="images/compt/howW2.png" alt="" />
            </div>
            <div className="col-md-5">
            <div class="accordion" id="kidsCupAccordion">

                        <div class="accordion-item shadow_v1">
                            <h2 class="accordion-header" id="headingTwo">
                            <button
                                class="custom-btn accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                <span class="icon_dropdown shadow_v1"><i class="bi bi-arrow-down-right-circle-fill"></i></span>
                                Requirements of an Sports Kid Talent Hunt
                            </button>
                            </h2>
                            <div
                            id="collapseTwo"
                            class="accordion-collapse collapse show"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#kidsCupAccordion"
                            >
                            <div class="accordion-body">
                            1. Register your school sports day on our website. <br />
                            2. Use the free starting numbers provided for participants. <br />
                            3. Submit results through the free evaluation software. <br /> <br />
                            It’s that simple! Pre-register your school now to join the movement, and we’ll notify you when event registration opens.
                            </div>
                            </div>
                        </div>

                        <div class="accordion-item shadow_v1">
                            <h2 class="accordion-header" id="headingThree">
                            <button
                                class="custom-btn accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                <span class="icon_dropdown shadow_v1"><i class="bi bi-arrow-down-right-circle-fill"></i></span>
                                Advantages of organising an Sports Kid Talent Hunt
                            </button>
                            </h2>
                            <div
                            id="collapseThree"
                            class="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#kidsCupAccordion"
                            >
                            <div class="accordion-body">
                                We support you in organizing a Sports Kid Talent Hunt. Each school receives a ready-to-use toolkit to host its own competition. The toolkit includes: <br /><br />

                                1. A detailed sports day concept with various event organization methods. <br />
                                2. Simple evaluation software for capturing results and generating ranking lists. <br />
                                3. Free result sheets to streamline the organizational process. <br />
                                4. Essential materials like measuring tapes, balls, stopwatches, and more for running the sports day. <br />
                                5. Free bib numbers and participant certificates. <br /> <br />
                                Data protection is guaranteed at all times.
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item shadow_v1">
                            <h2 class="accordion-header" id="headingFour">
                            <button
                                class="custom-btn accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapseFour"
                            >
                                <span class="icon_dropdown shadow_v1"><i class="bi bi-arrow-down-right-circle-fill"></i></span>
                                Regional Finals
                            </button>
                            </h2>
                            <div
                            id="collapseFour"
                            class="accordion-collapse collapse"
                            aria-labelledby="headingFour"
                            data-bs-parent="#kidsCupAccordion"
                            >
                            <div class="accordion-body">
                                Numerous Sports Kid Talent Hunt competitions will be held across Bhubaneswar. The top performers will be invited to one of the five regional finals in January 2025.
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item shadow_v1">
                            <h2 class="accordion-header" id="headingFive">
                            <button
                                class="custom-btn accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFive"
                                aria-expanded="false"
                                aria-controls="collapseFive"
                            >
                                <span class="icon_dropdown shadow_v1"><i class="bi bi-arrow-down-right-circle-fill"></i></span>
                                Grand Bhubaneswar finals
                            </button>
                            </h2>
                            <div
                            id="collapseFive"
                            class="accordion-collapse collapse"
                            aria-labelledby="headingFive"
                            data-bs-parent="#kidsCupAccordion"
                            >
                            <div class="accordion-body">
                                The Sports Kid Talent Hunt Grand Bhubaneswar Final will be held on 15 February 2025 at the Jio Institute's Athletic Center in Bhubaneswar, featuring the top girls and boys in each age category.
                            </div>
                            </div>
                        </div>
                        </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 mb-5">
        <h1 className='howWh1'>The <br />Competition</h1>
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div class="card mb-3 shadow_v1">
              <div class="row g-0">
                <div class="col-md-4">
                  <img loading='lazy' src="images/compt/howW3.png" class="img-fluid rounded-start howWimg1" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Categories and rules</h5>
                    <p class="card-text">Here you can find out everything about the categories, rules, scoring and conditions of participation.</p>
                    <span class="card-text greenhowW shadow_v1"><Link className='text_style_link' to="/rulesCategory">More Info <i class="bi bi-arrow-up-right"></i></Link></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div class="card mb-3 shadow_v1">
              <div class="row g-0">
                <div class="col-md-4">
                  <img loading='lazy' src="images/compt/howW4.png" class="img-fluid rounded-start howWimg1" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">The three disciplines</h5>
                    <p class="card-text">Here you can find out everything about the categories, rules, scoring and conditions of participation.</p>
                    <span class="card-text bluehowW shadow_v1"><Link className='text_style_link' to="/threeDiscipline">More Info <i class="bi bi-arrow-up-right"></i></Link></span>
                  </div>
                </div>
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

export default HowWork;
