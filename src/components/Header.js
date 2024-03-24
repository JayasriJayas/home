import '../App.css';
import React, { useState } from 'react';
import { FaBars,FaTimes } from 'react-icons/fa';
import Logo2020white2 from '../img/Logo2020white2.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="header">
            <div className="logo">
                <img src={Logo2020white2} alt="Logo" />
                <span className="logo-name">Cognoblaze</span>
            </div>
            <nav className="header-nav">
                {/* Menu Icon */}
                <div className="menu-icon" onClick={toggleMenu}>
                {isOpen ? <FaTimes className="glow" /> : <FaBars className="glow" />}
                </div>
                {/* Header Menu */}
                <ul className={`header-menu ${isOpen ? 'active' : ''}`}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Event</a></li>
                    <li><a href="#">Registration</a></li>
                    <li><a href="#">Winners</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
