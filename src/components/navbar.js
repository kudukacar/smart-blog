import React from "react";
import logo from '../../content/assets/logo.png';
import { Link } from 'gatsby';

const NavBar = () => {
  return (
    <header className="nav">
      <nav className="leftnav">
        <img src={logo} alt="home physical therapy" />
        <div>
          <Link to="/">Smart Moves Physical Therapy</Link>
        </div>
      </nav>
      <nav className="rightnav">
        <Link activeClassName="selected" to="/">About</Link>
        <Link activeClassName="selected" to="/services">Services</Link>
        <Link activeClassName="selected" to="/insurance">Insurance</Link>
        <Link activeClassName="selected" to="/blog">Blog</Link>
        <Link activeClassName="selected" to="/contact">Contact</Link>
      </nav>
    </header>
  )
}

export default NavBar;