import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from './img/Title-Logo.png' 
import { FaUserCircle } from "react-icons/fa";  

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo on the Left */}
      <div className="logo">
        <img className="Title-Img" src={logo} alt="Logo" />
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/product">Product</Link></li>
        <li><Link to="/client">Client</Link></li>
        <li><Link to="/contacts">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      {/* Profile Icon on the Right */}
      <div className="profile">
        <FaUserCircle className="profile-icon" />
      </div>
    </nav>
  );
};

export default Navbar;