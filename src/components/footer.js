import React from "react";
import Logo from "../assests/images/logo.svg";
import Nigeria from "../assests/images/nigeria.svg";
import Dropdown from "../assests/images/forward.svg"

const Header = () => {
    return (
        <div>
            <div>
                <img src={Logo} alt="credpallogo"/>
                <p>Products</p>
                <p>Business</p>
            </div>
            <div>
                <p>FAQ</p>
                <div>
                    <img src={Nigeria} alt="nigeriaflag"/>
                    <img src={Dropdown} alt="dropdown" />
                </div>
            </div>
        </div>
    )
};

export default Header;