import DesignBar from '../home/design_bar';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Footer from '../home/footer';

function Finals() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-8 text-center mb-4">
            <h1>Mumbai Regional Finals</h1>
            <p>As an absolute highlight, five regional finals will be held in January/February 2025 with the best girls and boys from the respective region. Participants are selected based on the region's top lists by a predefined deadline (10 December 2024) and also by direct invitation from the organiser. The regional finals are organised in a professional setup in a modern athletics facility with trained judges and equipment.</p>
            <span className='rules_category_btn shadow_v1'>Read More <i class="bi bi-arrow-up-right"></i></span>
          </div>
        </div>
      </div>
      <div className="container-fluid d-flex justify-content-center mb-5">
        <img className='desc_img' src="images/compt/threeDesc.png" alt="" />
      </div>
      <DesignBar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <h2>The Athletics Kids Cup in Mumbai is divided into the following five districts.</h2>
            <p>Participants are automatically assigned to one of the five districts after registration by their school.</p>
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
                  <img src="images/compt/city1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper_slide_cont">
                  <img src="images/compt/city1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper_slide_cont">
                  <img src="images/compt/city1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper_slide_cont">
                  <img src="images/compt/city1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper_slide_cont">
                  <img src="images/compt/city1.png" alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4">
            <h1>Grand Mumbai Final</h1>
            <p>The best athletes from the five regional finals qualify for the Grand Mumbai Final. The 30 best athletes in each age category compete against each other.</p>
            <span>Date : 5 February 2025</span>
          </div>
          <div className="col-md-5 ground_img">
            <img src="images/compt/ground.png" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Finals;
