import React from "react";
import './../../Css/HomePage/ProductApple.scss'
import DataMenuApple from './../../Data/DataMenuApple'
const ProductApple = () => {
    return (

        <div className="Apple_Full">
            <div className="ex_hotlink">
                <h2>
                    Apple - Authorised Reseller
                </h2>
                <div className="ex_menuscoll">
                    <div className="ex_dmc">
                        <div className="ex_collapse">
                            <ul className="FullItemApple">
                                {DataMenuApple.map((item) => (

                                    <li className="Item_Apple" key={item.id}>
                                        <a > {item.Name}</a>
                                    </li>


                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductApple;