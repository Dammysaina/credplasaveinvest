import React from "react";
import iphone from "../assests/images/iPhone.svg";
import frame1 from "../assests/images/frame1.svg";
import frame2 from "../assests/images/frame2.svg";
import frame3 from "../assests/images/frame3.svg";
import "../assests/css/home.css"
const Home = () => {
  return (
    <div>
      <div className="financialneeds_container">
        <div className="financial_needs">
          <h3>One App, all your Financial Needs</h3>
          <p>
            Manage your finances on the move with a single, user-friendly app
            that allows you to make payments, save money, invest, and access
            credit.
          </p>
        </div>
        <div className="phone_container">
          <img className="phone_image" src={iphone} alt="iphone" />
          <img className="frame_one" src={frame1} alt="frame" />
          <img className="frame_two" src={frame2} alt="frame" />
          <img className="frame_three" src={frame3} alt="frame" />
        </div>
      </div>
      <div>
        <div>
            <h3>Our customers love us</h3>
            <p>Read what they have to say</p>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
