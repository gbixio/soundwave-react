import React from 'react';
import {Hero} from './Hero'
import banner  from '../../assets/banner.png';
import { Button } from '../../components/Button/Button';


const HeroContainer = () => {
    return (
        <Hero className='hero'>
            <div className='hero__banner-img'>
                <img  src={banner} alt="banner" />
            </div>
            <aside className='hero__aside'> 
                <h1>Feel The Music</h1>
                <p>Stream over 20 thousand songs whith one click</p>
                <Button>Join Now</Button>
            </aside>
        </Hero>
    )
    }

export default HeroContainer