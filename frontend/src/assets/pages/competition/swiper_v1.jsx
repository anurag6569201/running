import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
function Swiper_slide() {

    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                        <h2>The Sports Kid Talent Hunt in Bhubaneswar</h2>
                        <p>Participants are automatically assigned after registration by their school.</p>
                    </div>
                    <div className="col-md-10 mt-5">
                        <Swiper
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper"
                            slidesPerView={4}
                            spaceBetween={20}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 15,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                1440: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="swiper_slide_cont">
                                    <img className='shadow_v1' src="images/compt/bbsr.png" alt="Bhubaneswar" />
                                    <p className='p-4'>Free organisational material for running the sports day in Bhubaneswar</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper_slide_cont">
                                    <img className='shadow_v1' src="images/compt/koraput.png" alt="Koraput" />
                                    <p className='p-4'>Free organisational material for running the sports day in Koraput</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper_slide_cont">
                                    <img className='shadow_v1' src="images/compt/puri.png" alt="Puri" />
                                    <p className='p-4'>Free organisational material for running the sports day in Puri</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper_slide_cont">
                                    <img className='shadow_v1' src="images/compt/angul.png" alt="Angul" />
                                    <p className='p-4'>Free organisational material for running the sports day in Angul</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper_slide_cont">
                                    <img className='shadow_v1' src="images/compt/sambal.png" alt="Sambalpur" />
                                    <p className='p-4'>Free organisational material for running the sports day in Sambalpur</p>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Swiper_slide;

