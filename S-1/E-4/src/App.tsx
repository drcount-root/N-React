import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import CardsContainer from "./components/CardsContainer/CardsContainer";

export default function App() {
  return (
    <React.Fragment>
      <NavBar />
      <CardsContainer/>
    </React.Fragment>
  );
}

/*
Header - Logo, Nav Items 

Body - Search, Restaurant Container, Restaurant Card

Footer - Copyright, Links, Address, Contact		
*/
