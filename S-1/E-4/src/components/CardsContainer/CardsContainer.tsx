import React from "react";
import "./CardsContainer.css";
import Card from "../Cards/Card";

export default function CardsContainer() {
  return (
    <React.Fragment>
      <div className="cards_container">
        <Card
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f9f321299d6b91ffe24965cdbdf07351"
          restaurantName="Starbucks"
        />
        <Card
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ab979bffbd658e74de650a15ca0092a3"
          restaurantName="OvenStory"
        />
        <Card
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/0bf19a82b109b40c2f5c56d00f071a33"
          restaurantName="Subway"
        />
        <Card
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426"
          restaurantName="KFC"
        />
        <Card
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"
          restaurantName="Burger King"
        />
        <Card
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/okqkedt8ccz6e33vv2mp"
          restaurantName="Domino's"
        />
        <Card
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/satxpyotn3sdhnsph69c"
          restaurantName="Mughal Darbar"
        />
        <Card
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7"
          restaurantName="Pizza Hut"
        />
        <Card
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xeavoxm8mgzuw64hbbll"
          restaurantName="Barbeque Nation"
        />
        <Card
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/af8216b15abde417bb0e1d8fc44fb877"
          restaurantName="Keventers"
        />
      </div>
    </React.Fragment>
  );
}
