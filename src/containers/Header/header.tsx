import React from 'react';
import './header.module.css'
import banner  from '../../assets/banner.png';
import { Button } from '../../components/Button/button';


const Header = () => {
    return (
        <header>
            <div>
                <img src={banner} alt="banner" />
            </div>
            <div> 
                <h1>Feel The Music</h1>
                <p>Stream over 20 thousand songs whith one click</p>
                <Button>Join Now</Button>
            </div>
           
        </header>
    )
    }

export default Header