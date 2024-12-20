import React from 'react';
import '../../css/compt/compt.css'
import DesignBar from '../home/design_bar';
import Footer from '../home/footer';


function HowWork() {
  return (
    <>
      <div className="container howWcontainer mb-5">
        <div className="row justify-content-center howWrow">
          <div className="col-md-5">
            <h1>How it works</h1>
            <p>The Athletics Kids Cup is a major youth project in India supported by UBS. The children and adolescents between the ages of 7 and 15 will all compete in the same three events:</p>
            <ul>
              <li><div className="span_circle shadow_v1"></div> 60m Sprint</li>
              <li><div className="span_circle shadow_v1"></div>Long Jump</li>
              <li><div className="span_circle shadow_v1"></div>Ball Throw</li>
            </ul>
            <p>We recommend that you organise the Athletics Kids Cup as your athletics sports day, as there are only three requirements to be met and you can benefit in many ways</p>
          </div>
          <div className="col-md-5 howWrow_img_md5">
            <img className='howW_img1' src="images/compt/howW1.png" alt="" />
          </div>
        </div>
      </div>
      <DesignBar />
      <div className="container-fluid">
        <div className="row how_work_wrapper_row howWcontainer1 justify-content-center">
          <div className="row justify-content-center align-items-center pt-5 pb-5">
            <div className="col-md-5 accordion_image">
              <img src="images/compt/howW2.png" alt="" />
            </div>
            <div className="col-md-5">
              <div class="accordion" id="kidsCupAccordion">
                <div class="accordion-item shadow_v1 border-0">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="custom-btn accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      <span class="icon_dropdown shadow_v1"><i class="bi bi-arrow-down-right-circle-fill"></i></span>
                      Requirements of an Athletics Kids Cup
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#kidsCupAccordion"
                  >
                    <div class="accordion-body">
                      List of requirements and details about organizing the Athletics Kids Cup.
                    </div>
                  </div>
                </div>

                <div class="accordion-item shadow_v1 border-0">
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
                      Advantages of organising an Athletics Kids Cup
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#kidsCupAccordion"
                  >
                    <div class="accordion-body">
                      Benefits of organizing an Athletics Kids Cup, including health, teamwork, and fun.
                    </div>
                  </div>
                </div>

                <div class="accordion-item shadow_v1 border-0">
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
                      Advantages of organising an Athletics Kids Cup
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#kidsCupAccordion"
                  >
                    <div class="accordion-body">
                      Benefits of organizing an Athletics Kids Cup, including health, teamwork, and fun.
                    </div>
                  </div>
                </div>
                <div class="accordion-item shadow_v1 border-0">
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
                      Advantages of organising an Athletics Kids Cup
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#kidsCupAccordion"
                  >
                    <div class="accordion-body">
                      Benefits of organizing an Athletics Kids Cup, including health, teamwork, and fun.
                    </div>
                  </div>
                </div>
                <div class="accordion-item shadow_v1 border-0">
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
                      Advantages of organising an Athletics Kids Cup
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#kidsCupAccordion"
                  >
                    <div class="accordion-body">
                      Benefits of organizing an Athletics Kids Cup, including health, teamwork, and fun.
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
          <div className="col-md-6">
            <div class="card mb-3 shadow_v1">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="images/compt/howW3.png" class="img-fluid rounded-start howWimg1" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">The three discipline</h5>
                    <p class="card-text">Running - Jumping - Throwing: All about the disciplines in the Athletics Kids Cup.</p>
                    <span class="card-text greenhowW shadow_v1">More Info <i class="bi bi-arrow-up-right"></i></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div class="card mb-3 shadow_v1">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="images/compt/howW4.png" class="img-fluid rounded-start howWimg1" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Categories and rules</h5>
                    <p class="card-text">Here you can find out everything about the categories, rules, scoring and conditions of participation.</p>
                    <span class="card-text bluehowW shadow_v1">More Info <i class="bi bi-arrow-up-right"></i></span>
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
