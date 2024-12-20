import React from 'react';
import '../../css/faq/faq.css'
import Footer from '../home/footer';
import DesignBar from '../home/design_bar';


function FAQ() {
  return (
    <>
    <div className="container-fluid mt-5 mb-5 faq_wrapper_container">
      <div className="row how_work_wrapper_row faq_wrapper_row justify-content-center">
        <div className="col-md-12">
          <h1>FAQ</h1>
        </div>
        <div className="row justify-content-center gy-3 faq-row_sdsfsd">
          <div className="col-md-8">
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
                  class="accordion-collapse collapse"
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
    <DesignBar/>
    <Footer/>
    </>
  );
}

export default FAQ;
