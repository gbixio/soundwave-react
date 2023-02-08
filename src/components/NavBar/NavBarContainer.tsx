import React from 'react';
import logo  from '../../assets/logo.png';
import { NavBar } from './NavBar';
import { Link } from 'react-router-dom';

const NavBarContainer = () => {
    return (
        <NavBar>
            <div className="navbar-logo">
                <img src={logo} alt="logo" />
                <Link to="/"><h1> Soundwave </h1> </Link>
            </div>
            
            <div className="navbar-links_container">
                <Link to="/discover"> <p>Discover</p>  </Link>
                <Link to="/join"> <p>Join</p>  </Link>
            </div>
        </NavBar>
    )
    }

export default NavBarContainer