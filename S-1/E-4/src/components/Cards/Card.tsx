import React from "react";
import "./Card.css";

export default function Card({src, restaurantName}: any) {
  return (
    <React.Fragment>
      <div className="card">
        <img className="card_image" src={src}/>
        <div className="card_details">
        <h3>{restaurantName}</h3>
        <p>Rating</p>
        <p>dish name</p>
        <p>Location</p>
        </div>
      </div>
    </React.Fragment>
  );
}
