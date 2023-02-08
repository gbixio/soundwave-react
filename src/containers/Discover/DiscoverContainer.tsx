import React from 'react';
import {Discover} from './Discover'
import covers  from '../../assets/covers.jpg';
import  microphone  from '../../assets/microphone.svg';
import albums from '../../assets/albums.svg';
import more from '../../assets/more.svg';



const DiscoverContainer = () => {
    return (
        <Discover>
            <div className='discover__container'>
                <h1>Discover new music</h1>
                <div className='discover__cards'>
                    <div className='discover__mini-card'> 
                        <img src={microphone} alt="" />            
                        <p>Charts</p>
                    </div>
                    <div className='discover__mini-card'> 
                        <img src= {albums} alt="" />
                        <p>Albums</p>
                    </div>
                    <div className='discover__mini-card'> 
                        <img src={more} alt="" />
                        <p>More</p>
                    </div>
                    </div>
                <p>By joining you can benefit by listening the latest albums released</p>
            </div>
            <img className='discover__img' src={covers} alt="covers" />    
         </Discover>
    )
    }

export default DiscoverContainer

           
