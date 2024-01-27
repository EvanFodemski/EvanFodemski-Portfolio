import React from "react";
import '../styles/header.css';
import topLeft from '../assets/img/topleft.png';
import { NavLink } from 'react-router-dom';




export default function Header() {
    return (
        <nav className="navBar">
            <img src={topLeft} alt="Evan Fodemski" className="logo" />
            <div className="desktopMenu">
                <NavLink to="/" className="navItems">Home</NavLink>
                <NavLink to="/about" className="navItems">About</NavLink>
                <NavLink to="/portfolio"  className="navItems">Portfolio</NavLink>
                <NavLink to="/resume" className="navItems">Resume</NavLink>
                <NavLink to="/contact" className="navItems">Contact</NavLink>

            </div>
        </nav>
    );
}
