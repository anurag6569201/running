import React, { useRef } from 'react';
import "../../css/home/section6.css";

function Section6() {
    const videoRef = useRef(null);
    const playButtonRef = useRef(null);

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                playButtonRef.current.style.display = 'none';
            } else {
                videoRef.current.pause();
                playButtonRef.current.style.display = 'flex';
            }
        }
    };
    return (
        <>
            <div className="container-fluid types_container_wrapper">
                <div className="col-md-10">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card card_types h-100">
                                <img src="images/home/type1.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <span className='helper_title_text'>Our</span>
                                    <h5 class="card-title">Commitment</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card card_types h-100">
                                <img src="images/home/type2.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <span className='helper_title_text'>Your</span>
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card card_types h-100">
                                <img src="images/home/type3.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <span className='helper_title_text'>Shared</span>
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="video_container_wrapper mt-5">
                    <div className="video-container shadow_v1">
                        <video
                            id="video1"
                            ref={videoRef}
                            poster="poster.png"
                            controls
                        >
                            <source src="your-video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div
                            className="play-button"
                            id="playButton"
                            ref={playButtonRef}
                            onClick={handlePlayPause}
                            style={{ display: 'flex' }}
                        >
                            <img src="images/home/play.png" alt="Play Button" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container accodion_drops_wrapper mt-5">
                <h1 class="main-title">Want to know more about us?</h1>
                <div class="row row-cols-1 row-cols-md-4 g-4 accordion accordion-flush mt-3" id="accordionFlushExample">
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Accordion Item #1
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Accordion Item #2
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Accordion Item #3
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                            Accordion Item #4
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the fourth item's accordion body.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Section6;
