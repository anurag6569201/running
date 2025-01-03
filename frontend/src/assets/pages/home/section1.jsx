import React, { useRef,useState } from 'react';
import "../../css/home/section1.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import { Link } from 'react-router-dom';
import Register from './register';

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
                                <img loading='lazy' src="images/home/arrow.png" alt="Arrow" />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <h1 className="headline">
                                <span>India Sports Talent Hunt</span>
                            </h1>
                            <p className="text-muted">
                                'The Sports Kid Talent Hunt is very familiar and proud to be the part of this and help to make it success'.
                            </p>
                        </div>
                        <div className="col-md-2">
                            <div className="wow-text">
                                <img loading='lazy' src="images/home/wow.png" alt="Wow Text" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="my-4">
                                <Link to="/news" className="custom-button shadow_v1">To the news →</Link>
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
                <div className="mt-5">
                    <div className="row athelate_row_wrapper">
                        <div className="col-md-5">
                            <div className="d-flex justify-content-left mb-3">
                                <span className="badge-news">BREAKING NEWS</span>
                            </div>
                            <h1 class="title mt-3" style={{fontSize:'2rem'}}>
                                <span style={{fontSize:'3.2rem'}}>A</span>theletics <span>*</span> <span style={{fontSize:'3.2rem'}}>B</span>adminton <span style={{fontSize:'3.2rem'}}>C</span>ricket
                            </h1>
                            <p class="description">
                            The Sports Kid Talent Hunt ignites the spirit of young athletes in Odisha, with a special focus on Bhubaneswar! This platform emphasizes essential skills crucial for excelling in athletics, cricket, and badminton. Through this initiative, kids refine their speed and endurance for athletics, master precision and teamwork for cricket, and develop agility and focus for Badminton. Let’s nurture the next generation of sports stars to thrive, grow, and shine in their favorite disciplines!
                            </p>
                            <Register/>
                        </div>
                        <div className="col-md-5 athelate_image_wrapper">
                            <img loading='lazy' className='athelate_image' src="images/home/athelate.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Section1;
