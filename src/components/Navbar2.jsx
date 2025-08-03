import "./Navbar2.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar2">
      <ul className="nav-links">
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/stores">Shops</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/loginForm">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
