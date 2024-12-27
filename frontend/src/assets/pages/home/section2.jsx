import React from 'react';
import "../../css/home/section2.css";

function section2() {

    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row how_work_wrapper_row justify-content-center">
                    <div className="col-md-12">
                        <h1 className='mb-4'>How it works</h1>
                    </div>
                    <div className="row main_work_wrapper">
                        <div className="col-md-5">
                        <div class="accordion" id="kidsCupAccordion">
                        <div class="accordion-item shadow_v1">
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
                                Overview
                            </button>
                            </h2>
                            <div
                            id="collapseOne"
                            class="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#kidsCupAccordion"
                            >
                            <div class="accordion-body">
                            Children aged 7 to 15 can enhance their athletic potential through activities like the 60m sprint for speed, long jump for agility, and ball throw for accuracy. These foundational skills are designed to boost performance in athletics, cricket, and badminton. By participating in such events, kids develop all-around abilities and foster a lifelong passion for sports, paving the way for future champions in Odisha, especially in Bhubaneswar!
                            </div>
                            </div>
                        </div>

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
                            class="accordion-collapse collapse"
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
                                Numerous Sports Kid Talent Hunt competitions will be held across Mumbai starting mid-September 2024. The top performers will be invited to one of the five regional finals in January 2025.
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
                        <div className="col-md-5 accordion_image">
                            <img src="images/home/accordion.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default section2;
