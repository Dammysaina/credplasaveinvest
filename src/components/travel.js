import React from "react";
import move from "../assests/images/move.svg";
import travel from "../assests/images/travel.svg";
import paybag from "../assests/images/paybag.svg"
import pay from "../assests/images/pay.svg";
import shop from "../assests/images/shop.svg"
import arrowforward from "../assests/images/arrowforward.svg";
import "../assests/css/home.css";

const Travel = (props) => {
  

  return (
    <div className="travel_container">
      <div className="move_travels">
        <div>
          <img src={move} alt="move" />
        </div>
        <div className="move_credpal">
          <h2>Move with CredPal</h2>
          <p>
            CredPal users can pay for rides or food orders on Bolt, with the
            option to pay now or pay later, depending on the payment options
            available.
          </p>
        </div>
        <div className="learn_more">
          <p>Learn More</p>
          <img src={arrowforward} alt="arrow" />
        </div>
      </div>
      <div className="move_travels travel_travels">
        <div>
          <img src={travel} alt="move" />
          <img src={paybag} alt="travel"/>
        </div>
        <div className="move_credpal">
          <h2>Travel with CredPal</h2>
          <p>
            CredPal users can pay for bills and services with the option to pay
            now or pay later, depending on the payment options available.
          </p>
        </div>
        <div className="learn_more travel_more">
          <p>Learn More</p>
          <img src={arrowforward} style={{backgroundColor: '#AF5FFC'}} alt="arrow" />
        </div>
      </div>

      <div className="move_travels pay_travels">
        <div>
          <img src={pay} alt="move" />
        </div>
        <div className="move_credpal">
          <h2>Pay with CredPal</h2>
          <p>
            CredPal users can pay for fight with the option to pay now or pay
            later, depending on the payment options available.
          </p>
        </div>
        <div className="learn_more pay_more">
          <p>Learn More</p>
          <img src={arrowforward} style={{backgroundColor: '#3196FA'}} alt="arrow" />
        </div>
      </div>

      <div className=" move_travels shop_travels">
        <div>
          <img src={shop} alt="move" />
        </div>
        <div className="move_credpal">
          <h2>Shop with CredPal</h2>
          <p>
            The CredPal marketplace offers a wide range of products from various
            merchants, and users can choose to pay for their purchases in
            instalments.
          </p>
        </div>
        <div className="learn_more shop_more">
          <p>Learn More</p>
          <img src={arrowforward} style={{backgroundColor: '#614BE4'}}alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Travel;
