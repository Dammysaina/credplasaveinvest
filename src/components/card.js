/* eslint-disable react/prop-types */
import React from "react";

const Card = (props) => {
  return (
    <div className="selection">
      <div className="profile_name">
        <img src={props.image} alt="service"></img>
        <p>{props.text}</p>
      </div>
      <div className="selection_text">
        <p>{props.body}</p>
        <div className="star_images">
          <img src={props.images} alt="rate"></img>
          <img src={props.images} alt="rate"></img>
          <img src={props.images} alt="rate"></img>
          <img src={props.images} alt="rate"></img>
          <img src={props.images} alt="rate"></img>
        </div>
      </div>
    </div>
  );
};

export default Card;
