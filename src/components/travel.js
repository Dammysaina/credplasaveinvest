import React from "react";
import move from "../assests/images/move.svg";
import arrowforward from "../assests/images/arrowforward.svg";
import "../assests/css/home.css"

const Travel = () => {
  return (
    <div className="travel_container">
      <div className="move_container move_travels">
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
        <div className="move_container move_travels">
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
      </div>
      <div>
        <div className="move_container move_travels">
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
      </div>
      <div>
        <div className="move_container move_travels">
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
      </div>
    </div>
  );
};

export default Travel;
