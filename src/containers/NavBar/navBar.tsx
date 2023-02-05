import React from 'react';
import logo  from '../../assets/logo.png';
import '../NavBar/navBar.css';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar-links">
                    <div className="navbar-logo">
                        <img src={logo} alt="logo" />
                        <h1>Soundwave</h1>
                    </div>
            </div>
        <div className="navbar-links_container">
            <p><a href="#">Discover</a></p>
            <p><a href="#">Join</a></p>
        </div>
        </div>
    )
    }

export default NavBar