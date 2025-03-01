import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./img/Title-Logo.png";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";  
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img className="Title-Img" src={logo} alt="Logo" />
      </div>

      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/product" onClick={() => setIsOpen(false)}>Product</Link></li>
        <li><Link to="/client" onClick={() => setIsOpen(false)}>Client</Link></li>
        <li><Link to="/contacts" onClick={() => setIsOpen(false)}>Contact</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
      </ul>

      <div className="nav-right">
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className="profile">
          <FaUserCircle className="profile-icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
