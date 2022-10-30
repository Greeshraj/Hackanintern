import React from "react";
import "./Navbar.css";
import logo from './densitylogo.png';

export default function Navbar() {
  return (
    <>
    <div className="navbar">
       <div className="logo">
        <img src={logo} alt="logo" />
 
     <div className="items">
      <a href="#">HOME</a>
       <a href="#">Stocks</a>
        <a href="#">About</a>
       <a href="#">Contact</a>
        <a href="#">Terms</a>
       

       
       

     </div>
     </div>
    </div>
    </>
  );
}
