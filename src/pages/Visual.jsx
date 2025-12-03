import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../styles/visual.css'


export default function Visual() {

  // const BasicSlider = () => {
  const slides = [
    { id: 1, image: './images/visual-1.jpg' },
    { id: 2, image: './images/visual-2.jpg' },
    { id: 3, image: './images/visual-3.jpg' },
  ];

  return (
    <div className="visual">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        // 슬라이드간격
        slidesPerView={1}
        // 한번에 1개 슬라이드표시
        navigation  //화살표버튼
        pagination={{ clickable: true }}  //하단페이저(dot)
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}              
        className="basic-swiper"
        
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-content">
              <img 
                src={slide.image} 
                alt={`Slide ${slide.id}`}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}

              />
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  </div>
  )
};




