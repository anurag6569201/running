import React, { useRef,useState } from 'react';
import "../../css/home/section1.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

function Section1() {
    return (
        <>
            <div className="container">
                <div className="text-center my-5">
                    <div className="d-flex justify-content-center mb-3">
                        <span className="badge-news">BREAKING NEWS</span>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <div className="arrow start-0">
                                <img src="images/home/arrow.png" alt="Arrow" />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <h1 className="headline">
                                <span>India Sports</span> joins the team!
                            </h1>
                            <p className="text-muted">
                                'The Athletics Kids Cup is a project close to my heart, and I'm proud to
                                be part of it. Come, join us, and help make it a success!'
                            </p>
                        </div>
                        <div className="col-md-2">
                            <div className="wow-text">
                                <img src="images/home/wow.png" alt="Wow Text" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="my-4">
                                <a href="#" className="custom-button shadow_v1">To the news →</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="video_container_wrapper">
                    <div className="video-container shadow_v1">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img className='section1_swiper_img' src="images/home/accordion.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img className='section1_swiper_img' src="images/home/accordion.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img className='section1_swiper_img' src="images/home/accordion.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img className='section1_swiper_img' src="images/home/accordion.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img className='section1_swiper_img' src="images/home/accordion.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img className='section1_swiper_img' src="images/home/accordion.png" alt="" /></SwiperSlide>
                    </Swiper>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="row athelate_row_wrapper">
                        <div className="col-md-5">
                            <div className="d-flex justify-content-left mb-3">
                                <span className="badge-news">BREAKING NEWS</span>
                            </div>
                            <h1 class="title mt-3">
                                Running <span>*</span> Jumping <br /> Throwing
                            </h1>
                            <p class="description">
                                The Athletics Kids Cup moves the kids! The three basic movement forms that are required in almost every sport are the basis of this unique sports initiative in India. Let's move the children together and encourage their personal development.
                            </p>
                            <button class="custom-button shadow_v1">Pre-register your school →</button>
                        </div>
                        <div className="col-md-5 athelate_image_wrapper">
                            <img className='athelate_image' src="images/home/athelate.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Section1;
