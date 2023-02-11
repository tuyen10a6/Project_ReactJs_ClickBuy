import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FaSearch } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './../../Img/Image_Header/clickbuy-aar.webp';

const Header = () => {
    const [location, setLocation] = useState(<>Khu vực của bạn: <br /><span style={{ color: "white" }}>Miền Bắc</span></>);
    const [selectedClass, setSelectedClass] = useState("");
    const handleDropdownSelect = (selectedLocation) => {
        setLocation(<>Khu vực của bạn: <br />{selectedLocation}</>);
        if (selectedLocation === "Miền Bắc" || selectedLocation === "Miền Nam") {
            setSelectedClass("selected");
        } else {
            setSelectedClass("");
        }
    };

    return (
        <div className="Header_Home">
            <div className="Logo_Home">
                <img className="Image_Logo" src={logo} />
            </div>
            <div className="Input_search__Home">
                <input placeholder="Bạn cần tìm gì?" className="Text_Input_search__HomePage" />
                <div className="icon_click_search">
                    <FaSearch />
                </div>
            </div>
            <div className="Location_Header">
                <DropdownButton id="dropdown-item-button" title={location}>
                    <Dropdown.Item as="button" onClick={() => handleDropdownSelect("Miền Bắc")}>Miền Bắc</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={() => handleDropdownSelect("Miền Nam")}>Miền Nam</Dropdown.Item>
                </DropdownButton>
            </div>
        </div>
    );
};

export default Header;