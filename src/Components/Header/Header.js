import React from "react";
import HeaderJson from "./Header.json";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  console.log(HeaderJson);
  return (
    <header className="header">
      <a href="/" className="logo">
        <i className="fas fa-shopping-basket"></i> Grocery
      </a>
      
    </header>
  );
};

export default Header;
