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
                </div>
            </div>


        </div>
    )
}
export default Slide_Home;