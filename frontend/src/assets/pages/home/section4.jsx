import React from 'react';
import "../../css/home/section4.css";

function Section4() {

    return (
        <>
            <div className="container boxes_wrapper_container mt-5">
                <div className="col-md-10">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col container_box_card-1">
                            <div class="card">
                                <div class="card-body shadow_v1 info-box date">
                                    <h5 class="card-title">Date</h5>
                                    <p class="card-text">The Sports Kid Talent Hunt season begins on 6 March 2025, allowing competitions to start from this date. Competitions held until 1 May 2025 will count towards the qualification period for the Regional Finals. Schools are welcome to organize Talent Hunt events after 1 May with our full support.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col container_box_card-2">
                            <div class="card">
                                <div class="card-body shadow_v1 info-box point-system">
                                    <h5 class="card-title">Point system</h5>
                                    <p class="card-text">A predefined points table is used to evaluate individual performances. Points from the three disciplines are combined into a triathlon result, with only the total score determining the ranking.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col container_box_card-3">
                            <div class="card">
                                <div class="card-body shadow_v1 info-box disciplines">
                                    <h5 class="card-title">Disciplines</h5>
                                    <p class="card-text pb-0">The Sports Kid Talent Hunt is a triathlon consisting of the following disciplines:</p>
                                    <ul>
                                        <li>Atheletics</li>
                                        <li>Badminton</li>
                                        <li>Cricket</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Section4;
