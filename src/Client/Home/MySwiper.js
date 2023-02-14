import React, { useEffect } from 'react';

import ImageOneSlide from './../../Img/slide-apple-watch-sr8-san-hang-01.png'
import ImageTwoSlide from './../../Img/slide-khuyen-mai-clickbuy-care-01slide.png'
import ImageThreeSlide from './../../Img/slide-valentine-day-iphone-01.png'
import ImageFourSlide from './../../Img/slide-iphone-14-pro-max-valentines-01.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const MySwiper = () => {


  return (
    // <div className="swiper-container">
    //   <div className="swiper-wrapper">
    //     <div className="swiper-slide">
    //       <img src={ImageOneSlide}></img>
    //     </div>
    //     <div className="swiper-slide">
    //       <img src={ImageTwoSlide}></img>
    //     </div>
    //     <div className="swiper-slide">
    //       <img src={ImageThreeSlide}></img>
    //     </div>
    //   </div>
    //   <div className="swiper-pagination"></div>
    //   <div className="swiper-button-prev"></div>
    //   <div className="swiper-button-next"></div>
    // </div>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={12}
      slidesPerView={1}
      loop={true}
      speed={400}
      slidesPerGroup={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}

    >
      <SwiperSlide>
        <img src={ImageOneSlide}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src={ImageTwoSlide}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src={ImageThreeSlide}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src={ImageFourSlide}></img>

      </SwiperSlide>

    </Swiper>


  );
};

export default MySwiper;