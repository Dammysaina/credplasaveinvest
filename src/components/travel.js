import React from "react";
import move from "../assests/images/move.svg";
import arrowforward from "../assests/images/arrowforward.svg";
import "../assests/css/home.css";

const Travel = () => {
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
      <div>
        <div className="travel_travels">
          <div>
            <img src={move} alt="move" />
          </div>
          <div className="move_credpal">
            <h2>Travel with CredPal</h2>
            <p>
              CredPal users can pay for bills and services with the option to
              pay now or pay later, depending on the payment options available.
            </p>
          </div>
          <div className="learn_more">
            <p>Learn More</p>
            <img src={arrowforward} alt="arrow" />
          </div>
        </div>
      </div>
      <div>
        <div className="pay_travels">
          <div>
            <img src={move} alt="move" />
          </div>
          <div className="move_credpal">
            <h2>Pay with CredPal</h2>
            <p>
              CredPal users can pay for fight with the option to pay now or pay
              later, depending on the payment options available.
            </p>
          </div>
          <div className="learn_more">
            <p>Learn More</p>
            <img src={arrowforward} alt="arrow" />
          </div>
        </div>
      </div>
      <div>
        <div className="shop_travels">
          <div>
            <img src={move} alt="move" />
          </div>
          <div className="move_credpal">
            <h2>Shop with CredPal</h2>
            <p>
              The CredPal marketplace offers a wide range of products from
              various merchants, and users can choose to pay for their purchases
              in instalments.
            </p>
          </div>
          <div className="learn_more">
            <p>Learn More</p>
            <img src={arrowforward} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;
