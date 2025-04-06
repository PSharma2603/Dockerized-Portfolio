import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Basic Info</Link>
    <Link to="/work">Work</Link>
    <Link to="/skills">Skills</Link>
    <Link to="/resources">Resources</Link>
    <Link to="/dev-setup">Dev Setup</Link>
    <Link to="/contact">Contact</Link>
    <button onClick={() => document.body.classList.toggle('dark')}>🌓</button>
  </nav>
);

export default Navbar;
