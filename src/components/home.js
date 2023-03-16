import React from "react";
import iphone from "../assests/images/iPhone.svg";
import frame1 from "../assests/images/frame1.svg";
import frame2 from "../assests/images/frame2.svg";
import frame3 from "../assests/images/frame3.svg";
import Card from "./card";
import Selection from "./selection";
import "../assests/css/home.css";
import CustomButton from "../library/custombutton";
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
      <div className="customers_container">
        <div className="our_customers">
          <h2>Our customers love us</h2>
          <p>Read what they have to say</p>
        </div>
        <div className="forcastCard">
          {Selection.map((selectionItem) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <Card
                className="whatwedo_card"
                image={selectionItem.image}
                text={selectionItem.text}
                body={selectionItem.body}
                images={selectionItem.images}
              />
            );
          })}
        </div>
      </div>
      <div>

      </div>
      <div>

      </div>
      <div className="building_container">
        <h2>Start building your credit score today</h2>
        <p>Download our app to get started on your credit journey in Africa. Make the first move towards a better financial future today.</p>
        <CustomButton textColor="#3772FF" buttonHeight="2rem" buttonWidth="8rem">Sign Up</CustomButton>
      </div>
    </div>
  );
};

export default Home;
