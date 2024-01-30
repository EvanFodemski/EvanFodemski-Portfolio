import React, { useState } from "react";
import '../styles/header.css';
import topLeft from '../assets/img/topleft.png';
import { NavLink } from 'react-router-dom';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navBar">
            <img src={topLeft} alt="Evan Fodemski" className="logo" />

            {/* Desktop Menu */}
            <div className="desktopMenu">
                <NavLink to="/" className="navItems">Home</NavLink>
                <NavLink to="/about" className="navItems">About</NavLink>
                <NavLink to="/portfolio" className="navItems">Portfolio</NavLink>
                <NavLink to="/resume" className="navItems">Resume</NavLink>
                <NavLink to="/contact" className="navItems">Contact</NavLink>
            </div>

            {/* Mobile Menu */}
            <div className="mobileMenu">
                <button onClick={toggleMenu} className="menuButton">&#9776; Menu</button>
                {isMenuOpen && (
                    <div className="mobileDropdown">
                        <NavLink to="/" onClick={toggleMenu} className="navItems">Home</NavLink>
                        <NavLink to="/about" onClick={toggleMenu} className="navItems">About</NavLink>
                        <NavLink to="/portfolio" onClick={toggleMenu} className="navItems">Portfolio</NavLink>
                        <NavLink to="/resume" onClick={toggleMenu} className="navItems">Resume</NavLink>
                        <NavLink to="/contact" onClick={toggleMenu} className="navItems">Contact</NavLink>
                    </div>
                )}
            </div>
        </nav>
    );
}
