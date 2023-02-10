import React from "react";

import logo from './../../Img/clickbuy-aar.webp';
const Header = (props) => {
    return (
        <div className="Header_Home">
            <div className="Logo_Home">
                {/*  Trong react sử dụng thẻ img không đc viết image */}
                <img src={logo}></img>

            </div>
        </div>
    )
}
export default Header;