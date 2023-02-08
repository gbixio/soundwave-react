import React from 'react';
import './header.css'
import banner  from '../../assets/banner.png';
import { Button } from '../../components/Button/button';


const Header = () => {
    return (
        <section id='header__banner'>
            <div id='header__banner-img'>
                <img  src={banner} alt="banner" />
            </div>
            <aside> 
                <h1>Feel The Music</h1>
                <p>Stream over 20 thousand songs whith one click</p>
                <Button>Join Now</Button>
            </aside>
        </section>
    )
    }

export default Header