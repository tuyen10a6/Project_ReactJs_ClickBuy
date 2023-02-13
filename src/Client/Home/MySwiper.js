import React, { useEffect } from 'react';

import ImageOneSlide from './../../Img/slide-apple-watch-sr8-san-hang-01.png'
import ImageTwoSlide from './../../Img/slide-khuyen-mai-clickbuy-care-01slide.png'
import ImageThreeSlide from './../../Img/slide-valentine-day-iphone-01.png'
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper';



const MySwiper = () => {
  useEffect(() => {
    new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true, ImageTwoSlide
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img src={ImageOneSlide}></img>
        </div>
        <div className="swiper-slide">
          <img src={ImageTwoSlide}></img>
        </div>
        <div className="swiper-slide">
          <img src={ImageThreeSlide}></img>
        </div>
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default MySwiper;