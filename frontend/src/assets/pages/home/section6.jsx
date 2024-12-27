import React, { useRef } from 'react';
import "../../css/home/section6.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

function Section6() {
    return (
        <>
            <div className="container-fluid types_container_wrapper">
                <div className="col-md-10">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card card_types h-100">
                                <img loading='lazy' src="images/home/type1.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <span className='helper_title_text'>Our</span>
                                    <h5 class="card-title">Commitment</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card card_types h-100">
                                <img loading='lazy' src="images/home/type2.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <span className='helper_title_text'>Your</span>
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card card_types h-100">
                                <img loading='lazy' src="images/home/type3.png" class="card-img-top" alt="..." />
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

            <div className="container mt-5">
                <div className="video_container_wrapper">
                        <div className="video-container shadow_v1">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                            clickable: true,
                            }}
                            autoplay={{
                                delay: 2000, 
                                disableOnInteraction: false, 
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation, Autoplay]}
                            className="mySwiper"
                        >
                            <SwiperSlide><img loading='lazy' className='section1_swiper_img' src="images/home/sample_swiper1.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img loading='lazy' className='section1_swiper_img' src="images/home/sample_swiper2.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img loading='lazy' className='section1_swiper_img' src="images/home/sample_swiper3.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img loading='lazy' className='section1_swiper_img' src="images/home/sample_swiper4.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img loading='lazy' className='section1_swiper_img' src="images/home/sample_swiper5.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img loading='lazy' className='section1_swiper_img' src="images/home/sample_swiper6.png" alt="" /></SwiperSlide>
                        </Swiper>
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
                                            Competition
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <li><Link class="dropdown-item" to="/howwork"><i class="bi bi-chevron-right"></i><span>How it works</span></Link></li>
                                        <li><Link class="dropdown-item" to="/whoParticipate"><i class="bi bi-chevron-right"></i><span>Who can participate?</span></Link></li>
                                        <li><Link class="dropdown-item" to="/threeDiscipline"><i class="bi bi-chevron-right"></i><span>The three disciplines</span></Link></li>
                                        <li><Link class="dropdown-item" to="/rulesCategory"><i class="bi bi-chevron-right"></i><span>Rules and categories</span></Link></li>
                                        <li><Link class="dropdown-item" to="/finals"><i class="bi bi-chevron-right"></i><span>Finals</span></Link></li>
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
                                            Organizers
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <li><Link class="dropdown-item" to="/becomeOrganizer"><i class="bi bi-chevron-right"></i><span>Become an organizer</span></Link></li>
                                        <li><Link class="dropdown-item" to="/documentsDownload"><i class="bi bi-chevron-right"></i><span>Documents and downloads</span></Link></li>
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
                                            Miscellaneous Info
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <li><Link class="dropdown-item" to="/dataProtection"><i class="bi bi-chevron-right"></i><span>Data Protection Regulations</span></Link></li>
                                        <li><Link class="dropdown-item" to="/conditionParticipation"><i class="bi bi-chevron-right"></i><span>Conditions of Participation</span></Link></li>
                                        <li><Link class="dropdown-item" to="/privacyPolicy"><i class="bi bi-chevron-right"></i><span>Privacy Policy</span></Link></li>
                                        <li><Link class="dropdown-item" to="/imprint"><i class="bi bi-chevron-right"></i><span>Imprint</span></Link></li>
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
                                            FAQ
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <li><Link class="dropdown-item" to="/faq"><i class="bi bi-chevron-right"></i><span>Frequent questions</span></Link></li>
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
