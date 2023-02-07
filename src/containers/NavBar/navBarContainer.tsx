import React from 'react';
import logo  from '../../assets/logo.png';
import { NavBar } from './navBar';

const NavBarContainer = () => {
    return (
        <NavBar>
            <div className="navbar-logo">
                <img src={logo} alt="logo" />
                <h1>Soundwave</h1>
            </div>
            
            <div className="navbar-links_container">
                <p><a href="#">Discover</a></p>
                <p><a href="#">Join</a></p>
            </div>
        </NavBar>
    )
    }

export default NavBarContainer