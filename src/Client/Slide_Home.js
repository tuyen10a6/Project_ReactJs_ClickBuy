import Imagetip from './../Img/clipse.svg'
import React from "react";
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
                        <span style={{ color: "#333399", fontWeight: 'bold', marginLeft: "10px" }}>Đặt mua sớm Samsung S23 Series, nhận ưu đãi lên tới 15 triệu. Đặt ngay !</span>

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

                            </div>
                        </div>
                        {/*  */}
                        <div className='col3 cb_banner_container'>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Slide_Home;