// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link> {/* Modifier le 'to' */}
      <Link to="/about" className="nav-link">About</Link>
    </nav>
  );
}

export default Navbar;
