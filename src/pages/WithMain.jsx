import React from 'react'
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../styles/withmain.css'
import Visual from './Visual';


export default function WithMain() {

  // section1
  const menus = [
    { img: "images/cont1-1.jpg", alt: "cont1-1", name: "JL-255U 일체형 세면기" },
    { img: "images/cont1-2.jpg", alt: "cont1-2", name: "JL-254U 일체형 세면기" },
    { img: "images/cont1-3.jpg", alt: "cont1-3", name: "JL-253U 일체형 세면기" },
    { img: "images/cont1-4.jpg", alt: "cont1-4", name: "JC-301 원피스 양변기 (치마형)" },
    { img: "images/cont1-5.jpg", alt: "cont1-5", name: "JC-203 투피스 양변기 (치마형)" },
    { img: "images/cont1-6.jpg", alt: "cont1-6", name: "JC-100 투피스 양변기" },
  ];


  // section4 sldie
  const slides = [
    { id: 1, image: './images/cont4-1.jpg' },
    { id: 2, image: './images/cont4-2.jpg' },
    { id: 3, image: './images/cont4-3.jpg' },
    { id: 4, image: './images/cont4-4.jpg' },
    { id: 5, image: './images/cont4-5.jpg' },
    { id: 6, image: './images/cont4-6.jpg' },
  ];


  // section5
  const sec5s = [
    {
      img: "images/cont5-1.jpg",
      title: "자연과의 조화",
      sub: "NATURAL HARMONY",
    },
    {
      img: "images/cont5-2.jpg",
      title: "다음세대를 위한 혁신",
      sub: "NEXT GENERATION INNOVATION",
    },
    {
      img: "images/cont5-3.jpg",
      title: "창조적 지속가능성",
      sub: "CREATIVE SUSTAINABILITY",
    },
  ];


  return (
    <div className="page home-page">
      <Visual />
      
      <section className="section section1">
        <h2>OUR PRODUCTS</h2>
        <p>유려한 곡선의 멋과 선이 살아있는 WITH N</p>

        <ul>
          {menus.map((menu, index) => (
            <li key={index}>
              <Link to="/menu" className="btn btn-primary">
                <div className="photo">
                  <img src={menu.img} alt={menu.alt} />
                  <div className="cap">
                    <span>
                      <img src="images/icon_plus1.png" alt="plus-icon" />
                    </span>
                  </div>
                </div>
                <p className="txt">{menu.name}</p>
              </Link>
            </li>
          ))}         
      
        </ul>
      </section>
      {/* section1 e */}



      <section className="section section2">
        <div className="sec2_in">
          <h3>WITH N</h3>
          <p>브랜드 사이트 신교 오픈<br/>
          <span>2025.03.10</span></p>
        </div>
      </section>
      {/* section2 e */}


      <section className="section section3">
        <div class="sec3-1">
          <a href="#"><img src="images/cont3-1.jpg" alt="" /></a>
        </div>

        <div class="sec3-2">
          <p class="s3-2_txt1">ABOUT US</p>
          <p class="s3-2_txt2">
            <span>"고객의 일상에</span><br/>
            실용적인 가치를 더하다"</p>
        
          <p class="s3-2_txt3">2018년 설립된 서진통상은 고객 여러분의 쾌적한 욕실 생활공간 창출을 위해 노력하는
          위생도기 전문기업입니다. 합리적인 가격 정책, 철저한 품질 관리, 지속적인 제품 혁신, 신속한
          고객 서비스 이 네가지 핵심가치를 바탕으로, 고객 여러분이 믿음직한 파트너가 되어
          드리겠습니다.</p>
          
          <p class="s_btn"><a href="#">View More <span><img src="images/icon_plus.png" alt="+"/></span></a></p>
        </div>
      </section>
      {/* section3 e */}



      <section class="section4">
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
      </section>



      <section class="section5">
        <h2>"NATURE'S PROMISE <span>with WITH N"</span></h2>
        <p class="s5_txt1">우리는 매일 아침 욕실에서 하루를 시작합니다.<br/>
        그곳은 단순한 위생 공간이 아닌, 우리의 건강과 웰빙이 시작되는 첫걸음입니다.</p>

        <p class="s_btn"><a href="#">View More <span><img src="images/icon_plus.png" alt="+"/></span></a></p>

        <ul>
          {sec5s.map((sec5, index) => (
            <li key={index}>
              <a href="#">
                <img src={sec5.img} alt="" />
                <h3>
                  {sec5.title}
                  <br />
                  <span>{sec5.sub}</span>
                </h3>
              </a>
            </li>
          ))}
        </ul>
      </section>
    {/* section5 e */}


    </div>
    // all div
  )
}
