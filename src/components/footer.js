import React from "react";
import CustomButton from "../library/custombutton";
import Apple from "../assests/images/apple.svg";
import Google from "../assests/images/google.svg";
import Debitcard from "../assests/images/debitcard.svg";
import Phone from "../assests/images/footerphone.svg";
import "../assests/css/footer.css"

const Footer = () => {
  return (
    <div className="footer_container">
    <div className="footerone_container">
      <div className="join_container">
        <div>
          <h4>Join CredPal today</h4>
          <p>
            Join the millions of happy customers using CredPal to access credit,
            make payments, invest, and more by downloading the CredPal app.
          </p>
        </div>
        <div>
          <CustomButton
            buttonColor="#011947"
            buttonHeight="3rem"
            buttonWidth="10rem"
          >
            Download on the <span>App Store</span>{" "}
            <img className="arrow_right" src={Apple} alt="applelogo" />
          </CustomButton>
          <CustomButton
            buttonColor="#011947"
            buttonHeight="3rem"
            buttonWidth="10rem"
          >
            Download on the <span>Google Play</span>{" "}
            <img className="arrow_right" src={Google} alt="googlelogo" />
          </CustomButton>
        </div>
      </div>
      <div>
        <img src={Debitcard} alt="Debitcard"/>
        <img src={Phone} alt="Iphone"/>
      </div>
    </div>
    <div>
        
    </div>
    </div>
  );
};

export default Footer;
