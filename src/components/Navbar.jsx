import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import SearchBar from "./Searchbar";

const Navbar = () => {
  return (
    <nav className="navbar">
     <div className="nav-logo"><Link to="/" style={{textDecoration:"none"}}> Clothify</Link></div>
      <div><SearchBar/></div>
      <div className="nav-cart">
        <Link to="/cart">🛒</Link>
      </div>
    </nav>
  );
};

export default Navbar;
