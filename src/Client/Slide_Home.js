import Imagetip from './../Img/clipse.svg'

// import ImageOneSlide from './../Img/slide-dat-hang-galaxy-s23-01-5.png'
// import ImageTwoSlide from './../Img/slide-khuyen-mai-clickbuy-care-01slide.png'
// import ImageThreeSlide from './../Img/slide-valentine-day-iphone-01.png'
import React, { useEffect, useState, useRef } from 'react';
import MySwiper from './Home/MySwiper';
import './../Css/SlideHome.scss'
import ImageOneRight from './../Img/Image_Slide/bpl-dat-hang-galaxy-s23-01-2.png';
import ImageTwoRight from './../Img/Image_Slide/bpl-apple-watch-uu-dai-to-01.png';
import ImageThreeRight from './../Img/Image_Slide/bpl-valentine-day-iphone-01.png';
import ImageBottomHome from './../Img/Image_Slide/bgw-iphone-chinh-hang-bao-hanh-24-thang-01.png'

const Slide_Home = () => {

    return (

        <div className="Slide_Home">
            <div className="Slide_Home_Content">
                <div className="Background_SlideTop">

                </div>
                <div className="containner_Slide" >
                    <div className="cb_tip">
                        <span>
                            <img src={Imagetip}></img>
                        </span>
                        <span style={{ color: "#333399", fontWeight: 'bold', marginLeft: "5px", fontSize: "14.5px" }}>Đặt mua sớm Samsung S23 Series, nhận ưu đãi lên tới 15 triệu. Đặt ngay !</span>

                    </div>
                    <div className='Row'>
                        {/*  */}
                        <div className='col-9 cb_slider'>
                            <div className='cb_menu_container'>
                                <ul className='FullMenu_container_Slide'>
                                    <li className='ItemMenu_container_Slide'>
                                        <a id='mega-menu-iconlink-one' className='mega-custom-icon mega-menu-link'>
                                            Điện thoại
                                            <span className='mega-indicator'>

                                            </span>
                                        </a>
                                    </li>
                                    <li className='ItemMenu_container_Slide'>
                                        <a id='mega-menu-iconlink-two' className='mega-custom-icon mega-menu-link'>
                                            Iphone
                                            <span className='mega-indicator'>

                                            </span>
                                        </a>
                                    </li>
                                    <li className='ItemMenu_container_Slide'>
                                        <a id='mega-menu-iconlink-three' className='mega-custom-icon mega-menu-link'>
                                            SamSung
                                            <span className='mega-indicator'>

                                            </span>
                                        </a>
                                    </li>
                                    <li className='ItemMenu_container_Slide'>
                                        <a id='mega-menu-iconlink-four' className='mega-custom-icon mega-menu-link'>
                                            Tablet
                                            <span className='mega-indicator'>

                                            </span>
                                        </a>
                                    </li>
                                    <li className='ItemMenu_container_Slide'>
                                        <a id='mega-menu-iconlink-five' className='mega-custom-icon mega-menu-link'>
                                            Máy tính
                                            <span className='mega-indicator'>

                                            </span>
                                        </a>
                                    </li>
                                    <li className='ItemMenu_container_Slide'>
                                        <a id='mega-menu-iconlink-six' className='mega-custom-icon mega-menu-link'>
                                            Đồng hồ
                                            <span className='mega-indicator'>

                                            </span>
                                        </a>
                                    </li>
                                    <li className='ItemMenu_container_Slide'>
                                        <a id='mega-menu-iconlink-seven' className='mega-custom-icon mega-menu-link'>
                                            Hàng cũ
                                            <span className='mega-indicator'>

                                            </span>
                                        </a>
                                    </li>
                                    <li className='ItemMenu_container_Slide'>
                                        <a id='mega-menu-iconlink-eight' className='mega-custom-icons mega-menu-link'>
                                            Thu cũ

                                        </a>
                                    </li>
                                    <li className='ItemMenu_container_Slide'>
                                        <a id='mega-menu-iconlink-nine' className='mega-custom-icon mega-menu-link'>
                                            Phụ kiện
                                            <span className='mega-indicator'>

                                            </span>
                                        </a>
                                    </li>
                                    <li className='ItemMenu_container_Slide'>
                                        <a id='mega-menu-iconlink-ten' className='mega-custom-icon mega-menu-link'>
                                            Sửa chữa
                                            <span className='mega-indicator'>

                                            </span>
                                        </a>
                                    </li>
                                    <li className='ItemMenu_container_Slide'>
                                        <a id='mega-menu-iconlink-eleven' className='mega-custom-icon mega-menu-link'>
                                            Tin công nghệ
                                            <span className='mega-indicator'>

                                            </span>
                                        </a>
                                    </li>
                                    <li className='ItemMenu_container_Slide'>
                                        <a style={{ paddingLeft: "43px" }} id='mega-menu-iconlink-twelve' className='mega-custom-icons mega-menu-link'>
                                            Góc thủ thuật
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='cb_slider_container'>
                                <MySwiper></MySwiper>
                                <div className='cb_slider_containner_bottom'>
                                    <img style={{ width: "658px", borderRadius: "10px", marginTop: "30px" }} src={ImageBottomHome}></img>

                                </div>

                            </div>
                        </div>
                        {/*  */}
                        <div className='col3 cb_banner_container'>
                            <div className='Title_banner_container'>
                                <h6>Khuyến mại đặc biệt</h6>
                            </div>
                            <div className="image_cb_banner_container">
                                <img src={ImageOneRight}></img>
                                <img src={ImageTwoRight}></img>
                                <img src={ImageThreeRight}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Slide_Home;