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
                                    <p class="card-text">The Athletics Kids Cup season begins on 16 September 2024, from which date competitions can be held. All competitions held up to and including 10 December 2024 are part of the qualification period for the Regional Finals. Your school is free to organise an Athletics Kids Cup after 10 December. Of course, you will still receive our full support.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col container_box_card-2">
                            <div class="card">
                                <div class="card-body shadow_v1 info-box point-system">
                                    <h5 class="card-title">Point system</h5>
                                    <p class="card-text">For the evaluation of the individual performances, a predefined points table is used. The points for the three individual disciplines are added to the triathlon result. Only the total of all three disciplines counts towards the ranking.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col container_box_card-3">
                            <div class="card">
                                <div class="card-body shadow_v1 info-box disciplines">
                                    <h5 class="card-title">Disciplines</h5>
                                    <p class="card-text">The Athletics Kids Cup is a triathlon consisting of the following disciplines:</p>
                                    <ul>
                                        <li>Sprint 60 m – 1 attempt</li>
                                        <li>Long jump with zone jump – 3 attempts</li>
                                        <li>Ball throw 200 g – 3 attempts</li>
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
